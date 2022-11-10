import type * as model from '@/model';

const BASE_URL = 'https://algoindexer.algoexplorerapi.io/v2';
const abNote2 = 'YWIyLmdhbGxlcnk';

import urlcat from 'urlcat';

type ApiResponse<T> =
  | {
      data: T;
      error: null;
      url: string;
    }
  | {
      data: null;
      error: string;
      url: string;
    };

const getRequest = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return null as any;
};

export class AlgoExplorerApi {
  static isAb2Sale = (assetId: string | number, address: string) => {
    const getSmartContractUrl = `${BASE_URL}/transactions?note-prefix=${abNote2}=&tx-type=axfer&asset-id=${assetId}&limit=1&address-role=receiver&address=${address}`;
    return getRequest<model.GetSmartContract>(getSmartContractUrl);
  };

  static isAssetOwner = async ({
    assetId,
    address,
  }: {
    assetId: string | number;
    address: string | string[];
  }): Promise<boolean> => {
    const owners = await AlgoExplorerApi.getAssetOwners({ assetId });
    const isOwner = Array.isArray(address)
      ? owners.some(o => address.includes(o))
      : owners.includes(address);

    if (isOwner) return true;

    const [rgSales, ab2Sales] = await Promise.all([
      AlgoExplorerApi.getRandGallerySale(assetId),
      Promise.all(
        owners.map(currentOwner => AlgoExplorerApi.isAb2Sale(assetId, currentOwner)),
      ),
    ]);

    const rgSellers = rgSales.flatMap(rg => rg.sellerAddress);
    const ab2Sellers = ab2Sales.flatMap(ab2 => ab2.transactions.map(t => t.sender));
    const allSellers = rgSellers.concat(ab2Sellers);

    const isOwnerSelling = Array.isArray(address)
      ? allSellers.some(o => address.includes(o))
      : allSellers.includes(address);

    return isOwnerSelling;
  };

  static getAssetOwners = async ({
    assetId,
  }: {
    assetId: string | number;
  }): Promise<string[]> => {
    const url = urlcat(BASE_URL, '/assets/:assetId/balances', {
      assetId: assetId,
      'currency-greater-than': 0,
      limit: 25,
    });
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data: model.GetAssetBalances = await response.json();
        return data.balances.map(b => b.address);
      }
      return [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  static async getAssetsInfo(
    assets: model.AccountAsset[],
  ): Promise<Array<model.AssetApi | undefined>> {
    const assetsApiResponse = await Promise.all(
      assets.map(async accountAsset => {
        const assetDetails = await AlgoExplorerApi.getAssetInfo(accountAsset['asset-id']);
        return assetDetails
          ? {
              ...accountAsset,
              ...assetDetails,
            }
          : undefined;
      }),
    );
    return assetsApiResponse;
  }

  static async getAssetInfo(
    assetId: number | string,
  ): Promise<model.GetAssetInfo['asset']> {
    const url = `${BASE_URL}/assets/${assetId}`;
    const response = await getRequest<model.GetAssetInfo>(url);
    if (!response) return null;
    return response.asset;
  }

  static async getAssetSender(
    assetId: number,
  ): Promise<ApiResponse<model.GetAssetSender>> {
    const url = `${BASE_URL}/transactions?note-prefix=${abNote2}=&tx-type=axfer&sig-type=lsig&asset-id=${assetId}&limit=1000&address-role=sender`;
    const response = await getRequest<model.GetAssetSender>(url);
    if (!response) return { data: null, error: 'Failed to fetch', url };
    if (!response.transactions) return { data: null, error: 'No transactions', url };
    if (!response.transactions.length)
      return { data: null, error: 'No transactions', url };
    return { data: response, error: null, url };
  }

  static async getAssetBalances(
    assetId: number,
  ): Promise<ApiResponse<model.GetAssetBalances>> {
    const url = `${BASE_URL}/assets/${assetId}/balances?limit=1000`;
    const response = await getRequest<model.GetAssetBalances>(url);
    if (!response) return { data: null, error: 'Failed to fetch', url };
    if (!response.balances) return { data: null, error: 'No transactions', url };
    if (!response.balances.length) return { data: null, error: 'No transactions', url };
    return { data: response, error: null, url };
  }

  static async getSmartContract(
    assetId: number,
    smartContractAddress: string,
  ): Promise<ApiResponse<model.GetSmartContract>> {
    const url = `${BASE_URL}/transactions?note-prefix=${abNote2}=&tx-type=axfer&asset-id=${assetId}&limit=1&address-role=receiver&address=${smartContractAddress}`;
    const response = await getRequest<model.GetSmartContract>(url);
    if (!response) return { data: null, error: 'Failed to fetch', url };
    if (!response.transactions) return { data: null, error: 'No transactions', url };
    if (!response.transactions.length)
      return { data: null, error: 'No transactions', url };
    return { data: response, error: null, url };
  }

  static async getApplicationResponse(
    _assetId: number,
    lastSendRound: number,
  ): Promise<ApiResponse<model.GetApplicationId>> {
    const url = `${BASE_URL}/transactions?note-prefix=${abNote2}=&round=${lastSendRound}`;
    const response = await getRequest<model.GetApplicationId>(url);
    if (!response) return { data: null, error: 'Failed to fetch', url };
    if (!response.transactions) return { data: null, error: 'No transactions', url };
    if (!response.transactions.length)
      return { data: null, error: 'No transactions', url };
    return { data: response, error: null, url };
  }

  static async getApplicationDetails(
    applicationId: number,
  ): Promise<model.GetApplicationDetails | null> {
    const url = `${BASE_URL}/transactions?note-prefix=${abNote2}=&limit=1&application-id=${applicationId}`;
    const response = await getRequest<model.GetApplicationDetails>(url);
    return response;
  }

  static async getRandGallerySale(
    assetId: number | string,
  ): Promise<model.RandGallerySale[]> {
    const url = `https://www.randswap.com/v1/nft-offers/${assetId}`;
    const response = await getRequest<model.RandGallerySale[]>(url);
    return response;
  }

  static async getAccountInfo(address: string): Promise<model.GetAccountInfo> {
    const url = `${BASE_URL}/accounts/${address}`;
    const response = await getRequest<model.GetAccountInfo>(url);
    if (!response) return null!;
    if (!response.account) return null!;
    return response;
  }

  static async getAccountAssets(address: string[]): Promise<model.AccountAsset[]> {
    const accountAssets = await Promise.all(
      address.map(address => AlgoExplorerApi.getAccountInfo(address)),
    );
    const validAccountAssets = accountAssets.filter(a => !!a?.account);
    return validAccountAssets.flatMap(a => {
      const accountAssets = a.account?.assets || [];
      return accountAssets.map(accountAsset => ({
        ...accountAsset,
        potentialOwner: a.account?.address,
      }));
    });
  }
}

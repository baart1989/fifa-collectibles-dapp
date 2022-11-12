const BASE_URL = 'https://algoindexer.algoexplorerapi.io/v2';

const getRequest = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return null as any;
};

export class AlgoExplorerApi {
  static async getAssetInfo(assetId: number | string): Promise<any> {
    const url = `${BASE_URL}/assets/${assetId}`;
    const response = await getRequest<any>(url);
    if (!response) return null;
    return response.asset;
  }

  static async getAccountInfo(address: string): Promise<any> {
    const url = `${BASE_URL}/accounts/${address}`;
    const response = await getRequest<any>(url);
    if (!response) return null!;
    if (!response.account) return null!;
    return response;
  }

  static async getAccountAssets(address: string[]): Promise<any[]> {
    const accountAssets = await Promise.all(
      address.map((address) => AlgoExplorerApi.getAccountInfo(address))
    );
    const validAccountAssets = accountAssets.filter((a) => !!a?.account);
    return validAccountAssets.flatMap((a) => {
      const assets = a.account?.assets || [];
      return assets.map((accountAsset: any) => ({
        ...accountAsset,
        potentialOwner: a.account?.address,
      }));
    });
  }
}

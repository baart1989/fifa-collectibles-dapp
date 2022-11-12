import 'iron-session';

import type { ApiError } from 'next/dist/server/api-utils';

import { AlgoExplorerApi } from '@/utils/algoExplorer';
import { genericHandler } from '@/utils/genericHandler';

export interface Dictionary<T> {
  [id: string]: T;
}

const convertDictionaryToArray = (object: Dictionary<any>): Array<any> => {
  if (!object) return [];
  return Object.keys(object).map((key: string) => object[key]);
};

// const createEmptyAssest = () => {
//   const amountOfDrops = 3;
//   const myWalletItems: Dictionary<any> = {};
//   Array.from({ length: amountOfDrops }).forEach((_, i) => {
//     Array.from({ length: 39 }).forEach((_, index) => {
//       const name = `D0${i+1}-${index + 1}`;
//       return { name , id: undefined, count: 0, dropName: '' };
//     });

//   })
//   return myWalletItems;
// }

const walleRoute = genericHandler<any | ApiError>(async (req) => {
  switch (req.method) {
    case 'GET': {
      const myWalletItems: Dictionary<any> = {};
      const { walletAddress } = req.query;

      const data = await AlgoExplorerApi.getAccountAssets([
        walletAddress as string,
      ]);

      const assets = await Promise.all(
        data.map((d) => AlgoExplorerApi.getAssetInfo(d['asset-id']))
      );

      for (const a of assets) {
        if (!a) continue;
        const name = a.params['unit-name'] || '';
        const dropName = name.split('-').join('').slice(1);
        const asset = myWalletItems[name] || {
          name,
          id: a.index,
          count: 0,
          dropName,
        };
        asset.count++;

        myWalletItems[name] = asset;
      }

      const items = convertDictionaryToArray(myWalletItems);

      items.sort((a, b) => a.dropName - b.dropName);

      items.forEach((i) => {
        delete i.dropName;
      });
      return items;
    }
    default:
      throw new Error('Invalid API request');
  }
});

export default walleRoute;

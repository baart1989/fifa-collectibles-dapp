import 'iron-session';

import { withIronSessionApiRoute } from 'iron-session/next';
import { AlgoExplorerApi } from '@/utils/algoExplorer';
import { genericHandler } from '@/utils/genericHandler';
import { ApiError } from 'next/dist/server/api-utils';
import { sessionOptions } from '@/utils/session';

const walleRoute = genericHandler<any | ApiError>(async req => {
  console.log('WALLET: ', req);
  switch (req.method) {
    case 'GET': {
      const { walletAddress } = req.query;
      console.log('WALLET: ', walletAddress);
      return {};
    }
    default:
      throw new Error('Invalid API request');
  }
});

export default withIronSessionApiRoute(walleRoute, sessionOptions);

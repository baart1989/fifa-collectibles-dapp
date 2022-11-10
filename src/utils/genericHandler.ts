import { NextApiRequest, NextApiResponse } from 'next';
import type { ApiError }  from '@/model';

type Handler<T> = (
  req: NextApiRequest,
  res: NextApiResponse<T | ApiError>,
) => Promise<void>;

async function runFns<T>(
  req: NextApiRequest,
  res: NextApiResponse<T | ApiError>,
  authFuncs: Handler<T>[],
) {
  if (authFuncs) {
    for (const fnc of authFuncs) {
      await fnc(req, res);
    }
  }
}

function handleError<T>(e: any, res: NextApiResponse<ApiError>) {
  console.error('genericHandler: error', e);
  const error = typeof e === 'string' ? e : e.message;
  switch (error) {
    case 'User is not logged in':
    case 'Unable to create user': {
      res.status(401).send({ error: error });
      break;
    }
    case 'Collection not found':
    case 'Asset not found':
    case 'Invalid collection id': {
      res.status(404).send({ error: error });
      break;
    }
    default: {
      res.status(500).send({ error: error });
      break;
    }
  }
}

export async function withAuth<T>(
  req: NextApiRequest,
  res: NextApiResponse<T | ApiError>,
): Promise<void> {
  const user = req.session.user;
  if (!user || user.isLoggedIn === false) {
    res.status(401).send({ error: 'User is not logged in' });
    return;
  }
}

export function genericHandler<T>(
  func: (req: NextApiRequest, res: NextApiResponse<T | ApiError>) => Promise<any>,
  ...authFuncs: Handler<T>[]
) {
  return async (req: NextApiRequest, res: NextApiResponse<T | ApiError>) => {
    console.log('processing event: %j', req.url);
    try {
      await runFns(req, res, authFuncs);
      const data: T = await func(req, res);
      res.json(data);
    } catch (e) {
      handleError<T>(e, res);
    }
  };
}

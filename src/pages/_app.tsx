import '../styles/global.css';

import type { AppProps } from 'next/app';
import type { ApiError } from 'next/dist/server/api-utils';
import React from 'react';
import { SWRConfig } from 'swr';

import { fetchJson } from '@/utils/fetchJson';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SWRConfig
    value={{
      fetcher: fetchJson,
      onError: async (_err: ApiError | string) => {
        // console.log('ERR: ', err);
      },
    }}
  >
    <Component {...pageProps} />
  </SWRConfig>
);

export default MyApp;

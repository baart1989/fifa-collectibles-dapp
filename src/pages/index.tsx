import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useCallback, useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const { push } = useRouter();

  const [searchText, setSearchText] = useState('');

  const debouncedSearch = useCallback(
    debounce((searchText: string) => {
      setSearchText(searchText);
    }, 250),
    [] // will be created only once initially
  );

  const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    debouncedSearch(target.value);
  };

  const onSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    e?.stopPropagation();
    push(`/wallet/${searchText}`);
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Wallet search
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-700">
          <p>Enter the algorand address associated with your fifa account.</p>
        </div>
        <form
          onSubmit={(event) => onSubmit(event)}
          className="mt-5 sm:flex sm:items-center"
        >
          <div className="w-full sm:max-w-xs">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              onChange={onSearchTextChange}
              type="text"
              id="walletAddress"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <button
            onClick={(e) => onSubmit(e as any)}
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Search
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Index;

import type { ApiErrorTypes } from '@/model';

export async function fetchJson<JSON = unknown>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const response = await fetch(input, init);

  // if the server replies, there's always some data in json
  // if there's a network error, it will throw at the previous line

  // response.ok is true when res.status is 2xx
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
  if (!response.ok) {
    const defaultError = { error: 'An error occurred while fetching the data' };
    const err: ApiErrorTypes = (await response.json()) || defaultError;
    throw err;
  }
  return response.json();
}

export class FetchError extends Error {
  status: number;

  info: any;

  constructor({
    message,
    status,
    info,
  }: {
    status: number;
    message: string;
    info?: any;
  }) {
    super(message);
    this.name = 'FetchError';
    this.status = status;
    this.info = info;
  }
}

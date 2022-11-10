import { Dictionary } from './dictionary.model';

export type PaginatedData<T = any> = {
  key?: Dictionary<string>;
  count?: number;
  items: T[];
  hasNext: boolean;
};

import { StoreCountry } from '../types/StoreCountry';
import { App, AppIdentifier } from '../types/App';

export interface IStore {
  getApp: (id: string) => Promise<App | null>;
  getSuggestions: (query: string) => Promise<string[]>;
  getSearchResult: (store: StoreCountry, query: string) => Promise<AppIdentifier[]>;
}
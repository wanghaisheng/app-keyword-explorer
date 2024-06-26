/* eslint-disable @typescript-eslint/no-unused-vars */
import { StoreCountry } from '../types/StoreCountry';
import { App, AppIdentifier } from '../types/App';
import { IStore } from './IStore';
import { ReviewSortCriteria, Review } from '../types/Review';
import { ListCategory } from '../types/ListCategory';
import { ListCollection } from '../types/ListCollection';

export class GooglePlayStore implements IStore {
  getApp(id: string): Promise<App | null> {
    throw new Error('Method not implemented.');
  }

  getSuggestions(query: string): Promise<Array<string>> {
    throw new Error('Method not implemented.');
  }

  getSearchResult(store: StoreCountry, query: string): Promise<AppIdentifier[]> {
    throw new Error('Method not implemented.');
  }

  getListResult(store: StoreCountry, category: ListCategory, collection: ListCollection): Promise<string[]> {
    throw new Error('Method not implemented.');
  }

  getReviews(id: string, store: StoreCountry, sortedBy: ReviewSortCriteria, page: number): Promise<Review[]> {
    throw new Error('Method not implemented.');
  }
}

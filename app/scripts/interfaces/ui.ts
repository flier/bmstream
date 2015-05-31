/// <reference path="../types.ts" />

module ui {
  'use strict';

  export interface SearchResultItem {
    display: string;
  }

  export interface ISearchBarControllerScope extends ng.IScope {
    location: ng.ILocationService;

    simulateQuery: boolean;
    isDisabled: boolean;
    noCache: boolean;

    onSearchTextChanged(text: string);
    onSelectedItemChanged(item: Object);

    querySearch(query: string): SearchResultItem[];
  }

  export interface IBookmarkViewScope extends ng.IScope {
    location: ng.ILocationService;
  }
}

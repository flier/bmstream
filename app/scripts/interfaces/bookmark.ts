/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export interface ITag {
    name: string;
    bookmarks: IBookmarkCollection;
  }

  export interface ITagCollection {
    [index: string]: ITag;
  }

  export interface IBookmark {
    id: string;
    parent?: IBookmark;
    url: string;
    title: string;
    createTime: moment.Moment;
    tags: ITagCollection;
  }

  export interface IBookmarkCollection {
    [index: number]: IBookmark;
  }

  export interface IBookmarkCollectionTreeScope extends ng.IScope {
    location: ng.ILocationService;
  }


  export interface IBookmarkCollectionViewScope extends ng.IScope {
    bookmarks: IBookmarkCollection;
    location: ng.ILocationService;
  }

  export interface IBookmarkVisitor {
    visit(node: chrome.bookmarks.BookmarkTreeNode): void;
  }

  export interface IBookmarkImporter {
    visitor: IBookmarkVisitor

    import(nodes: chrome.bookmarks.BookmarkTreeNode[]): void;
  }
}

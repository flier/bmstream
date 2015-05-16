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

  export interface IBookmarkCollectionScope extends ng.IScope {
    bookmarks: IBookmarkCollection;
  }

  export interface IBookmarkCollectionViewScope extends IBookmarkCollectionScope {
    location: ng.ILocationService;
  }

  export interface IBookmarkProvider {
    bookmarks: IBookmarkCollection;
  }

  export interface IBookmarkVisitor {
    visit(node: chrome.bookmarks.BookmarkTreeNode): void;
  }

  export interface IBookmarkImporter {
    visitor: IBookmarkVisitor

    import(nodes: chrome.bookmarks.BookmarkTreeNode[]): void;
  }
}

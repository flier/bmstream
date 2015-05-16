/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class BookmarkProvider implements IBookmarkProvider {
    bookmarks: IBookmarkCollection;

    constructor(

    ) {}
  }

  export class BookmarkImporter implements IBookmarkImporter {
    constructor(

    ) {}

    imports(visitor: IBookmarkVisitor) {
      chrome.bookmarks.getTree((nodes) => this.import(nodes, visitor))
    }

    import(nodes: chrome.bookmarks.BookmarkTreeNode[], visitor: IBookmarkVisitor) : void {
      for (var node in nodes) {
        visitor.visit(node)

        if (node.children) {
          this.import(node.children, visitor)
        }
      }
    }
  }
}

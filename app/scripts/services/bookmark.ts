/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class BookmarkProvider implements IBookmarkProvider {

  }

  export class BookmarkImporter implements IBookmarkImporter {
    log = log4javascript.getLogger("bookmarks.BookmarkImporter");

    constructor(public visitor: IBookmarkVisitor) {}

    imports() {
      chrome.bookmarks.getTree((nodes) => this.import(nodes))
    }

    import(nodes: chrome.bookmarks.BookmarkTreeNode[]) : void {
      for (var node in nodes) {
        this.visitor.visit(node)

        if (node.children) {
          this.import(node.children)
        }
      }
    }
  }
}

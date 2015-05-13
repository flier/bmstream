/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class BookmarkStorage implements IBookmarkStorage {
    private log = log4javascript.getLogger("storage.BookmarkStorage");
  }

  export class ScreenshotStorage implements IScreenshotStorage {
    private log = log4javascript.getLogger("storage.ScreenshotStorage");
  }
}

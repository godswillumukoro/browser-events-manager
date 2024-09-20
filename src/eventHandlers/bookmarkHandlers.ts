import { EventData, EventHandler, EventType } from '../types';

export class BookmarkCreatedHandler implements EventHandler {
  handleEvent(data: [string, chrome.bookmarks.BookmarkTreeNode]): EventData {
    const [id, bookmark] = data;
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'bookmarks.onCreated' as EventType,
      value: { id, bookmark },
    };
  }
}

export class BookmarkRemovedHandler implements EventHandler {
  handleEvent(data: [string, chrome.bookmarks.BookmarkTreeNode]): EventData {
    const [id, removeInfo] = data;
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'bookmarks.onRemoved' as EventType,
      value: { id, removeInfo },
    };
  }
}
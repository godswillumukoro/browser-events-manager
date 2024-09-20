export interface EventData {
  id: number;
  timestamp: string;
  eventType: string;
  value: any;
}

export interface EventHandler {
  handleEvent(data: any): EventData | null;
}

export type EventType =
| 'tabs.onCreated'
| 'tabs.onUpdated'
| 'tabs.onMoved'
| 'windows.onCreated'
| 'windows.onRemoved'
| 'windows.onFocusChanged'
| 'bookmarks.onCreated'
| 'bookmarks.onRemoved'
| 'cookies.onChanged'
| 'history.onVisited'
| 'downloads.onCreated'
| 'downloads.onChanged'
| 'sessions.onChanged'
| 'idle.onStateChanged';

export interface Storage {
  set(key: string, value: EventData): void | Promise<void>;
  get(key: string): EventData | undefined | Promise<EventData | undefined>;
  getAll(): { [key: string]: EventData } | Promise<{ [key: string]: EventData }>;
  clear(): void | Promise<void>;
}

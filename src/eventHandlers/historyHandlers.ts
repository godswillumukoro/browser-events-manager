import { EventData, EventHandler, EventType } from '../types';

export class HistoryVisitedHandler implements EventHandler {
  handleEvent(historyItem: chrome.history.HistoryItem): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'history.onVisited' as EventType,
      value: historyItem,
    };
  }
}
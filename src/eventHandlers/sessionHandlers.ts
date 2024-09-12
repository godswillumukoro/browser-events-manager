import { EventData, EventHandler, EventType } from '../types';

export class SessionChangedHandler implements EventHandler {
  handleEvent(): EventData {
    return {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      eventType: 'sessions.onChanged' as EventType,
      value: null,
    };
  }
}
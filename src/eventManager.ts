import { EventData, Storage, EventHandler } from './types';
import { ExternalStorage } from './api/externalStorage';

export class EventManager {
  constructor(
    private inMemoryStorage: Storage,
    private chromeStorage: Storage,
    private externalStorage: ExternalStorage,
    private eventHandlers: { [key: string]: EventHandler }
  ) {}

  async saveData(eventData: any, eventType: string): Promise<void> {
    try {
      const handler = this.eventHandlers[eventType];
      if (!handler) {
        console.warn(`Unhandled event type: ${eventType}`);
        return;
      }

      const data = handler.handleEvent(eventData);

      // Check if data is null before proceeding
      if (data === null) {
        console.warn(`No valid data returned for event type: ${eventType}`);
        return;
      }

      // Log data for WAL (temp storage)
      await this.inMemoryStorage.set(`log_${data.id}`, data);

      // Write data to local storage (persistent storage)
      await this.chromeStorage.set(data.id.toString(), data);

      // Replicate data to external storage (backup storage)
      await this.externalStorage.replicate({ [data.id]: data });
    } catch (error) {
      console.error(`Error saving data: ${error}`);
    }
  }

  async recoverFromLogs(): Promise<void> {
    try {
      const logs = await this.inMemoryStorage.getAll();
      for (const [key, data] of Object.entries(logs)) {
        if (key.startsWith('log_')) {
          await this.saveData(data.value, data.eventType);
          await this.inMemoryStorage.clear();
        }
      }
      console.log('Recovered from in-memory logs successfully');
    } catch (error) {
      console.error(`Error recovering from logs: ${error}`);
    }
  }

  async getAllData(): Promise<{ [key: string]: EventData }> {
    return await this.chromeStorage.getAll();
  }

  async clearAllData(): Promise<void> {
    await this.chromeStorage.clear();
    console.log('Data cleared successfully');
  }
}

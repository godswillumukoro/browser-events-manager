import { EventData } from '../types';

export class ExternalStorage {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async replicate(data: { [key: string]: EventData }): Promise<void> {
    const response = await fetch(`${this.apiUrl}/backup/replicate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error replicating data: ${response.statusText}`);
    }
  }
}
import type { NewTransfert } from '../../domain/NewTransfert';
import type { TransfertRepository } from '../../domain/TransfertRepository';

export class TransfertApiRepository implements TransfertRepository {
  async saveTransfert(transfert: NewTransfert): Promise<void> {
    try {
      const response = await fetch('/api/accounts/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transfert),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error in TransfertApiRepository:', error);
      throw error;
    }
  }
}

import type { Transaction } from '../../domain/Transaction';
import type { TransactionRepository } from '../../domain/TransactionRepository';

interface TransactionApiResponse {
  description: string;
  id: string;
  type: string;
  account: string;
  date: string;
  amount: number;
}

export class TransactionApiRepository implements TransactionRepository {
  async fetchTransactions(): Promise<Transaction[]> {
    try {
      const response = await fetch('/api/accounts/transactions');
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: TransactionApiResponse[] = await response.json();

      // Transform the API response to domain model
      return data.map(transaction => ({
        ...transaction,
        date: new Date(transaction.date)
      }));
    } catch (error) {
      console.error('Error in TransactionApiRepository:', error);
      throw error;
    }
  }
}

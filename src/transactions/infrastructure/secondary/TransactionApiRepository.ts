import type { Transaction } from '../../domain/Transaction';
import type { NewTransaction } from '../../domain/NewTransaction';
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

  async createTransaction(newTransaction: NewTransaction): Promise<void> {
    try {
      const apiTransaction = {
        ...newTransaction,
        type: "Virement" // Add the type field for the API
      };

      const response = await fetch('/api/accounts/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiTransaction),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error in TransactionApiRepository:', error);
      throw error;
    }
  }
}

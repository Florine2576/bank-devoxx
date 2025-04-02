import type { Transaction } from './Transaction';

export interface TransactionRepository {
  fetchTransactions(): Promise<Transaction[]>;
}

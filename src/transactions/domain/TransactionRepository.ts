import type { Transaction } from './Transaction';
import type { NewTransaction } from './NewTransaction';

export interface TransactionRepository {
  fetchTransactions(): Promise<Transaction[]>;
  createTransaction(newTransaction: NewTransaction): Promise<void>;
}

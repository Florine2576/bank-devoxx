import type { Account } from './Account';
import type { Transaction } from './Transaction';

export interface AccountRepository {
  fetchAccounts(): Promise<Account[]>;
  fetchTransactions(): Promise<Transaction[]>;
}

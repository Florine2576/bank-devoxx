import type { Account } from './Account';

export interface AccountRepository {
  fetchAccounts(): Promise<Account[]>;
}

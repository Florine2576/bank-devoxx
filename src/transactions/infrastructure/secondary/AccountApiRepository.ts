import type { AccountRepository } from '../../domain/AccountRepository';
import { AccountType } from '../../domain/Account';
import type { Account } from '../../domain/Account';

export class AccountApiRepository implements AccountRepository {
  async fetchAccounts(): Promise<Account[]> {
    try {
      const response = await fetch('http://localhost:8080/api/accounts');
      const data = await response.json();

      return [
        { type: AccountType.CHECKING, amount: data.checking },
        { type: AccountType.SAVING, amount: data.saving }
      ];
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return [];
    }
  }
}

import type { AccountRepository } from '../../domain/AccountRepository';
import { AccountType } from '../../domain/Account';
import type { Account } from '../../domain/Account';

export class AccountAdapter implements AccountRepository {
  async fetchAccounts(): Promise<Account[]> {
    try {
      const response = await import('../../../../cypress/fixtures/accounts.json');
      const data = response.default;

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

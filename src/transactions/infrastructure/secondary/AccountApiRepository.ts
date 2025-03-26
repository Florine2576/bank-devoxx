import type { Account, AccountType } from '../../domain/Account';
import type { AccountRepository } from '../../domain/AccountRepository';

interface AccountsApiResponse {
  checking: number;
  saving: number;
}

export class AccountApiRepository implements AccountRepository {
  async fetchAccounts(): Promise<Account[]> {
    try {
      const response = await fetch('/api/accounts');
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data: AccountsApiResponse = await response.json();

      // Transform the API response to domain model
      return [
        {
          type: 'CHECKING' as AccountType,
          amount: data.checking
        },
        {
          type: 'SAVING' as AccountType,
          amount: data.saving
        }
      ];
    } catch (error) {
      console.error('Error in AccountApiRepository:', error);
      throw error;
    }
  }
}

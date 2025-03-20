import type { AccountRepository } from '../../domain/AccountRepository';
import { AccountType } from '../../domain/Account';
import type { Account } from '../../domain/Account';
import type { Transaction } from '../../domain/Transaction';

export class AccountApiRepository implements AccountRepository {
  async fetchAccounts(): Promise<Account[]> {
    try {
      const response = await fetch('/api/accounts');
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

  async fetchTransactions(): Promise<Transaction[]> {
    try {
      const response = await fetch('/api/accounts/transactions');
      const data = await response.json();

      return data.map((transaction: {
        description: string;
        id: string;
        type: string;
        account: string;
        date: string;
        amount: number;
      }) => ({
        ...transaction,
        date: new Date(transaction.date)
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  }
}

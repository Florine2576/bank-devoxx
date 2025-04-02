import type { InjectionKey } from 'vue';
import type { Account } from '../domain/Account';
import type { AccountRepository } from '../domain/AccountRepository';

export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async getAccounts(): Promise<Account[]> {
    try {
      return await this.accountRepository.fetchAccounts();
    } catch (error) {
      console.error('Error fetching accounts:', error);
      return [];
    }
  }
}

export const accountServiceKey: InjectionKey<AccountService> = Symbol('AccountService');

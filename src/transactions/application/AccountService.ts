import type { Account } from '../domain/Account';
import type { AccountRepository } from '../domain/AccountRepository';

export class AccountService {
  constructor(private accountRepository: AccountRepository) {}

  async getAccounts(): Promise<Account[]> {
    return await this.accountRepository.fetchAccounts();
  }
}

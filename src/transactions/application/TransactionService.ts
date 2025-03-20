import type { Account } from '../domain/Account';
import type { AccountRepository } from '../domain/AccountRepository';
import type { Transaction } from '../domain/Transaction';
import type { InjectionKey } from 'vue';

export const transactionServiceKey: InjectionKey<TransactionService> = Symbol('TransactionService');

export class TransactionService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async getAccounts(): Promise<Account[]> {
    return this.accountRepository.fetchAccounts();
  }

  async getTransactions(): Promise<Transaction[]> {
    return this.accountRepository.fetchTransactions();
  }
}

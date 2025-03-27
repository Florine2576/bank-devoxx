import type { InjectionKey } from 'vue'
import type { Transaction } from '../domain/Transaction'
import type { NewTransaction } from '../domain/NewTransaction'
import type { TransactionRepository } from '../domain/TransactionRepository'

export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async getTransactions(): Promise<Transaction[]> {
    try {
      return await this.transactionRepository.fetchTransactions()
    } catch (error) {
      console.error('Error fetching transactions:', error)
      return []
    }
  }

  async createTransaction(newTransaction: NewTransaction): Promise<void> {
    this.transactionRepository.createTransaction(newTransaction)
  }
}

export const transactionServiceKey: InjectionKey<TransactionService> = Symbol('TransactionService')

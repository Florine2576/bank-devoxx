import type { InjectionKey } from 'vue';
import type { NewTransfert } from '../domain/NewTransfert';
import type { TransfertRepository } from '../domain/TransfertRepository';

export class TransfertService {
  constructor(private readonly transfertRepository: TransfertRepository) {}

  async createTransfert(transfert: NewTransfert): Promise<void> {
    try {
      await this.transfertRepository.saveTransfert(transfert);
    } catch (error) {
      console.error('Error creating transfert:', error);
      throw error;
    }
  }
}

export const transfertServiceKey: InjectionKey<TransfertService> = Symbol('TransfertService');

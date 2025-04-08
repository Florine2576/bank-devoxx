import type { NewTransfert } from './NewTransfert';

export interface TransfertRepository {
  saveTransfert(transfert: NewTransfert): Promise<void>;
}

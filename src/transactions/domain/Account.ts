export enum AccountType {
  CHECKING = 'checking',
  SAVING = 'saving'
}

export interface Account {
  type: AccountType;
  amount: number;
}

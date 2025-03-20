export interface Transaction {
  description: string;
  id: string;
  type: string;
  account: string;
  date: Date;
  amount: number;
}

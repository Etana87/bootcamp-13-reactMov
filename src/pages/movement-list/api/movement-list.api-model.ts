// Datos de una cuenta concreta
export interface Account {
  id: string;
  iban: string;
  name: string;
  balance: number;
  lastTransaction: string;
}

// Movimientos de esa cuenta
export interface Movement {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: string; // fecha en ISO
}

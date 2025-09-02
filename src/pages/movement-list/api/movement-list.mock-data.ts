import { Movement } from "./movement-list.api-model";

export const mockMovements: Movement[] = [
  {
    id: "1",
    description: "Compra supermercado",
    amount: -50,
    balance: 1450,
    transaction: "2019-12-10T10:30:00",
  },
  {
    id: "2",
    description: "Nómina",
    amount: 2000,
    balance: 3450,
    transaction: "2019-12-01T08:00:00",
  },
  {
    id: "3",
    description: "Pago Netflix",
    amount: -15,
    balance: 3435,
    transaction: "2019-12-15T20:15:00",
  },
];

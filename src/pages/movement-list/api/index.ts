import Axios from "axios";
import { Account, Movement } from "./movement-list.api-model";
import { mockMovements } from "./movement-list.mock-data";

const urlAccounts = `${import.meta.env.VITE_BASE_API_URL}/accounts`;
//const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getAccount = (accountId: string): Promise<Account> =>
  Axios.get<Account>(`${urlAccounts}/${accountId}`).then(({ data }) => data);

export const getMovements = (accountId: string): Promise<Movement[]> => {
  // filtrar mock según accountId si quieres simular
  return Promise.resolve(mockMovements.filter(m => m.id.startsWith(accountId)));

  // 🔹 cuando quieras API real:
  // Axios.get<Movement[]>(urlMovements, { params: { accountId } })
  //   .then(({ data }) => data);
;}
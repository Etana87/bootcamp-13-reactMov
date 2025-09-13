import Axios from "axios";
import { AccountVm } from "../account-add.vm";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: AccountVm): Promise<AccountVm> =>
  Axios.post<AccountVm>(url, account).then(({ data }) => data);

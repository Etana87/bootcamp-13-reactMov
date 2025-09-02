import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";

interface Props {
  movementList: MovementVm[];
}

export const MovementListTableComponent: React.FC<Props> = ({ movementList }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Descripción</th>
          <th>Importe</th>
          <th>Saldo</th>
        </tr>
      </thead>
      <tbody>
        {movementList.map(m => (
          <tr key={m.id}>
            <td>{m.transaction.toLocaleDateString()}</td>
            <td>{m.description}</td>
            <td>{m.amount}</td>
            <td>{m.balance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

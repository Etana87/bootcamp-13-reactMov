import React from "react";
import { AppLayout } from "@/layouts";
import classes from "./account-add.page.module.css";
import { AccountVm } from "./account-add.vm";
import { useNavigate } from "react-router-dom";
import { saveAccount } from "./api";

export const AccountAddPage: React.FC = () => {
  const navigate = useNavigate();

  const [account, setAccount] = React.useState<AccountVm>({
    type: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAccount(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones
    if (!account.type) {
      alert("Debes elegir un tipo de cuenta");
      return;
    }

    if (!account.name.trim()) {
      alert("Debes introducir un alias");
      return;
    }

    try {
      await saveAccount(account); // POST al backend
      navigate("/account-list");   // Volvemos a la lista
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      alert("No se pudo crear la cuenta. Intenta de nuevo.");
    }
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <h1>Agregar nueva cuenta</h1>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.formGroup}>
            <label>Tipo de cuenta</label>
            <select name="type" value={account.type} onChange={handleChange} required>
              <option value="">Selecciona un tipo</option>
              <option value="corriente">Cuenta corriente</option>
              <option value="ahorro">Cuenta ahorro</option>
            </select>
          </div>

          <div className={classes.formGroup}>
            <label>Alias</label>
            <input
              type="text"
              name="name"
              value={account.name}
              onChange={handleChange}
              placeholder="Nombre de la cuenta"
              required
            />
          </div>

          <button type="submit">Agregar cuenta</button>
        </form>
      </div>
    </AppLayout>
  );
};

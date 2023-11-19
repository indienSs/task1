import React from "react";
import PageLayout from "../../layouts/page-layuot";
import styles from "./Login.module.css";
import { fetchData } from "../../utils/fetchData";
import { useState } from "react";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changeLogin = e => setLogin(e.target.value);
  const changePassword = e => setPassword(e.target.value);
  const submitForm = () => {
    fetchData({ login, password }).then(res => console.log(res));
  };

  return (
    <PageLayout>
      <form className={styles.login} onSubmit={submitForm}>
        <input type="email" onChange={changeLogin} />
        <input type="password" onChange={changePassword} />
        <button type="submit">Войти</button>
      </form>
    </PageLayout>
  );
}

import React from "react";
import PageLayout from "../../layouts/page-layuot";
import styles from "./Login.module.css";
import { fetchData } from "../../utils/fetchData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const changeLogin = e => setLogin(e.target.value);
  const changePassword = e => setPassword(e.target.value);
  const submitForm = e => {
    e.preventDefault();
    fetchData({ login, password }).then(res => {
      if (res.ok) {
        navigate("/");
        window.localStorage.setItem("user", login);
      }
    });
  };

  return (
    <PageLayout>
      <form className={styles.login} onSubmit={submitForm}>
        <input type="email" name="login" value={login} onChange={changeLogin} />
        <input type="password" name="password" value={password} onChange={changePassword} />
        <button type="submit">Войти</button>
      </form>
    </PageLayout>
  );
}

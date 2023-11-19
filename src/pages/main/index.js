import React, { useState } from "react";
import PageLayout from "../../layouts/page-layuot";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export default function Main() {
  const [user, setUser] = useLocalStorage("user");

  const exitAccount = () => setUser(null);

  return (
    <PageLayout>
      {!user ? (
        <>
          <p>Необходимо войти в аккаунт</p>
          <a href="/login">
            <button>Войти</button>
          </a>
        </>
      ) : (
        <>
          <p>Вы зашли в аккаунт {user}</p>
          <button onClick={exitAccount}>Выйти</button>
        </>
      )}
    </PageLayout>
  );
}

import React, { useState } from "react";
import PageLayout from "../../layouts/page-layuot";

export default function Main() {
  const [user, setUser] = useState(window.localStorage.getItem("user"));

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
        </>
      )}
    </PageLayout>
  );
}

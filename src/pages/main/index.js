import React from "react";
import PageLayout from "../../layouts/page-layuot";

export default function Main() {
  return (
    <PageLayout>
      <p>Необходимо войти в аккаунт</p>
      <a href="/login">
        <button>Войти</button>
      </a>
    </PageLayout>
  );
}

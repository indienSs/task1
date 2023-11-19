export function fetchData({ login, password }) {
  return new Promise((res, rej) => setTimeout(() => res({ ok: true, login }), 1000));
}

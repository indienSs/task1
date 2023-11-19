import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [value, setValue] = useState(window.localStorage.getItem(key));

  useEffect(() => {
    if (!value) return window.localStorage.removeItem(key);
    window.localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}

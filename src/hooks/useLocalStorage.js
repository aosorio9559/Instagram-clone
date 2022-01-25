import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    /* Used try-catch to detect users who navigate in private mode, which disables localStorage */
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setLocalStorage];
}

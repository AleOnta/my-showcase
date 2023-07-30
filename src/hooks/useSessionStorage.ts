import { useState, useEffect } from "react";
import { EduExpInterface } from "../assets/interfaces/EduExpInterface";
import { AboutMeInterface } from "../assets/interfaces/AboutMeInterface";
import { Info_ContactsInterface } from "../assets/interfaces/Info_ContactsInterface";

function getSessionStorageOrDefault(
  key: string,
  defaultValue: EduExpInterface[] | AboutMeInterface | Info_ContactsInterface
) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

export function useSessionStorage(
  key: string,
  defaultValue: EduExpInterface[] | AboutMeInterface | Info_ContactsInterface
) {
  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

import { useState, useEffect } from "react";

//LOCAL STORAGE

function getLocalStorageValue(key: string, defaultValue: any) {
  // getting stored value
  const saved = localStorage.getItem(key)!;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

//SESSION STORAGE

function getSessionStorageValue(key: string, defaultValue: any) {
  // getting stored value
  const saved = sessionStorage.getItem(key)!;
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useSessionStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getSessionStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};


// COOKIE STORAGE
function getCookieObject(defaultValue:string) {
    const cookies = JSON.parse(JSON.stringify(document.cookie
        .split(';')
        .map((cookie) => cookie.split('='))
        .reduce((accumulator, [key, value]) => (
            {...accumulator, [key.trim()]: decodeURIComponent(value)}
            ), {})
    ))
    return cookies || defaultValue
}

export const useCookie = (defaultValue:string) => {
  const [value,setValue] = useState(() => {
    return getCookieObject(defaultValue)
  })

  const setItem = (input:any) => {

    for (let [key, value] of Object.entries(input)) {        
      document.cookie = `${key}=${value};`
    }

  }
  const updateCookie = (input:any) => {
    setValue(input);
    setItem(input);
};


    


  return [value, updateCookie];

}
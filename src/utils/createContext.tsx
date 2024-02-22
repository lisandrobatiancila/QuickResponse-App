import {createContext} from 'react';

export default function createAppContext<T>() {
  const AppContext = createContext<T | null>(null);

  return [AppContext.Provider, AppContext.Consumer];
}

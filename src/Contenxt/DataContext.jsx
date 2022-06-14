import {createContext, useContext} from 'react';
import data from '../data.json';

const Context = createContext()

export const useData = () => {
  const data = useContext(Context);
  if (!data) {
    throw new Error(`useData must be used within a DataProvider`);
  }

  return data;
}

export const DataProvider = ({children}) => {

  return <Context.Provider value={data}>{children}</Context.Provider>
}

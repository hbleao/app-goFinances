import { useContext } from "react"

import { AsyncStorageContext } from '../../context/contextAsyncStorage';

export const useTransaction = () => {
  const context = useContext(AsyncStorageContext);

  return {
    ...context
  }
} 
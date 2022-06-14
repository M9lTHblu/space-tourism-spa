import {createContext, useContext} from 'react';
import useMatchMedia from '../hooks/useMatchMedia';

const ViewportSizeContext = createContext();

export const useViewportSizeContext = () => {
  const viewportSize = useContext(ViewportSizeContext);
  return viewportSize;
}

export const ViewportSizeProvider = ({children}) => {
  const size = useMatchMedia();

  return <ViewportSizeContext.Provider value={size}>{children}</ViewportSizeContext.Provider>
}

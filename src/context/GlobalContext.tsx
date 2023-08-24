import { createContext, useContext } from "react";
import { useWindowSize } from "usehooks-ts";

const AppContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  //Window Size
  const windowSize = useWindowSize();
  let isWindowSmall = false;
  if (windowSize.width < 700) {
    isWindowSmall = true;
  } else {
    isWindowSmall = false;
  }

  return (
    <AppContext.Provider
      value={{
        windowSize,
        isWindowSmall,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

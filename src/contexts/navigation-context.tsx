import React, { useState } from "react";

type NavigationContextObj = {
  navigationOpened: boolean;
  openNav: () => void;
};

export const NavigationContext = React.createContext<NavigationContextObj>({
  navigationOpened: false,
  openNav: () => {}
});

const NavigationContextProvider: React.FC<{children: React.ReactNode | Iterable<React.ReactNode>}> = ({children}) => {
  const [opened, setOpened] = useState(false);

  const openNavHandler = () => {
    setOpened(!opened);
  };

  const contextValue: NavigationContextObj = {
    openNav: openNavHandler,
    navigationOpened: opened
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
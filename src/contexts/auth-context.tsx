import React from "react";

type AuthContextObj = {
  name: string;
  company: string;
};


export const AuthContext = React.createContext<AuthContextObj>({
  name: 'Daniel Smith',
  company: 'Acme Inc.'
})

const AuthContextProvider: React.FC<{children: React.ReactNode | Iterable<React.ReactNode>}> = ({children}) => {

  const contextValue: AuthContextObj = {
    name: 'Daniel Smith',
    company: 'Acme Inc.'
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;

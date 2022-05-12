import { useState, createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;
  
  const [modal, setModal] = useState(false);

  return(
    <AdminFlagContext.Provider value={{modal, setModal}}>
      {children}
    </AdminFlagContext.Provider>
  );
};

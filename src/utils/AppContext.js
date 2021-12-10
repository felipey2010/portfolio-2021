import { useState, createContext } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  //Loading function
  // function loadPage() {
  //   setLoading(true);
  //   //Clear loading screen after 2 seconds
  //   const timeoutId = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timeoutId);
  // }

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

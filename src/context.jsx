import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguageContext = () => useContext(LanguageContext);

const AppContext = ({children}) => {
    const [language, setLanguage] = useState("english");
    return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default AppContext;
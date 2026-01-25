import { createContext, useContext, useState } from "react";

// context yapısının kurulumu
export const SidebarContext = createContext();

// sağlayıcı component
export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
// custom hook:kenddi hook'muzu yazdık

// context yapısına abone olmamızı sağlayacak hook

export const useSidebar = () => {
  
  // contex yapısına abone oluyor
  const context = useContext(SidebarContext);

  //veriler gelmezse hata fıırlatıyor

  if (!context) {
    throw new Error("Provider ile sarmalamayı unutmayın");
  }

  // verileri return ediyor
  return context;
};

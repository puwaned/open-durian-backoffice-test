import { ConfigProvider } from "antd";
import { createContext, FC, ReactNode, useContext } from "react";
import { IAppThemeContext } from "./interface";

const Context = createContext<IAppThemeContext>({} as IAppThemeContext);

const AppThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2F9A5D",
          controlHeight: 40,
          colorText: "white",
        },
      }}
    >
      <Context.Provider value={{}}>{children}</Context.Provider>
    </ConfigProvider>
  );
};

export const useAppTheme = () => useContext(Context);
export default AppThemeProvider;

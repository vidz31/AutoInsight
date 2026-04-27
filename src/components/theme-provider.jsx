import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
    setTheme: () => { },
});
export function ThemeProvider({ children }) {
    return _jsx(ThemeContext.Provider, { value: { theme: "light", toggleTheme: () => { }, setTheme: () => { } }, children: children });
}
export function useTheme() {
    return useContext(ThemeContext);
}

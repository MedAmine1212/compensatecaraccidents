import {createContext } from 'react'

type DarkContextType = {
    isDarkMode: boolean
    switchTheme: () => void
}
export const ThemeContext = createContext<DarkContextType>({
    isDarkMode: false,
    switchTheme: () => {},
})

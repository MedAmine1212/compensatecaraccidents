import { ThemeContext } from '@/lib/contexts'
import { m } from 'framer-motion'
import { useContext } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

const ThemeToggler = () => {
    const { isDarkMode, switchTheme } = useContext(ThemeContext)
    return (
        <button
            className="relative flex gap-3 rounded-full border p-1 text-xl transition-all duration-300"
            onClick={switchTheme}
            style={{ borderColor: '#999', borderWidth: '0.5px' }}
        >
            <TbSun className="text-white" />
            <TbMoon className="text-white" />
            <m.span
                key={'theme-toggler'}
                initial={{
                    x: isDarkMode ? '40%' : '240%',
                    y: '-50%',
                    backgroundColor: isDarkMode ? '#F3EFF3' : '#3668DA',
                    borderColor: '#EBE4EB',
                    borderWidth: '1px',
                }}
                animate={{
                    x: isDarkMode ? '240%' : '40%',
                    backgroundColor: isDarkMode ? '#F3EFF3' : '#3668DA',
                    borderColor: '#EBE4EB',
                    borderWidth: '1px',
                }}
                className="absolute left-0 top-1/2 h-4 w-4 rounded-full ring-2 ring-[#3668DA]"
            />
        </button>
    )
}

export default ThemeToggler

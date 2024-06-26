import { ThemeContext } from '@/lib/contexts'
import { ReactNode, useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Tooltip } from 'react-tooltip'
type Props = {
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <>
                <div
                    className={`h-full w-full overflow-hidden ${
                        isDarkMode ? 'dark' : 'light'
                    }`}
                >
                    <ToastContainer theme={isDarkMode ? 'dark' : 'light'} />

                    <div className="flex h-[100svh] w-screen flex-col transition-all duration-300 dark:bg-darkbg bg-white">
                        {children}
                    </div>
            </div>
                <Tooltip id="my-tooltip" />
        </>
        )
}

export default Layout

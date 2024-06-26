import Header from '@/components/Header'
import {
    ThemeContext,
} from '@/lib/contexts'
import '@/styles/globals.scss'
import { LazyMotion, domAnimation } from 'framer-motion'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import NextNProgress from 'nextjs-progressbar'
import { useEffect, useState } from 'react'


const Layout = dynamic(() => import('@/layouts/Layout/Layout'), {
    ssr: false,
    loading: () => (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <div className="mx-auto h-fit">
                Loading..
            </div>
        </div>
    ),
})

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    const [isDarkMode, setDarkMode] = useState<boolean>(false)
    const switchTheme = () => {
        setDarkMode(prevState => {
            localStorage.setItem('theme', prevState ? 'light' : 'dark')
            return !prevState
        })
    }
    useEffect(() => {
        setDarkMode(
            !!(
                localStorage.getItem('theme') &&
                localStorage.getItem('theme') === 'dark'
            ),
        )
    }, [])

    return (
        <>

            <ThemeContext.Provider value={{ isDarkMode, switchTheme }}>
                        <NextNProgress options={{ showSpinner: true }} />
                            <LazyMotion features={domAnimation}>
                                <Header
                                    description="Make a car accident compensation clamin in just a few clicks"
                                    ogTitle="Car accident compensation"
                                    ogUrl="https://compensatecaraccidents.com/"
                                />
                                    <Layout>
                                        <Component {...pageProps} />
                                    </Layout>
                            </LazyMotion>
            </ThemeContext.Provider>
        </>
    )
}

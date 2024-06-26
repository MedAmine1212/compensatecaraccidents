import { capitalizeFirst } from '@/lib/capitalizeFirst'
import Head from 'next/head'
import { FC } from 'react'

type Props = {
    description?: string
    ogTitle?: string
    ogUrl?: string
    metaDescription?: string
}

const Header: FC<Props> = ({
    description,
    ogTitle,
    ogUrl,
    metaDescription,
}) => {
    const title = `Car accident compensation | ${capitalizeFirst(description || 'Make a car accident compensation clamin in just a few clicks')}`
    const fullOgUrl = ogUrl ? ogUrl : 'https://compensatecaraccidents.com/'
    const fullOgImage = `${fullOgUrl}/logo.svg`
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg" />
                <title>{title}</title>
                <meta
                    name="description"
                    content={description || 'Make a car accident compensation clamin in just a few clicks'}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={ogTitle ? ogTitle : title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={fullOgImage} />
                <meta property="og:url" content={fullOgUrl} />
                <meta property="og:site_name" content="Car accident compensation" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={fullOgUrl} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={fullOgImage} />
                <link rel="canonical" href={fullOgUrl} />
                <meta
                    property="og:title"
                    name="description"
                    content={title}
                    key="title"
                />

                <meta
                    name="description"
                    content={
                        metaDescription
                            ? metaDescription
                            : 'Make a car accident compensation clamin in just a few clicks'
                    }
                />

                <meta name="application-name" content="Car accident compensation" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta name="apple-mobile-web-app-title" content="Car accident compensation" />
                <meta name="description" content="Make a car accident compensation clamin in just a few clicks" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />

                <link
                    rel="apple-touch-icon"
                    href="/icons/touch-icon-iphone.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/icons/touch-icon-ipad.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/touch-icon-iphone-retina.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="/icons/touch-icon-ipad-retina.png"
                />

                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="mask-icon"
                    href="/icons/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:url"
                    content={ogUrl ? ogUrl : 'https://compensatecaraccidents.com/'}
                />
                <meta name="twitter:title" content="Car accident compensation" />
                <meta
                    name="twitter:description"
                    content="Make a car accident compensation clamin in just a few clicks"
                />
                <meta name="twitter:image" content="/og.svg" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content={ogTitle ? ogTitle : 'Car accident compensation'}
                />
                <meta
                    property="og:description"
                    content="Make a car accident compensation clamin in just a few clicks"
                />
                <meta property="og:site_name" content="Car accident compensation" />
                <meta
                    property="og:url"
                    content={ogUrl ? ogUrl : 'https://compensatecaraccidents.com/'}
                />
                <meta property="og:image" content="/logo.svg" />
            </Head>
        </>
    )
}

export default Header

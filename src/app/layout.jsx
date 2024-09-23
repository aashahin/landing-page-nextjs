import { IBM_Plex_Sans_Arabic } from 'next/font/google'

import './globals.css'

const font = IBM_Plex_Sans_Arabic({
    weight: ['400', '600', '700'],
    subsets: ["arabic", "latin"],
    preload: true
})

export default function Layout({children})
{
    return (
        <html lang="ar">
            <body className={font.className}>
                {children}
            </body>
        </html>
    )
}
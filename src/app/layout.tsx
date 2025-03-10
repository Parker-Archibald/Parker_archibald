import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import ChatBot from '@/components/ChatBot'

export const metadata: Metadata = {
  title: {
    template: '%s - Parker Archibald',
    default:
      'Parker Archibald - Full Stack Web Developer',
  },
  description:
    'I’m Parker, a software developer based in Utah with a passion for Development, Music, and my family.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <ChatBot />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}

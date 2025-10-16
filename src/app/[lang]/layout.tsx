import type { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import ThemeToggle from '@/widgets/theme-toggle'
import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'

export const metadata = {
  metadataBase: new URL('https://velvify.com'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://adarez.com'

const CustomBanner = async ({ lang }: { lang: 'zh' }) => {
  const { t } = await useServerLocale(lang)
  return (
    <Banner storageKey="starter-banner">
      <div className="flex justify-center items-center gap-1">
        {t('banner.title')}
        <a className="max-sm:hidden text-warning hover:underline" target="_blank" href={repo}>
          {t('banner.more')}
        </a>
      </div>
    </Banner>
  )
}

const CustomNavbar = async ({ lang }: { lang: 'zh' }) => {
  const { t } = await useServerLocale(lang)
  return (
    <Navbar
      logo={<span>{t('systemTitle')}</span>}
      logoLink={`/${lang}`}
      projectLink={repo}
    >
      <ThemeToggle className="max-md:hidden" />
    </Navbar>
  )
}

const BaiduTrack = () => (
  <Script strategy="afterInteractive">
    {`
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?d5ad5e04e6af914c01767926567602be";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `}
  </Script>
)

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const getterParams = await params
  const { lang } = getterParams as { lang: 'zh' }
  const pageMap = await getPageMap(lang)
  const { t } = await useServerLocale(lang)

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head>
        <meta property="og:title" content="My Nextra Starter" />
        <meta name="description" content="A Starter template with Next.js, Nextra" />
        <meta property="og:description" content="A Starter template with Next.js, Nextra" />
        <link rel="canonical" href={repo} />
      </Head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="starter-theme-provider" disableTransitionOnChange>
          <Layout
            copyPageButton={false}
            banner={<CustomBanner lang={lang} />}
            navbar={<CustomNavbar lang={lang} />}
            lastUpdated={<LastUpdated>{t('lastUpdated')}</LastUpdated>}
            editLink={null}
            docsRepositoryBase={repo}
            footer={<Footer className="bg-background py-5!"><CustomFooter /></Footer>}
            search={false} // ❌ 关闭搜索框
            toc={{ backToTop: t('backToTop'), title: t('pageTitle') }}
            pageMap={pageMap}
            feedback={{ content: '' }}
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-VCR6017LB8" />
      <BaiduTrack />
    </html>
  )
}

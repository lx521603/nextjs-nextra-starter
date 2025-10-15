'use client'

import clsx from 'clsx'
import Link from 'next/link'
import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.badgeContainer}>
          <a
            className={styles.badge}
            href="https://sorayt.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('badgeTitle')}
          </a>
        </div>
        <h1 className={styles.headline}>
          <MotionWrapperFlash
            disabledAnimation={false}
            className="flex items-center"
          >
            <span className="icon-[emojione-v1--lightning-mood]"></span>
          </MotionWrapperFlash>
          {' '}
          Dopi
          {' '}
          <br className="sm:hidden"></br>
          {' '}
          不脱妆
          <br className="sm:hidden"></br>
          {' '}
          粉底液
        </h1>

        <Link
          href="https://sorayt.com"
          className={clsx([
            'bg-linear-to-r from-yellow-400 via-orange-500 to-red-500 text-white shadow-lg',
            'dark:bg-linear-to-r dark:from-green-400 dark:via-teal-500 dark:to-cyan-500 dark:text-white',
            'text-sm mt-2 inline-block px-3 py-1 rounded-lg',
            '[&>span]:font-bold',
            'animate-pulse',
            '[animation-duration:2s]',
          ])}
          dangerouslySetInnerHTML={{
            __html: t('featureSupport', {
              feature: `<span>Tailwind CSS v4, Nextra v4</span>`,
            }),
          }}
        />


        <div className={clsx([
          styles.subtitle,
          'text-neutral-500 dark:text-neutral-300',
        ])}
        >
          Dopi不脱妆粉底液
          {' '}
          <FlipWords
            words={[
              '美白',
              '防水',
              '防汗',
              '24小时',
              '长久持妆',
              '遮瑕',
              '气垫',
              '细腻',
              '服帖',
            ]}
          />
          <br />
          With
          {' '}
          <LinkPreview
            url="https://sorayt.com"
          >
            你身边
          </LinkPreview>
          ,
          {' '}
          <LinkPreview
            url="https://oni.yt"
          >
            懂你的
          </LinkPreview>
            美妆
          {' '}
          <LinkPreview
            url="https://adarez.com"
          >
            专家
          </LinkPreview>
          {', '}
          <LinkPreview
            url="https://fairy.li"
          >
            Dopi
          </LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://velvify.com/zh/introduction"
              >
                {t('getStarted')}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://velvify.com/zh/upgrade"
                target="_blank"
              >
                联系方式
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

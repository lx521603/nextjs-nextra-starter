import type { MetaRecord } from 'nextra'
import { TitleBadge } from '@/components/TitleBadge'

export default {
  index: {
    type: 'page',
    display: 'hidden',
    theme: {
      timestamp: false,
      layout: 'full',
      toc: false,
    },
  },
  introduction: {
    type: 'page',
    theme: {
      navbar: true,
      toc: false,
    },
  },
  docs: {
    title: '💄 产品介绍',
    type: 'page',
  },
  upgrade: {
    title: (
      <span className="flex items-center leading-[1]">
        📧联系方式
        <TitleBadge />
      </span>
    ),
    type: 'page',
  },
} satisfies MetaRecord

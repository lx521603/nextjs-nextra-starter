'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function WeWeiContact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl shadow-xl space-y-8"
    >
      <h1 className="text-4xl font-bold text-rose-600 mb-4">
        💖 联系 Dopi · 悦色防晒美白粉底液
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-10">
        无论你是想了解产品、合作推广，还是来店试妆，我们都期待与你相遇。
      </p>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
        <div className="relative group">
          <Image
            src="/img/douyin-qrcode.jpg"
            alt="抖音二维码"
            width={240}
            height={360}
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 object-contain"
          />
          <p className="mt-4 text-gray-700 font-medium">抖音：VMimi33453</p>
        </div>

        <div className="relative group">
          <Image
            src="/img/wechat-qrcode.jpg"
            alt="微信二维码"
            width={240}
            height={360}
            className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-all duration-500 object-contain"
          />
          <p className="mt-4 text-gray-700 font-medium">微信：zmmz9108</p>
        </div>
      </div>

      <div className="mt-12 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl px-8 py-6 text-left max-w-md space-y-3">
        <h2 className="text-xl font-semibold text-rose-500 mb-2">联系信息</h2>
        <p className="text-gray-700 leading-relaxed">
          📮 邮箱：
          <a
            href="mailto:x@glee.ch"
            className="text-rose-600 font-semibold underline hover:text-rose-700"
          >
            x@glee.ch
          </a>
        </p>
        <p className="text-gray-700 leading-relaxed">
          📍 地址：
          <br />• 保山吾悦、三馆广场
          <br />• 芒市新玩厂落日集市（欢迎到店试用）
        </p>
        <p className="text-gray-700 leading-relaxed">
          🌏 服务区域：
          <br />• 常驻保山、芒市
          <br />• 不定期在瑞丽、腾冲等地快闪出摊
        </p>
        <p className="mt-2 text-gray-600 italic">欢迎联系咨询 👏</p>
      </div>
    </motion.section>
  )
}


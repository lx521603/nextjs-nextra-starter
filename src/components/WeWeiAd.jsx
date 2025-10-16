'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function WeWeiAd() {
  const [showWeChat, setShowWeChat] = useState(true)

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-br from-pink-50 to-rose-100 rounded-3xl shadow-xl space-y-6"
    >
      <h1 className="text-4xl font-bold text-rose-600 mb-4">🌸 薇薇的创业战队招募中！</h1>

      <div className="text-gray-800 leading-relaxed space-y-3 max-w-2xl">
        <p>受够了当月光族？看腻了老板脸色？</p>
        <p>别只会刷视频羡慕别人了——看看薇薇我！💪</p>
        <p>从零开始摆摊卖美妆，抖音、小红书记录每一天：</p>
        <p>今天被城管撵，明天爆单手抽筋，但姐赚的每一分钱都硬气！🔥</p>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md text-gray-900 max-w-lg text-left space-y-2">
        <h2 className="text-xl font-semibold text-rose-500">👯‍♀️ 正式招募【创业搭子 & 品牌代理】</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>想搞钱，有执行力，不口嗨。</li>
          <li>爱美妆，对变美这件事充满热情。</li>
          <li>敢在路边对美女喊“姐姐来试试这个色号！”</li>
        </ul>
        <p className="pt-2">带你解锁：选品技巧 + 摆摊秘籍 + 全网引流玩法。</p>
        <p className="font-semibold text-rose-600">犹豫就会败北，果断才能白富美！</p>
      </div>

      <div className="mt-6 space-y-4 w-full flex flex-col items-center">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setShowWeChat(true)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              showWeChat
                ? 'bg-green-500 text-white border-green-500'
                : 'bg-white border-gray-300 text-gray-700'
            }`}
          >
            微信联系我
          </button>
          <button
            onClick={() => setShowWeChat(false)}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              !showWeChat
                ? 'bg-pink-500 text-white border-pink-500'
                : 'bg-white border-gray-300 text-gray-700'
            }`}
          >
            抖音私信我
          </button>
        </div>

        {/* 增加上下空间（py）并放大图片高度（h-72 = 高度增加 50%） */}
        <motion.div
          key={showWeChat ? 'wechat' : 'douyin'}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-6 py-8 flex flex-col items-center"
        >
          <img
            src={showWeChat ? '/img/wechat-qrcode.jpg' : '/img/douyin-qrcode.jpg'}
            alt={showWeChat ? '微信二维码' : '抖音二维码'}
            className="w-auto h-72 mx-auto rounded-xl shadow-lg border-4 border-white object-contain"
            style={{ maxWidth: '70%' }} // 限制最大宽度，避免横向拉伸过大
          />
          <p className="text-gray-700 mt-3">
            {showWeChat ? '📲 扫码加我微信，立刻聊！' : '💬 打开抖音扫一扫，直接私信我！'}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

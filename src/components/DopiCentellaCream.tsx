'use client'
import { motion } from 'framer-motion'

export default function DopiCentellaCream() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fffaf6] to-[#fff0e6] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-300 to-amber-400 mb-6 drop-shadow-md">
        🌿 Dopi 积雪草精华面霜 🌿
      </h1>

      <motion.img
        src="/img/products-06.jpg"
        alt="Dopi 积雪草精华面霜"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        源头控油，舒适不油腻；锁水保湿，抗皱紧致，修复肌肤屏障，让肌肤焕发健康光彩。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 涂上它，肌肤就像喝饱了水的小花，舒适又柔软。<br />
        🌟 源头控油，出门也能自信不泛光，简直是懒人护肤必备。
      </p>
    </motion.section>
  )
}

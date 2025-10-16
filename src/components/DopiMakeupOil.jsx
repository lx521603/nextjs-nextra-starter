'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DopiMakeupOil() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
        ✨ Dopi 山茶籽水润清透卸妆油 ✨
      </h1>

      <motion.img
        src="/img/products-03.jpg"
        alt="Dopi 山茶籽水润清透卸妆油"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        敏感肌可用，轻松卸掉彩妆和防晒，温和不刺激，清爽水润。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 卸妆也能像做SPA，轻轻按摩，压力和彩妆都消失了。<br />
        🌟 就算熬夜化妆，它也不抱怨，温柔把一天的疲惫洗掉。
      </p>
    </motion.section>
  )
}

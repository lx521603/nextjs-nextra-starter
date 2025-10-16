'use client'
import { motion } from 'framer-motion'

export default function DopiConditioner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#f0f9ff] to-[#e0f4ff] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-300 to-indigo-400 mb-6 drop-shadow-md">
        🌬️ Dopi 轻盈柔顺护发素 🌬️
      </h1>

      <motion.img
        src="/img/products-08.jpg"
        alt="Dopi 轻盈柔顺护发素"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        轻盈柔顺，顺滑不油腻，修复发丝毛躁，延展性更佳，搭配控油洗发水让头发蓬松亮丽。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 洗后顺滑，像丝带般轻盈，甩一甩就自带光泽感。<br />
        🌟 和洗发水组合使用，头发像云朵般轻盈柔顺，每天都是好心情。
      </p>
    </motion.section>
  )
}

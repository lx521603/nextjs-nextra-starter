'use client'
import { motion } from 'framer-motion'

export default function DopiShampoo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff9f0] to-[#fff2e0] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 mb-6 drop-shadow-md">
        💨 Dopi 空气蓬松控油洗发水 💨
      </h1>

      <motion.img
        src="/img/products-07.jpg"
        alt="Dopi 空气蓬松控油洗发水"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        油扁塌逆袭松柔光发，选对洗发水是关键。减少皮脂过度分泌，延长头发清爽蓬松状态，受损发丝光泽度显著提升。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 每天一洗，头发像吹过晨风的麦田，轻盈又柔亮。<br />
        🌟 控油不紧绷，蓬松感让你随手甩头也自带光泽。
      </p>
    </motion.section>
  )
}

'use client'
import { motion } from 'framer-motion'

export default function DopiYuyan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
        ✨ Dopi 悦颜养肤持妆粉底液 ✨
      </h1>

      <motion.img
        src="/img/products-01.jpg"
        alt="Dopi 悦颜养肤持妆粉底液"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        适合干皮、油皮，轻松驾驭全天持妆。<br />
        象牙白、自然色、小麦色，多种色号满足你的日常和舞台妆容。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 上妆前，我的脸还在偷懒；上完妆，连老板都多看我两眼。<br />
        🌟 防晒、美白、防脱妆三合一，就像给皮肤穿了隐形盔甲。
      </p>
    </motion.section>
  )
}

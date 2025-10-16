'use client'
import { motion } from 'framer-motion'

export default function DopiCleanser() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#f0f8ff] to-[#e0f2ff] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 mb-6 drop-shadow-md">
        ☁️ Dopi 云朵净颜洗面奶 ☁️
      </h1>

      <motion.img
        src="/img/products-04.jpg"
        alt="Dopi 云朵净颜洗面奶"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        三重甘氨酸 + 谷氨酸配方，温和清洁，不伤皮肤屏障。<br />
        绵密泡沫，减少摩擦，让洗脸成为享受。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 泡沫轻轻包裹脸庞，就像云朵在肌肤上跳舞。<br />
        🌟 就算早晨慌忙，它也能让皮肤柔软顺滑，好像睡了一整天美容觉。
      </p>
    </motion.section>
  )
}

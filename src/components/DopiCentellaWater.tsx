'use client'
import { motion } from 'framer-motion'

export default function DopiCentellaWater() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fef8f0] to-[#fff4e6] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 mb-6 drop-shadow-md">
        🌿 Dopi 积雪草修护精萃水 🌿
      </h1>

      <motion.img
        src="/img/products-05.jpg"
        alt="Dopi 积雪草修护精萃水"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        23种草本添加，肌肤的自然疗愈师。淡化疤痕痘印，促进修复，润养肌肤，强化屏障，告别泛红。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 一滴精萃，像给肌肤做了小小森林SPA。<br />
        🌟 每天轻拍，痘印慢慢淡，肌肤像被温柔拥抱般修复。
      </p>
    </motion.section>
  )
}

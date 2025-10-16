'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function DopiCushion() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-[#fff8f8] to-[#ffeef4] rounded-3xl shadow-lg"
    >
      <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 mb-6 drop-shadow-md">
        ✨ Dopi 悦颜养肤持妆气垫 ✨
      </h1>

      <motion.img
        src="/img/products-02.jpg"
        alt="Dopi 悦颜养肤持妆气垫"
        width="500"
        className="rounded-2xl shadow-2xl mb-8 hover:scale-105 transition-transform duration-500 ease-out"
        whileHover={{ scale: 1.05 }}
      />

      <p className="text-xl text-gray-700 max-w-2xl leading-relaxed mb-8">
        网纱采用百万密孔微纳米技术。<br />
        不吃粉，不浪费你的一滴粉。
      </p>

      <p className="text-lg text-gray-500 italic">
        🌟 轻轻一拍，粉底就像会跳舞，均匀贴合每一寸肌肤。<br />
        🌟 早上忙着化妆，下午还在闪耀，好像气垫比我还勤快。
      </p>
    </motion.section>
  )
}

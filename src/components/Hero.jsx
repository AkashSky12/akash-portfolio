import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation()
  return (
    <section id="home" className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-4xl font-bold mb-4">{t('hero.title')}</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-600 mb-6">{t('hero.subtitle')}</motion.p>
        <a href="/assets/cv.pdf" className="inline-block px-5 py-2 bg-teal-500 text-white rounded">{t('hero.cta')}</a>
      </div>
      <motion.div initial={{scale:0.95}} animate={{scale:1}} className="flex justify-center">
        <img src={import.meta.env.BASE_URL + 'assets/hero.svg'} alt="hero" className="w-full max-w-md" width="480" height="320" loading="lazy"/>
      </motion.div>
    </section>
  )
}

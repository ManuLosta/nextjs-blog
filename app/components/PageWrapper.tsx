'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export function PageWrapper({ children }: any) {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []) // fix scroll down 

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
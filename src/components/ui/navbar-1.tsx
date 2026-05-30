"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = ["O nama", "Usluge", "Galerija", "Kontakt"]

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full pb-6 px-4" style={{ fontFamily: "var(--font-montserrat)" }}>
      <div className="flex items-center justify-between px-6 py-5 bg-[#f8f8f8] rounded-b-3xl shadow-lg w-full relative z-10" style={{ maxWidth: "1216px" }}>
        {/* Logo */}
        <div className="flex items-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Maswood" className="h-10 w-auto" />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-gray-900 hover:text-[#cc9a6e] transition-colors font-medium"
              >
                {item}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-[#cc9a6e] rounded-full hover:bg-[#b8865a] transition-colors font-medium"
          >
            Zatraži ponudu
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay - rendered in portal to escape stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white pt-24 px-6 md:hidden"
              style={{ zIndex: 99999, fontFamily: "var(--font-montserrat)" }}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-gray-900" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-base text-gray-900 font-medium hover:text-[#cc9a6e] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-[#cc9a6e] rounded-full hover:bg-[#b8865a] transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  Zatraži ponudu
                </a>
              </motion.div>
            </div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

export { Navbar1 }

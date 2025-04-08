"use client"

import Link from "next/link"
import { Instagram, Facebook, MessageSquare, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#5D4954] text-white py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F9E2E8] via-[#D8A7B1] to-[#F9E2E8]"></div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-script mb-2"
          >
            Alicia Escalona
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/80 mb-6 max-w-md"
          >
            Elaborado con <Heart className="inline-block h-4 w-4 text-[#D8A7B1] mx-1" /> y los mejores ingredientes
          </motion.p>

          <div className="flex space-x-6 mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -3 }}
            >
              <Link
                href="#"
                aria-label="Instagram"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D8A7B1]/30 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <Link
                href="#"
                aria-label="Facebook"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D8A7B1]/30 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <Link
                href="#"
                aria-label="WhatsApp"
                className="bg-white/10 p-3 rounded-full hover:bg-[#D8A7B1]/30 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          <div className="border-t border-white/10 pt-6 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/60 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Alicia Escalona - Todos los derechos reservados
              </p>

              <div className="flex space-x-6">
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


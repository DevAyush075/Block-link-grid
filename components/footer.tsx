"use client"

import { motion } from "framer-motion"
import { Globe, Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-20 w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-t border-white/10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                ViitxCreator
              </h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Empowering creators, researchers, and users worldwide with innovative digital solutions and comprehensive platforms.
            </p>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Research Journal Hub</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Analytics Dashboard</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Author Console</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Data Repository</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hello@viitxcreator.com" 
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hello@viitxcreator.com
              </a>
              <div className="flex space-x-3">
                <a 
                  href="https://twitter.com/viitxcreator" 
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <FaTwitter className="text-white" />
                </a>
                <a 
                  href="https://linkedin.com/company/viitxcreator" 
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <FaLinkedin className="text-white" />
                </a>
                <a 
                  href="https://github.com/viitxcreator" 
                  className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <FaGithub className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} ViitxCreator. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

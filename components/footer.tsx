"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bottom-0 w-full bg-white text-gray-700 border-t border-gray-200 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Logo & tagline */}
        <div>
          <h2 className="text-xl font-semibold">Atomic Health</h2>
          <p className="mt-2 text-sm">
            Better healthcare by design.
          </p>
        </div>
        {/* Column 2: Company */}
        <div>
          <h3 className="font-medium mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="https://creatorresearch.com/" className="hover:underline">About</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Work</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Services</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        {/* Column 3: Resources */}
        <div>
          <h3 className="font-medium mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="https://creatorresearch.com/" className="hover:underline">Blog</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Case Studies</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Privacy Policy</a></li>
            <li><a href="https://creatorresearch.com/" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        {/* Column 4: Connect */}
        <div>
          <h3 className="font-medium mb-2">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com/CreatorResearch "><FaTwitter className="text-xl hover:text-blue-500" /></a>
            <a href="https://linkedin.com/CreatorResearch "><FaLinkedin className="text-xl hover:text-blue-700" /></a>
            <a href="https://instagram.com/CreatorResearch "><FaInstagram className="text-xl hover:text-pink-500" /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-3 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ViitxCreator. All rights reserved.
      </div>
    </motion.footer>
  )
}

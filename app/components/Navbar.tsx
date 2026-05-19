"use client";

import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 tracking-tight">
            Concrete Build
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
          <Link href="#roadmap" className="hover:text-white transition-colors">Roadmap</Link>
          <Link href="#team" className="hover:text-white transition-colors">Team</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://cbld.as.me/?appointmentType=74577811" target="_blank" rel="noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-zinc-800/50 border border-zinc-700 text-white hover:bg-zinc-700 transition-colors"
            >
              Book Consult
            </motion.button>
          </a>
          <Link href="#waitlist">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full font-medium bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all"
            >
              Join Waitlist <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

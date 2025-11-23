"use client";

import { Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full">
      {/* Top Bar Verde */}
      <div className="bg-[#6AB52B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+390185167566" className="flex items-center gap-1 hover:opacity-80 transition">
              <Phone className="w-4 h-4" />
              <span>+39 0185 167566</span>
            </a>
            <a href="mailto:soluzioni@martello1930.net" className="flex items-center gap-1 hover:opacity-80 transition">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">soluzioni@martello1930.net</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/martello1930" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/martello1930" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://wa.me/390185167566" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-gray-800">MARTELLO1930</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-[#6AB52B] transition">Home</Link>
            <Link href="/configuratore" className="text-gray-600 hover:text-[#6AB52B] transition">Configuratore</Link>
            <Link href="/contatti" className="text-gray-600 hover:text-[#6AB52B] transition">Contatti</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

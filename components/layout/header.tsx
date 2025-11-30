"use client";

import { useState } from "react";
import { Phone, Mail, Facebook, Instagram, MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar Verde - Stile Configuratore Casette */}
      <div className="bg-[#6AB52B] text-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          {/* Contatti - Sinistra */}
          <div className="flex items-center gap-5">
            <a 
              href="tel:+390185167566" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">+39 0185 167566</span>
            </a>
            <a 
              href="mailto:soluzioni@martello1930.net" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">soluzioni@martello1930.net</span>
            </a>
          </div>

          {/* Social Icons - Destra */}
          <div className="flex items-center gap-4">
            <a 
              href="https://facebook.com/martello1930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/martello1930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://tiktok.com/@martello1930" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="TikTok"
            >
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/390185167566" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Stile Configuratore Casette */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-5">
          {/* Logo e Mobile Menu Toggle */}
          <div className="flex justify-between items-center md:justify-center">
            {/* Logo Centrato */}
            <Link 
              href="/" 
              className="flex items-center justify-center"
            >
              <span className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                MARTELLO1930
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#6AB52B] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu Navigation */}
          <nav className="hidden md:flex justify-center items-center gap-8 mt-4">
            <Link 
              href="/" 
              className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-gray-300">–</span>
            <Link 
              href="/configuratore" 
              className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200"
            >
              Configuratore
            </Link>
            <span className="text-gray-300">–</span>
            <Link 
              href="/admin" 
              className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200"
            >
              Admin
            </Link>
            <span className="text-gray-300">–</span>
            <Link 
              href="/preventivo" 
              className="text-base font-medium text-[#6AB52B] hover:text-[#5A9823] transition-colors duration-200 font-semibold"
            >
              Richiedi Preventivo
            </Link>
          </nav>

          {/* Mobile Menu Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/configuratore" 
                  className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Configuratore
                </Link>
                <Link 
                  href="/admin" 
                  className="text-base font-medium text-gray-700 hover:text-[#6AB52B] transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin
                </Link>
                <Link 
                  href="/preventivo" 
                  className="text-base font-medium text-[#6AB52B] hover:text-[#5A9823] transition-colors duration-200 font-semibold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

"use client";

import { Loader2 } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

/**
 * Loading State specifico per pagina configuratore
 */
export default function ConfiguratoreLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section Skeleton */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="h-10 bg-gray-200 rounded-lg max-w-2xl mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar Skeleton */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Content Loading */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-[#6AB52B] animate-spin mx-auto mb-4" />
              <p className="text-gray-600">Caricamento configuratore...</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

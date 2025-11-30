"use client";

import { Loader2 } from "lucide-react";

/**
 * Loading State globale per Suspense boundaries
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* Spinner animato */}
        <div className="flex justify-center mb-6">
          <Loader2 className="w-16 h-16 text-[#6AB52B] animate-spin" />
        </div>

        {/* Testo */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Caricamento in corso...
        </h2>
        <p className="text-gray-600">
          Un momento per favore
        </p>

        {/* Progress Bar animata */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#6AB52B] rounded-full animate-progress"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 50%;
            margin-left: 25%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

/**
 * Error Boundary per gestione errori runtime
 * Cattura errori in tutta l'applicazione
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log errore per monitoring
    console.error("App Error:", error);
    
    // TODO: Inviare a Sentry o altro servizio di monitoring
    // Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="it">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <Card className="max-w-md w-full">
            <CardContent className="pt-12 pb-12 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-100 rounded-full">
                  <AlertCircle className="w-12 h-12 text-red-600" />
                </div>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Qualcosa è andato storto
              </h1>

              {/* Description */}
              <p className="text-gray-600 mb-2">
                Si è verificato un errore inaspettato.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Non preoccuparti, i tuoi dati sono al sicuro.
              </p>

              {/* Error Details (solo in development) */}
              {process.env.NODE_ENV === "development" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                  <p className="text-xs font-mono text-red-800 break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-red-600 mt-2">
                      ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={reset}
                  className="bg-[#6AB52B] hover:bg-[#5A9823] text-white"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Riprova
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  variant="outline"
                  className="border-gray-300"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Torna alla Home
                </Button>
              </div>

              {/* Support */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Se il problema persiste, contattaci:
                </p>
                <a
                  href="mailto:soluzioni@martello1930.net"
                  className="text-sm text-[#6AB52B] hover:underline font-medium"
                >
                  soluzioni@martello1930.net
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}

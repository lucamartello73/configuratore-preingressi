import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Simple in-memory rate limiter
 * Per produzione con multiple instances, usare Redis o Upstash
 */
class RateLimiter {
  private requests: Map<string, number[]>;
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 10) {
    this.requests = new Map();
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;

    // Cleanup vecchie entry ogni 5 minuti
    setInterval(() => this.cleanup(), 5 * 60 * 1000);
  }

  /**
   * Controlla se la richiesta è permessa
   */
  check(identifier: string): { allowed: boolean; remaining: number; resetAt: number } {
    const now = Date.now();
    const requestTimes = this.requests.get(identifier) || [];

    // Filtra richieste nella finestra temporale
    const recentRequests = requestTimes.filter(
      (time) => now - time < this.windowMs
    );

    // Controlla limite
    if (recentRequests.length >= this.maxRequests) {
      const oldestRequest = Math.min(...recentRequests);
      const resetAt = oldestRequest + this.windowMs;

      return {
        allowed: false,
        remaining: 0,
        resetAt,
      };
    }

    // Aggiungi nuova richiesta
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);

    return {
      allowed: true,
      remaining: this.maxRequests - recentRequests.length,
      resetAt: now + this.windowMs,
    };
  }

  /**
   * Pulizia entry vecchie
   */
  private cleanup() {
    const now = Date.now();
    for (const [identifier, times] of this.requests.entries()) {
      const recentRequests = times.filter((time) => now - time < this.windowMs);
      if (recentRequests.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, recentRequests);
      }
    }
  }
}

// Configurazione rate limiter
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000"); // 1 minuto
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "10"); // 10 req/min

const rateLimiter = new RateLimiter(WINDOW_MS, MAX_REQUESTS);

/**
 * Middleware per rate limiting e security headers
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limiting solo per API routes
  if (pathname.startsWith("/api/")) {
    // Identificatore: IP address o fallback
    // Note: request.ip is available in Edge Runtime but not in Node runtime
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const identifier = 
      forwardedFor?.split(",")[0] ||
      realIp ||
      "anonymous";

    // Controlla rate limit
    const { allowed, remaining, resetAt } = rateLimiter.check(identifier);

    if (!allowed) {
      const retryAfter = Math.ceil((resetAt - Date.now()) / 1000);

      return NextResponse.json(
        {
          success: false,
          error: "Troppi tentativi",
          message: `Hai superato il limite di richieste. Riprova tra ${retryAfter} secondi.`,
          retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": retryAfter.toString(),
            "X-RateLimit-Limit": MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": new Date(resetAt).toISOString(),
          },
        }
      );
    }

    // Aggiungi rate limit headers alla response
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString());
    response.headers.set("X-RateLimit-Remaining", remaining.toString());
    response.headers.set("X-RateLimit-Reset", new Date(resetAt).toISOString());

    return response;
  }

  // Security headers per tutte le richieste
  const response = NextResponse.next();

  // Previeni clickjacking
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  // Forza HTTPS
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  // Previeni MIME sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // XSS Protection (legacy browser)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer Policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // DNS Prefetch Control
  response.headers.set("X-DNS-Prefetch-Control", "on");

  // Permissions Policy (limita API browser)
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  return response;
}

/**
 * Configurazione percorsi da processare
 */
export const config = {
  matcher: [
    /*
     * Match tutti i percorsi tranne:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

"use client";

import Link from "next/link";

export function Header() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .site-header {
          width: 100%;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          border-bottom: 1px solid #e5e5e5;
        }

        .site-header .top-bar {
          background-color: #4CAF50;
          color: #ffffff;
          font-size: 14px;
          padding: 6px 32px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
        }

        .site-header .top-bar span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .site-header .main-header {
          background-color: #ffffff;
          padding: 14px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .site-header .logo {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .site-header .logo span {
          color: #4CAF50;
        }

        .site-header .main-nav {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 15px;
        }

        .site-header .main-nav a {
          text-decoration: none;
          color: #333333;
          padding: 4px 0;
        }

        .site-header .main-nav a:hover {
          color: #4CAF50;
        }

        .site-header .main-nav .btn-primary {
          background-color: #4CAF50;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 999px;
          font-weight: 600;
        }

        .site-header .main-nav .btn-primary:hover {
          opacity: 0.9;
        }

        .site-header .social-icons {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
        }

        .site-header .social-icons a {
          text-decoration: none;
          color: #4CAF50;
        }

        .site-header .social-icons a:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .site-header .main-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .site-header .main-nav {
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}} />

      <header className="site-header">
        <div className="top-bar">
          <span>📞 +39 0185 167566</span>
          <span>•</span>
          <span>✉ soluzioni@martello1930.net</span>
        </div>

        <div className="main-header">
          <div className="logo">
            MARTELLO<span>1930</span>
          </div>

          <nav className="main-nav">
            <Link href="/">Home</Link>
            <Link href="/configuratore">Configuratore</Link>
            <Link href="/admin">Admin</Link>
            <Link href="/richiedi-preventivo" className="btn-primary">Richiedi Preventivo</Link>
          </nav>

          <div className="social-icons">
            <a href="https://www.facebook.com/Martello1930/" aria-label="Facebook">👍</a>
            <a href="https://www.instagram.com/1930martello/" aria-label="Instagram">📷</a>
            <a href="#" aria-label="TikTok">🎵</a>
            <a href="https://wa.me/39018541793" aria-label="WhatsApp">💬</a>
          </div>
        </div>
      </header>
    </>
  );
}

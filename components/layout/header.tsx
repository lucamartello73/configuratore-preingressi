"use client";

import Link from "next/link";

export function Header() {
  return (
    <header
      id="site-header"
      style={{
        width: "100%",
        fontFamily: "system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
        borderBottom: "1px solid #e5e5e5"
      }}
    >
      {/* barra verde alta */}
      <div
        style={{
          background: "#4CAF50",
          color: "white",
          fontSize: "14px",
          padding: "6px 32px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        <span>📞 +39 0185 167566</span>
        <span>•</span>
        <span>✉ soluzioni@martello1930.net</span>
      </div>

      {/* header principale */}
      <div
        style={{
          background: "#fff",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* logo */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.08em"
          }}
        >
          MARTELLO<span style={{ color: "#4CAF50" }}>1930</span>
        </div>

        {/* navigazione */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "15px"
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>
          <Link href="/configuratore" style={{ textDecoration: "none", color: "#333" }}>
            Configuratore
          </Link>
          <Link href="/admin" style={{ textDecoration: "none", color: "#333" }}>
            Admin
          </Link>
          <Link
            href="/richiedi-preventivo"
            style={{
              background: "#4CAF50",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Richiedi Preventivo
          </Link>
        </nav>

        {/* social */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "20px"
          }}
        >
          <a
            href="https://www.facebook.com/Martello1930/"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            👍
          </a>

          <a
            href="https://www.instagram.com/1930martello/"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            📷
          </a>

          <a href="#" style={{ color: "#4CAF50", textDecoration: "none" }}>
            🎵
          </a>

          <a
            href="https://wa.me/39018541793"
            style={{ color: "#4CAF50", textDecoration: "none" }}
          >
            💬
          </a>
        </div>
      </div>
    </header>
  );
}

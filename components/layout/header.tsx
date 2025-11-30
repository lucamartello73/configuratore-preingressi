"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="site-header w-full font-sans border-b border-[#e5e5e5]">
      {/* Barra verde in alto */}
      <div className="top-bar bg-[#4CAF50] text-white text-[14px] px-8 py-[6px] flex items-center justify-start gap-2">
        <span className="inline-flex items-center gap-1">📞 +39 0185 167566</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">✉ soluzioni@martello1930.net</span>
      </div>

      {/* Header principale come configuratore casette */}
      <div className="main-header bg-white px-8 py-[14px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="logo text-[22px] font-bold tracking-[0.08em]">
          MARTELLO<span className="text-[#4CAF50]">1930</span>
        </Link>

        {/* Menu Navigation */}
        <nav className="main-nav flex items-center gap-5 text-[15px]">
          <Link 
            href="/" 
            className="no-underline text-[#333333] py-1 hover:text-[#4CAF50]"
          >
            Home
          </Link>
          <Link 
            href="/configuratore" 
            className="no-underline text-[#333333] py-1 hover:text-[#4CAF50]"
          >
            Configuratore
          </Link>
          <Link 
            href="/admin" 
            className="no-underline text-[#333333] py-1 hover:text-[#4CAF50]"
          >
            Admin
          </Link>
          <Link 
            href="/richiedi-preventivo" 
            className="btn-primary bg-[#4CAF50] text-white px-4 py-2 rounded-full font-semibold no-underline hover:opacity-90"
          >
            Richiedi Preventivo
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="social-icons flex items-center gap-[10px] text-[18px]">
          <a 
            href="https://www.facebook.com/Martello1930/" 
            aria-label="Facebook"
            className="no-underline text-[#4CAF50] hover:opacity-80"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a 
            href="https://www.instagram.com/1930martello/" 
            aria-label="Instagram"
            className="no-underline text-[#4CAF50] hover:opacity-80"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
            </svg>
          </a>
          <a 
            href="#" 
            aria-label="TikTok"
            className="no-underline text-[#4CAF50] hover:opacity-80"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/39018541793" 
            aria-label="WhatsApp"
            className="no-underline text-[#4CAF50] hover:opacity-80"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Responsive - Mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .main-nav {
            flex-wrap: wrap;
            gap: 12px;
          }
        }
      `}</style>
    </header>
  );
}

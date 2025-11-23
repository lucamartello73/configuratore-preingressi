"use client";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MARTELLO1930</h3>
            <p className="text-gray-400 text-sm">
              Strutture in legno su misura per ogni esigenza.
              Artigianalità e precisione dal 1930.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <p className="text-gray-400 text-sm mb-2">Tel: +39 0185 167566</p>
            <p className="text-gray-400 text-sm">Email: soluzioni@martello1930.net</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/configuratore" className="text-gray-400 hover:text-white transition">Configuratore</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Martello1930. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

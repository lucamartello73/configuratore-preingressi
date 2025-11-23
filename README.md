# 🏠 Configuratore Preingressi Martello1930

Applicazione web per la configurazione personalizzata di preingressi e casette per strutture ricettive.

## 🎯 Caratteristiche

- **6 Step Guidati**: Processo di configurazione intuitivo
- **UI Unificata**: Design coerente con altri configuratori Martello1930
- **Responsive**: Ottimizzato per desktop, tablet e mobile
- **Animazioni Fluide**: Transizioni smooth con Framer Motion
- **Form Validato**: Controlli di validazione real-time

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installazione

```bash
# 1. Clona il repository
cd configuratore-preingressi-martello1930

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm run dev

# 4. Apri il browser
# http://localhost:3000
```

## 🚀 Build per Produzione

```bash
# Build
npm run build

# Start produzione
npm start
```

## 📁 Struttura del Progetto

```
configuratore-preingressi-martello1930/
├── app/
│   ├── configuratore/
│   │   └── page.tsx          # Pagina principale configuratore
│   ├── layout.tsx             # Layout root
│   ├── page.tsx               # Homepage
│   └── globals.css            # Stili globali
├── components/
│   ├── layout/
│   │   ├── header.tsx         # Header con top bar verde
│   │   └── footer.tsx         # Footer
│   ├── configuratore/
│   │   ├── step1-misure.tsx   # Step 1: Misure
│   │   ├── step2-struttura.tsx # Step 2: Materiali
│   │   ├── step3-serramenti.tsx # Step 3: Porte/Finestre
│   │   ├── step4-copertura.tsx # Step 4: Tetto
│   │   ├── step5-accessori.tsx # Step 5: Optional
│   │   ├── step6-zona.tsx     # Step 6: Logistica
│   │   └── step-finale.tsx    # Step 7: Riepilogo
│   └── ui/                    # Componenti shadcn/ui
├── lib/
│   ├── types.ts               # TypeScript interfaces
│   └── utils.ts               # Utility functions
└── package.json
```

## 🎨 Design System

### Colori

- **Primary Green**: `#6AB52B`
- **Primary Hover**: `#5A9823`
- **Background**: `#F8F8F8`
- **White Cards**: `#FFFFFF`

### Componenti UI

- **Card**: `rounded-2xl shadow-md`
- **Buttons**: Primary verde / Secondary outline
- **Inputs**: Border grigio chiaro con focus verde
- **Progress Bar**: Sticky top con percentuale

## 📊 Step del Configuratore

1. **Misure e Struttura Base**
   - Larghezza, profondità, altezza
   - Tipologia (indipendente/addossato)

2. **Tipologia di Struttura**
   - Coibentazione
   - Materiale (legno/pvc/metallo)
   - Finitura (naturale/impregnato/verniciato)

3. **Serramenti**
   - Numero e tipo finestre
   - Scuri esterni
   - Tipo porta d'ingresso

4. **Copertura e Grondaie**
   - Tipo tetto (monofalda/doppia falda)
   - Materiale copertura
   - Grondaie incluse

5. **Accessori e Optional**
   - Pavimento
   - Predisposizione impianti
   - Veranda, pensilina
   - Note personalizzate

6. **Zona e Posa**
   - Provincia installazione
   - Accessibilità sito
   - Posa e trasporto inclusi

7. **Riepilogo e Dati Cliente**
   - Visualizzazione configurazione completa
   - Form dati contatto
   - Invio richiesta

## 🔗 Integrazioni Future

### Supabase (Database)
```typescript
// Configurazione Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Tabella: preventivi_preingressi
// - id (UUID)
// - created_at (timestamp)
// - dati configurazione...
// - stato (nuovo/in_lavorazione/confermato)
```

### Email Automatiche
- Conferma ricezione richiesta al cliente
- Notifica nuovo preventivo all'admin
- Template personalizzato Martello1930

### Dashboard Admin
- Login protetto
- Lista richieste con filtri
- Dettaglio configurazione
- Cambio stato preventivo
- Generazione PDF

## 🎯 TODO per Deployment

- [ ] Configurare Supabase project
- [ ] Creare tabelle database
- [ ] Implementare API routes per form submission
- [ ] Setup Email service (Resend/SendGrid)
- [ ] Creare dashboard admin
- [ ] Deploy su Vercel
- [ ] Configurare dominio custom (preingressi.martello1930.net)
- [ ] Setup Google Analytics
- [ ] Test end-to-end

## 📞 Contatti

**Martello1930**
- Tel: +39 0185 167566
- Email: soluzioni@martello1930.net
- Web: www.martello1930.net

## 📝 License

© 2025 Martello1930 - All Rights Reserved

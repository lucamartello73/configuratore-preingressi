"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Ruler, Package, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Ruler,
      title: "Personalizzazione Totale",
      description: "Configura ogni dettaglio: dimensioni, materiali, finiture e accessori",
    },
    {
      icon: Home,
      title: "Ideale per Strutture Ricettive",
      description: "Perfetto per campeggi, agriturismi, villaggi e bungalow",
    },
    {
      icon: Package,
      title: "Consegna e Montaggio",
      description: "Opzioni complete per trasporto e posa in opera",
    },
    {
      icon: CheckCircle2,
      title: "Preventivo Immediato",
      description: "Ricevi un'offerta personalizzata entro 24-48 ore",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#6AB52B] to-[#5A9823] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Configuratore Preingressi e Casette su Misura
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl mb-8 opacity-90"
              >
                Progetta la tua struttura ideale in pochi click.
                <br />
                Qualità artigianale dal 1930.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/configuratore">
                  <Button size="lg" className="bg-white text-[#6AB52B] hover:bg-gray-100 text-lg px-8 py-6">
                    Inizia Configurazione
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Perché Scegliere il Nostro Configuratore
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un sistema intuitivo per progettare strutture personalizzate con precisione professionale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                        <feature.icon className="w-6 h-6 text-[#6AB52B]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Come Funziona
              </h2>
              <p className="text-lg text-gray-600">
                Semplice, veloce e intuitivo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6AB52B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Configura</h3>
                <p className="text-gray-600">
                  Scegli dimensioni, materiali, serramenti e accessori attraverso 6 step guidati
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6AB52B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Richiedi</h3>
                <p className="text-gray-600">
                  Inserisci i tuoi dati e invia la richiesta di preventivo personalizzato
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#6AB52B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ricevi</h3>
                <p className="text-gray-600">
                  Ottieni un preventivo dettagliato entro 24-48 ore, con supporto tecnico dedicato
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#6AB52B] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a Progettare la Tua Struttura?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inizia subito la configurazione e ricevi un preventivo su misura
            </p>
            <Link href="/configuratore">
              <Button size="lg" className="bg-white text-[#6AB52B] hover:bg-gray-100 text-lg px-8 py-6">
                Avvia Configuratore
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/ui/map").then((m) => m.Map), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#e9d6bf]" />,
});

const services = [
  "Kuhinje po meri",
  "Garderoberi",
  "Dnevne sobe",
  "Nameštaj po meri",
  "Ostalo",
];

// Simplified SVG paths for Balkan countries (approximate)

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="bg-[#e9d6bf] overflow-hidden -mx-5 relative lg:min-h-[520px]"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      {/* Map — absolutely covers from 50% to right edge */}
      <div className="hidden lg:block absolute top-0 bottom-0 right-0 left-1/2">
        {/* Fade overlay on left edge */}
        <div
          className="absolute top-0 bottom-0 left-0 w-96 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #e9d6bf, transparent)" }}
        />
          <Map center={[20.4468, 44.8922]} zoom={17} />
      </div>

      {/* Content grid — constrained to 1216px */}
      <div className="relative flex flex-col lg:flex-row min-h-[520px] mx-auto w-full" style={{ maxWidth: "1216px" }}>
        {/* Left — Form */}
        <div className="flex-1 px-4 sm:px-8 lg:pr-24 py-10 sm:py-14 lg:py-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              Razgovarajmo<br />o vašem projektu.
            </h2>
            <p className="text-[#6b4f35] text-sm leading-relaxed text-justify mb-6 sm:mb-10 max-w-sm">
              Bilo da planirate kuhinju po meri, garderober ili kompletno opremanje prostora tu smo da zajedno pronađemo najbolje rešenje.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-[#cc9a6e] font-semibold text-lg"
              >
                Hvala! Javićemo vam se uskoro. ✓
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  <div className="border-b border-[#9a7a5a] py-3">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ime i prezime"
                      className="w-full bg-transparent text-sm text-[#1a1a1a] placeholder-[#7a5c3a] outline-none"
                    />
                  </div>
                  <div className="border-b border-[#9a7a5a] py-3">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email adresa"
                      className="w-full bg-transparent text-sm text-[#1a1a1a] placeholder-[#7a5c3a] outline-none"
                    />
                  </div>
                </div>

                <div className="border-b border-[#9a7a5a] py-3">
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-transparent text-sm outline-none appearance-none cursor-pointer"
                    style={{ color: form.service ? "#1a1a1a" : "#7a5c3a" }}
                  >
                    <option value="" disabled>Usluga koja vas zanima</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ color: "#1a1a1a" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="border-b border-[#9a7a5a] py-3 mb-8">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Poruka"
                    rows={3}
                    className="w-full bg-transparent text-sm text-[#1a1a1a] placeholder-[#7a5c3a] outline-none resize-none"
                  />
                </div>

                <div className="flex justify-end items-center gap-4">
                  {error && <p className="text-red-600 text-xs">{error}</p>}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#cc9a6e] transition-colors duration-300 disabled:opacity-60"
                  >
                    {loading ? "Slanje..." : "Pošalji"}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Mobile/Tablet Map */}
        <div className="lg:hidden w-full h-64 sm:h-80">
          <Map center={[20.4468, 44.8922]} zoom={14} />
        </div>

        {/* Spacer — map sits behind this */}
        <div className="hidden lg:block flex-1" />
      </div>
    </section>
  );
}

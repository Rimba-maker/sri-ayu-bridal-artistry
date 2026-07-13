import { useState, type FormEvent } from "react";
import { bookingCta, contact } from "../data/content";

export default function BookingForm() {
  const [form, setForm] = useState({
    nama: "",
    tanggalAcara: "",
    jenisRiasan: bookingCta.jenisRiasanOptions[0],
    preferensiTrial: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = `Halo Sri Ayu Bridal Artistry, saya mau booking trial makeup.
Nama: ${form.nama}
Tanggal Acara: ${form.tanggalAcara}
Jenis Riasan: ${form.jenisRiasan}
Preferensi Tanggal Trial: ${form.preferensiTrial}`;
    const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section id="cta-booking" className="bg-canvas px-6 py-24">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-ink mb-10">{bookingCta.heading}</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            required
            type="text"
            placeholder="Nama"
            value={form.nama}
            onChange={(e) => update("nama", e.target.value)}
            className="w-full rounded-[4px] border border-black/15 bg-surface px-4 py-3 font-sans text-sm text-ink focus:border-maroon-accent outline-none"
          />
          <input
            required
            type="date"
            placeholder="Tanggal Acara"
            value={form.tanggalAcara}
            onChange={(e) => update("tanggalAcara", e.target.value)}
            className="w-full rounded-[4px] border border-black/15 bg-surface px-4 py-3 font-sans text-sm text-ink focus:border-maroon-accent outline-none"
          />
          <select
            value={form.jenisRiasan}
            onChange={(e) => update("jenisRiasan", e.target.value)}
            className="w-full rounded-[4px] border border-black/15 bg-surface px-4 py-3 font-sans text-sm text-ink focus:border-maroon-accent outline-none"
          >
            {bookingCta.jenisRiasanOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Preferensi Tanggal Trial"
            value={form.preferensiTrial}
            onChange={(e) => update("preferensiTrial", e.target.value)}
            className="w-full rounded-[4px] border border-black/15 bg-surface px-4 py-3 font-sans text-sm text-ink focus:border-maroon-accent outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-pill bg-maroon-accent text-on-dark font-sans font-semibold px-8 py-3.5 active:scale-95 transition-transform"
          >
            {bookingCta.cta}
          </button>
        </form>
      </div>
    </section>
  );
}

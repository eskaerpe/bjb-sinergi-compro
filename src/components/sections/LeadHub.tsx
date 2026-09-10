import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadHub: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    service: 'Pelatihan Profesional & Sertifikasi',
    contact: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    
    // Construct WhatsApp message URL for direct submit fallback
    const waText = encodeURIComponent(
      `Halo PT Sinergi Ekuitas Indonesia,\n\nNama: ${formData.name}\nInstitusi: ${formData.institution}\nLayanan Diminati: ${formData.service}\nKontak: ${formData.contact}\nKebutuhan: ${formData.message}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <SectionContainer id="lead-form" outerClassName="bg-navy-900 text-white relative overflow-hidden">
      <div className="space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 text-xs font-extrabold text-coral-500 bg-navy-950 rounded-full border border-navy-800">
            Hubungi Tim Konsultasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mulai Konsultasi & Permintaan Proposal Sinergi
          </h2>
          <p className="text-base text-navy-100 leading-relaxed">
            Siap mendiskusikan kebutuhan pengembangan SDM, pelatihan perbankan, konsultasi bisnis, dan operasional kegiatan institusi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Cards */}
            <div className="bg-navy-950 p-6 sm:p-8 rounded-3xl border border-navy-800 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-coral-500" />
                <span>Kontak Resmi Perusahaan</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-navy-100">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-brandBlue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Alamat Kantor:</strong>
                    <p className="leading-relaxed text-navy-200 mt-0.5">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-navy-100">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-coral-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Telepon & WhatsApp:</strong>
                    <p className="text-navy-200 mt-0.5">{COMPANY_INFO.phone} / {COMPANY_INFO.whatsappFormatted}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-navy-100">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-brandBlue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Email Official:</strong>
                    <p className="text-navy-200 mt-0.5">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-navy-100">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-coral-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Jam Operasional:</strong>
                    <p className="text-navy-200 mt-0.5">{COMPANY_INFO.operatingHours}</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia,%20saya%20ingin%20berkonsultasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-coral-500 hover:bg-coral-600 py-3.5 px-4 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-coral-500"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat Langsung via WhatsApp Official</span>
                </a>
              </div>
            </div>

            {/* Google Map Container */}
            <div className="bg-navy-950 rounded-3xl overflow-hidden border border-navy-800 h-64 relative shadow-xl">
              <iframe
                title="Peta Lokasi PT Sinergi Ekuitas Indonesia"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90"
              ></iframe>
            </div>
          </div>

          {/* Right Column: B2B Proposal Form */}
          <div className="lg:col-span-7 bg-white text-navy-900 p-8 sm:p-10 rounded-3xl shadow-2xl border border-border-subtle">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-navy-900">
                  Permintaan Pesan Berhasil Terkirim!
                </h3>
                <p className="text-xs sm:text-sm text-navy-700 max-w-md mx-auto">
                  Pesan Anda telah diteruskan ke WhatsApp Official PT Sinergi Ekuitas Indonesia. Tim kami akan segera merespons kebutuhan Anda.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-block text-xs font-bold text-brandBlue-600 hover:underline pt-4"
                >
                  Kirim Permintaan Proposal Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-navy-900">
                    Formulir Permintaan Proposal & Diskusi
                  </h3>
                  <p className="text-xs text-navy-700">
                    Isi formulir di bawah ini untuk menerima penawaran program terintegrasi.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-name" className="block text-xs font-bold text-navy-900">
                      Nama Lengkap *
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="Nama lengkap Anda..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
                    />
                  </div>

                  {/* Institution Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-institution" className="block text-xs font-bold text-navy-900">
                      Institusi / Bank / Perusahaan
                    </label>
                    <input
                      id="form-institution"
                      type="text"
                      placeholder="Nama instansi Anda..."
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-service" className="block text-xs font-bold text-navy-900">
                    Layanan / Bidang yang Diminati *
                  </label>
                  <select
                    id="form-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
                  >
                    <option value="Pelatihan Profesional & Sertifikasi">Pelatihan Profesional & Sertifikasi</option>
                    <option value="Konsultasi Bisnis & Keuangan">Konsultasi Bisnis & Keuangan</option>
                    <option value="Development & Competency SDM">Development & Competency SDM</option>
                    <option value="Event Management & MICE">Event Management & MICE</option>
                    <option value="Layanan Pendukung Institusional">Layanan Pendukung Institusional</option>
                    <option value="Program Frontliner & Simulasi Perbankan">Program Frontliner & Simulasi Perbankan</option>
                  </select>
                </div>

                {/* Contact Email / Phone Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-contact" className="block text-xs font-bold text-navy-900">
                    Nomor WhatsApp / Email Kontak *
                  </label>
                  <input
                    id="form-contact"
                    type="text"
                    required
                    placeholder="Contoh: 081234567890 / email@instansi.id"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-message" className="block text-xs font-bold text-navy-900">
                    Detail Kebutuhan / Pertanyaan Proposal
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Jelaskan perkiraan jumlah peserta, jadwal kegiatan, atau spesifikasi program yang dibutuhkan..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-700 focus:outline-none focus:ring-2 focus:ring-brandBlue-500"
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-navy-900 hover:bg-navy-800 py-3.5 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-navy-900"
                >
                  <Send className="w-4 h-4 text-coral-500" />
                  <span>Kirim Permintaan Proposal</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brandBlue-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </SectionContainer>
  );
};

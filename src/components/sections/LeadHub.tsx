import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Download,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadHub: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    service: 'Pelatihan Profesional & Sertifikasi Kompetensi',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; contact?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (field: 'name' | 'contact', value: string) => {
    let err = '';
    const trimmed = value.trim();

    if (field === 'name') {
      if (!trimmed) {
        err = 'Nama lengkap wajib diisi.';
      } else if (trimmed.length < 3) {
        err = 'Nama lengkap minimal 3 karakter.';
      }
    }

    if (field === 'contact') {
      if (!trimmed) {
        err = 'Nomor WhatsApp atau Email kontak wajib diisi.';
      } else if (trimmed.includes('@')) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmed)) {
          err = 'Format email tidak valid (contoh: nama@perusahaan.co.id).';
        }
      } else {
        const phoneRegex = /^(\+?62|0)[0-9]{8,13}$/;
        const cleanPhone = trimmed.replace(/[\s-]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
          err = 'Format nomor HP/WA tidak valid (contoh: 081234567890).';
        }
      }
    }

    setErrors((prev) => ({ ...prev, [field]: err }));
    return !err;
  };

  const handleBlur = (field: 'name' | 'contact') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field as 'name' | 'contact']) {
      validateField(field as 'name' | 'contact', value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isNameValid = validateField('name', formData.name);
    const isContactValid = validateField('contact', formData.contact);
    setTouched({ name: true, contact: true });

    if (!isNameValid || !isContactValid) {
      return;
    }

    const text = `Halo ${COMPANY_INFO.name}, saya ingin berkonsultasi mengenai kebutuhan institusi kami:

Nama: ${formData.name}
Instansi: ${formData.institution || '-'}
Layanan: ${formData.service}
Kontak: ${formData.contact}
Pesan/Kebutuhan: ${formData.message || '-'}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `${COMPANY_INFO.whatsappLink}?text=${encodedText}`;

    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <SectionContainer id="lead-form" outerClassName="relative bg-navy-950 text-white overflow-hidden border-t border-navy-800">
      <div
        className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-brandBlue-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[32rem] h-[32rem] bg-coral-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
            Hubungi Tim Konsultasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Mulai Konsultasi &amp; Permintaan Proposal Sinergi
          </h2>
          <p className="text-base text-navy-200 leading-relaxed font-normal">
            Siap mendiskusikan kebutuhan pengembangan SDM, pelatihan perbankan, konsultasi bisnis, dan operasional kegiatan institusi Anda bersama pakar kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-navy-900/90 rounded-3xl p-6 sm:p-8 border border-navy-800 shadow-card space-y-6 text-left">
              <div className="space-y-2 border-b border-navy-800 pb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-coral-400">
                  Sekretariat &amp; Kantor Pusat
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-navy-200">
                  {COMPANY_INFO.ecosystemSubtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-navy-950 text-brandBlue-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Alamat Kampus:</span>
                    <span className="text-navy-200 leading-relaxed block mt-0.5">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-navy-950 text-coral-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp &amp; Telepon:</span>
                    <span className="text-navy-200 block mt-0.5">
                      {COMPANY_INFO.whatsappFormatted} (WhatsApp) / {COMPANY_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-navy-950 text-brandBlue-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Email Resmi:</span>
                    <span className="text-navy-200 block mt-0.5">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-navy-950 text-navy-300 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="font-bold text-white block">Jam Layanan:</span>
                    <p className="text-navy-200 mt-0.5">{COMPANY_INFO.operatingHours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <a
                  href={`${COMPANY_INFO.whatsappLink}?text=Halo%20${encodeURIComponent(COMPANY_INFO.name)},%20saya%20ingin%20berkonsultasi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat langsung dengan sekretariat via WhatsApp Official"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] text-xs font-bold text-navy-950 bg-coral-500 hover:bg-coral-400 px-5 py-3 rounded-xl shadow-lg transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Chat Langsung via WhatsApp Official</span>
                </a>

                <a
                  href="./docs/Company-Profile-PT-Sinergi.pdf"
                  download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                  aria-label="Unduh E-Brochure Company Profile PT Sinergi format PDF"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] text-xs font-bold text-navy-100 bg-navy-950 hover:bg-navy-800 border border-navy-700 px-5 py-2.5 rounded-xl transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
                >
                  <Download className="w-4 h-4 text-brandBlue-400" aria-hidden="true" />
                  <span>Unduh E-Brochure Profile (PDF)</span>
                </a>
              </div>
            </div>

            <div
              className="rounded-3xl overflow-hidden border border-navy-800 shadow-card h-64 w-full bg-navy-900 relative"
              aria-label="Lokasi Peta PT Sinergi Ekuitas Indonesia Kampus Universitas Ekuitas Bandung"
            >
              <iframe
                title="Peta Lokasi Kantor PT Sinergi Ekuitas Indonesia Bandung"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-border-subtle shadow-card text-left">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900">
                    Permintaan Anda Sedang Diproses!
                  </h3>
                  <p className="text-xs sm:text-sm text-navy-700 max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi PT Sinergi Ekuitas Indonesia. Anda telah diarahkan ke WhatsApp Official kami untuk mendiskusikan proposal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-navy-900 text-white font-bold text-xs hover:bg-brandBlue-600 transition-colors"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="space-y-1 border-b border-border-subtle pb-4">
                    <h3 className="text-xl font-extrabold text-navy-900">
                      Formulir Konsultasi &amp; Kemitraan
                    </h3>
                    <p className="text-xs text-navy-600">
                      Isi data singkat berikut untuk mempermudah konsultan kami menyiapkan rekomendasi solusi.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-xs font-bold text-navy-900 mb-1">
                        Nama Lengkap <span className="text-coral-500">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Contoh: Budi Santoso, S.E."
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-normal text-navy-900 placeholder:text-navy-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                          touched.name && errors.name
                            ? 'border-coral-500 focus:ring-coral-500/20'
                            : 'border-border-subtle focus:border-brandBlue-500 focus:ring-brandBlue-500/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!(touched.name && errors.name)}
                      />
                      {touched.name && errors.name && (
                        <p className="text-[11px] font-medium text-coral-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-institution" className="block text-xs font-bold text-navy-900 mb-1">
                        Instansi / Perusahaan / Kampus (Opsional)
                      </label>
                      <input
                        id="lead-institution"
                        type="text"
                        value={formData.institution}
                        onChange={(e) => handleChange('institution', e.target.value)}
                        placeholder="Contoh: PT Bank bjb Cabang Utama Bandung / Universitas X"
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle text-xs sm:text-sm font-normal text-navy-900 placeholder:text-navy-400 bg-white focus:outline-none focus:border-brandBlue-500 focus:ring-2 focus:ring-brandBlue-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-service" className="block text-xs font-bold text-navy-900 mb-1">
                        Layanan yang Diminati <span className="text-coral-500">*</span>
                      </label>
                      <select
                        id="lead-service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle text-xs sm:text-sm font-normal text-navy-900 bg-white focus:outline-none focus:border-brandBlue-500 focus:ring-2 focus:ring-brandBlue-500/20 transition-all"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="lead-contact" className="block text-xs font-bold text-navy-900 mb-1">
                        Nomor WhatsApp / Email Kontak <span className="text-coral-500">*</span>
                      </label>
                      <input
                        id="lead-contact"
                        type="text"
                        value={formData.contact}
                        onChange={(e) => handleChange('contact', e.target.value)}
                        onBlur={() => handleBlur('contact')}
                        placeholder="Contoh: 081234567890 atau email@perusahaan.co.id"
                        className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm font-normal text-navy-900 placeholder:text-navy-400 bg-white focus:outline-none focus:ring-2 transition-all ${
                          touched.contact && errors.contact
                            ? 'border-coral-500 focus:ring-coral-500/20'
                            : 'border-border-subtle focus:border-brandBlue-500 focus:ring-brandBlue-500/20'
                        }`}
                        aria-required="true"
                        aria-invalid={!!(touched.contact && errors.contact)}
                      />
                      {touched.contact && errors.contact && (
                        <p className="text-[11px] font-medium text-coral-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.contact}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lead-message" className="block text-xs font-bold text-navy-900 mb-1">
                        Pesan / Detail Kebutuhan (Opsional)
                      </label>
                      <textarea
                        id="lead-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Jelaskan perkiraan jumlah peserta, jadwal rencana kegiatan, atau topik modul khusus yang Anda butuhkan..."
                        className="w-full px-4 py-3 rounded-xl border border-border-subtle text-xs sm:text-sm font-normal text-navy-900 placeholder:text-navy-400 bg-white focus:outline-none focus:border-brandBlue-500 focus:ring-2 focus:ring-brandBlue-500/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3.5 bg-brandBlue-600 hover:bg-brandBlue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brandBlue-500 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Proposal via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LeadHub;

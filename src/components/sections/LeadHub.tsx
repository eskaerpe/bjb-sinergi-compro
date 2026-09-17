import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Download,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadHub: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    service: 'Pelatihan & Pengembangan (Training & Development)',
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

    const text = `Halo PT Sinergi Ekuitas Indonesia, saya ingin berkonsultasi mengenai kebutuhan institusi kami:

Nama: ${formData.name}
Instansi: ${formData.institution || '-'}
Layanan: ${formData.service}
Kontak: ${formData.contact}
Pesan/Kebutuhan: ${formData.message || '-'}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedText}`;

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
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold text-coral-400 bg-navy-900 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-coral-500" aria-hidden="true" />
            Hubungi Tim Konsultasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Mulai Konsultasi &amp; Permintaan Proposal Sinergi
          </h2>
          <p className="text-base text-navy-200 leading-relaxed font-normal">
            Siap mendiskusikan kebutuhan pengembangan SDM, pelatihan perbankan, konsultasi bisnis, dan operasional
            kegiatan institusi Anda bersama pakar kami.
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
                  PT Sinergi Ekuitas Indonesia
                </h3>
                <p className="text-xs text-navy-200">
                  Afiliasi resmi Yayasan Kesejahteraan Pegawai (YKP) bank bjb &amp; Universitas Ekuitas Indonesia.
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
                      {COMPANY_INFO.whatsappFormatted} (Official) / {COMPANY_INFO.phone}
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
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia,%20saya%20ingin%20berkonsultasi.`}
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
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] text-xs font-bold text-white bg-navy-950 hover:bg-navy-800 border border-navy-700 px-5 py-2.5 rounded-xl transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500"
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
                    Sistem telah mengarahkan Anda ke WhatsApp Official sekretariat kami. Jika jendela tidak terbuka otomatis, silakan klik tombol di bawah.
                  </p>
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20PT%20Sinergi%20Ekuitas%20Indonesia`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-navy-950 bg-coral-500 hover:bg-coral-400 shadow-md transition-all duration-150 ease-out"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Buka WhatsApp Sekarang</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-1.5 border-b border-border-subtle pb-4">
                    <span className="text-xs font-bold text-coral-600 uppercase tracking-wider">
                      Respon Cepat Tim Ahli
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-snug">
                      Formulir Permintaan Proposal &amp; Diskusi
                    </h3>
                    <p className="text-xs text-navy-600 leading-relaxed font-normal">
                      Isi formulir di bawah ini untuk terhubung langsung dengan Tim Konsultasi &amp; Sekretariat Sinergi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="block text-xs font-bold text-navy-900">
                        Nama Lengkap <span className="text-coral-500" aria-hidden="true">*</span>
                        <span className="sr-only">(wajib diisi)</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Contoh: Budi Pratama"
                        value={formData.name}
                        onBlur={() => handleBlur('name')}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full min-h-[44px] bg-surface-tint border px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-400 focus:outline-none focus-visible:ring-2 transition-all duration-150 ${
                          errors.name
                            ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                            : 'border-border-subtle focus-visible:ring-brandBlue-500'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-red-600 font-medium flex items-center gap-1 pt-0.5">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-institution" className="block text-xs font-bold text-navy-900">
                        Nama Perusahaan / Instansi
                      </label>
                      <input
                        id="form-institution"
                        type="text"
                        placeholder="Contoh: Bank BJB Cabang / Dinas XYZ"
                        value={formData.institution}
                        onChange={(e) => handleChange('institution', e.target.value)}
                        className="w-full min-h-[44px] bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-service" className="block text-xs font-bold text-navy-900">
                      Pilihan Kategori Layanan <span className="text-coral-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="form-service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className="w-full min-h-[44px] bg-surface-tint border border-border-subtle px-3.5 py-2.5 rounded-xl text-xs text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 appearance-none transition-all duration-150"
                      >
                        <option value="Pelatihan & Pengembangan (Training & Development)">
                          Pelatihan &amp; Pengembangan (Training &amp; Development)
                        </option>
                        <option value="Konsultasi (Strategic & Organizational Consulting)">
                          Konsultasi (Strategic &amp; Organizational Consulting)
                        </option>
                        <option value="Manajemen Acara (Event & Conference Management)">
                          Manajemen Acara (Event &amp; Conference Management)
                        </option>
                        <option value="Fasilitas Pembelajaran (Learning Facilities Rental & Support)">
                          Fasilitas Pembelajaran (Rental Lab Komputer, Bank Mini, Kelas)
                        </option>
                        <option value="Merchandise Institusional (Corporate Merchandise & Branding)">
                          Merchandise Institusional (Corporate Merchandise &amp; Kit)
                        </option>
                        <option value="Kemitraan Strategis (Strategic Partnerships & Synergies)">
                          Kemitraan Strategis &amp; Sinergi Kelembagaan
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-navy-700">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-contact" className="block text-xs font-bold text-navy-900">
                      Nomor WhatsApp / Email Kontak <span className="text-coral-500" aria-hidden="true">*</span>
                      <span className="sr-only">(wajib diisi)</span>
                    </label>
                    <input
                      id="form-contact"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.contact}
                      aria-describedby={errors.contact ? 'contact-error' : undefined}
                      placeholder="Contoh: 081234567890 atau nama@instansi.id"
                      value={formData.contact}
                      onBlur={() => handleBlur('contact')}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      className={`w-full min-h-[44px] bg-surface-tint border px-3.5 py-2.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-400 focus:outline-none focus-visible:ring-2 transition-all duration-150 ${
                        errors.contact
                          ? 'border-red-500 focus-visible:ring-red-400 bg-red-50/20'
                          : 'border-border-subtle focus-visible:ring-brandBlue-500'
                      }`}
                    />
                    {errors.contact && (
                      <p id="contact-error" role="alert" className="text-xs text-red-600 font-medium flex items-center gap-1 pt-0.5">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                        <span>{errors.contact}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="block text-xs font-bold text-navy-900">
                      Detail Kebutuhan / Pertanyaan Proposal
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Jelaskan perkiraan jumlah peserta, jadwal kegiatan, atau spesifikasi program yang dibutuhkan..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full bg-surface-tint border border-border-subtle p-3.5 rounded-xl text-xs text-navy-900 placeholder:text-navy-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 resize-y transition-all duration-150"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      aria-label="Kirim formulir dan lanjutkan via WhatsApp Official"
                      className="w-full inline-flex items-center justify-center gap-2.5 min-h-[48px] text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 py-3.5 px-6 rounded-xl shadow-lg hover:shadow-card-hover transition-all duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 active:scale-[0.98] group"
                    >
                      <Send className="w-4 h-4 text-coral-500 group-hover:translate-x-1 transition-transform duration-200 ease-out" aria-hidden="true" />
                      <span>Kirim &amp; Hubungkan ke WhatsApp Official</span>
                    </button>
                    <p className="text-[11px] text-navy-500 text-center pt-2">
                      Privasi data terjamin. Tim kami akan merespons dalam waktu 1x24 jam kerja.
                    </p>
                  </div>
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

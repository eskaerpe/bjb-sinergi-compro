import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Download,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';
import { Reveal, Stagger, StaggerItem } from '@/components/common/MotionReveal';

export const LeadHub: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    service: 'Pelatihan Profesional & Sertifikasi Kompetensi',
    contact: '',
    message: '',
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [errors, setErrors] = useState<{ name?: string; contact?: string; privacyConsent?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; contact?: boolean; privacyConsent?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const getWhatsappUrl = (data: typeof formData) => {
    const text = `Halo ${COMPANY_INFO.name}, saya ingin berkonsultasi mengenai kebutuhan institusi kami:

Nama: ${data.name}
Instansi: ${data.institution || '-'}
Layanan: ${data.service}
Kontak: ${data.contact}
Pesan/Kebutuhan: ${data.message || '-'}`;

    return `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(text)}`;
  };

  const getMailtoUrl = (data: typeof formData) => {
    const subject = `Permintaan Proposal & Konsultasi - ${data.institution || data.name}`;
    const body = `Halo ${COMPANY_INFO.name},

Berikut detail formulir konsultasi dan permintaan proposal institusi kami:

- Nama Lengkap: ${data.name}
- Instansi/Perusahaan: ${data.institution || '-'}
- Layanan yang Diminati: ${data.service}
- Kontak WhatsApp/Email: ${data.contact}
- Pesan/Detail Kebutuhan: ${data.message || '-'}

Terima kasih.`;

    return `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const validateField = (field: 'name' | 'contact' | 'privacyConsent', value: string | boolean) => {
    let err = '';

    if (field === 'name') {
      const trimmed = (value as string).trim();
      if (!trimmed) {
        err = 'Nama lengkap wajib diisi.';
      } else if (trimmed.length < 3) {
        err = 'Nama lengkap minimal 3 karakter.';
      }
    }

    if (field === 'contact') {
      const trimmed = (value as string).trim();
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

    if (field === 'privacyConsent') {
      if (!value) {
        err = 'Anda harus menyetujui Kebijakan Privasi & Pelindungan Data untuk melanjutkan.';
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
    const isPrivacyValid = validateField('privacyConsent', privacyConsent);
    setTouched({ name: true, contact: true, privacyConsent: true });

    if (!isNameValid || !isContactValid || !isPrivacyValid) {
      return;
    }

    const waUrl = getWhatsappUrl(formData);
    setSubmitted(true);
    const whatsappWindow = window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (!whatsappWindow) {
      window.location.href = waUrl;
    }
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
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-coral-400 uppercase">
            Hubungi Tim Konsultasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Mulai Konsultasi &amp; Permintaan Proposal Sinergi
          </h2>
          <p className="text-base text-navy-200 leading-relaxed font-normal">
            Siap mendiskusikan kebutuhan pengembangan SDM, pelatihan perbankan, konsultasi bisnis, dan operasional kegiatan institusi Anda bersama pakar kami.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <StaggerItem className="lg:col-span-5 space-y-6">
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
                    <span className="text-navy-200 block mt-0.5 break-all sm:break-normal">
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
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] text-xs font-bold text-navy-950 bg-coral-500 hover:bg-coral-400 px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 active:scale-[0.98] group"
                >
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200 ease-out" aria-hidden="true" />
                  <span>Chat Langsung via WhatsApp Official</span>
                </a>

                <a
                  href={COMPANY_INFO.brochureUrl}
                  download="Company-Profile-PT-Sinergi-Ekuitas-Indonesia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Unduh E-Brochure Company Profile PT Sinergi format PDF"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[44px] text-xs font-bold text-navy-100 bg-navy-950 hover:bg-navy-800 border border-navy-700 hover:border-brandBlue-400 px-5 py-2.5 rounded-xl transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 active:scale-[0.98] group"
                >
                  <Download className="w-4 h-4 text-brandBlue-400 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" aria-hidden="true" />
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
          </StaggerItem>

          <StaggerItem className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-border-subtle shadow-card text-left">
              {submitted ? (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-brandBlue-50 text-brandBlue-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-brandBlue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-navy-900">
                      Diarahkan ke WhatsApp Official
                    </h3>
                    <p className="text-xs sm:text-sm text-navy-700 max-w-md mx-auto leading-relaxed">
                      Formulir Anda telah disiapkan. Anda telah diarahkan ke WhatsApp Official {COMPANY_INFO.name} untuk melanjutkan komunikasi proposal.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-left text-xs sm:text-sm text-navy-800 space-y-1.5 max-w-md mx-auto">
                    <div className="flex items-start gap-2 font-bold text-navy-900">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>Catatan Pengiriman Pesan:</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Pesan WhatsApp tidak terkirim secara otomatis dari website. Mohon pastikan Anda menekan tombol <strong>"Kirim"</strong> di dalam aplikasi WhatsApp yang terbuka.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 max-w-md mx-auto">
                    <a
                      href={getWhatsappUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-coral-500 hover:bg-coral-400 text-navy-950 font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral-400 focus-visible:ring-offset-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Buka WhatsApp Lagi</span>
                    </a>

                    <a
                      href={getMailtoUrl(formData)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 hover:bg-brandBlue-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2"
                    >
                      <Mail className="w-4 h-4 text-coral-400" />
                      <span>Kirim via Email Resmi</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-border-subtle">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-slate-600 hover:text-navy-900 text-xs font-semibold hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-800"
                    >
                      Kirim Formulir Konsultasi Lainnya
                    </button>
                  </div>
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
                        aria-describedby={touched.name && errors.name ? 'lead-name-error' : undefined}
                      />
                      {touched.name && errors.name && (
                        <p id="lead-name-error" role="alert" className="text-[11px] font-medium text-coral-600 mt-1 flex items-center gap-1">
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
                        aria-describedby={touched.contact && errors.contact ? 'lead-contact-error' : undefined}
                      />
                      {touched.contact && errors.contact && (
                        <p id="lead-contact-error" role="alert" className="text-[11px] font-medium text-coral-600 mt-1 flex items-center gap-1">
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

                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-start gap-2.5">
                        <input
                          id="lead-privacy"
                          type="checkbox"
                          checked={privacyConsent}
                          onChange={(e) => {
                            setPrivacyConsent(e.target.checked);
                            if (touched.privacyConsent) {
                              validateField('privacyConsent', e.target.checked);
                            }
                          }}
                          onBlur={() => {
                            setTouched((prev) => ({ ...prev, privacyConsent: true }));
                            validateField('privacyConsent', privacyConsent);
                          }}
                          className="mt-0.5 w-4 h-4 rounded border-border-subtle text-brandBlue-600 focus:ring-2 focus:ring-brandBlue-500/20 focus:outline-none cursor-pointer shrink-0"
                          aria-required="true"
                          aria-invalid={!!(touched.privacyConsent && errors.privacyConsent)}
                          aria-describedby={touched.privacyConsent && errors.privacyConsent ? 'lead-privacy-error' : undefined}
                        />
                        <div className="text-xs text-navy-700 leading-relaxed">
                          <label htmlFor="lead-privacy" className="cursor-pointer select-none">
                            Saya menyetujui bahwa data yang saya masukkan akan digunakan oleh {COMPANY_INFO.name} khusus untuk merespons permintaan proposal dan konsultasi institusi sesuai dengan{' '}
                          </label>
                          <Link
                            to="/kebijakan-privasi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-navy-900 underline hover:text-brandBlue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded px-0.5"
                          >
                            Kebijakan Privasi &amp; Pelindungan Data (UU PDP)
                          </Link>
                          <span className="text-navy-700">. </span>
                          <span className="text-coral-500 font-bold">*</span>
                        </div>
                      </div>
                      {touched.privacyConsent && errors.privacyConsent && (
                        <p id="lead-privacy-error" role="alert" className="text-[11px] font-medium text-coral-600 flex items-center gap-1 pl-6">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.privacyConsent}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3.5 bg-brandBlue-600 hover:bg-brandBlue-700 text-white font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 focus-visible:ring-offset-2 active:scale-[0.98] group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200 ease-out" />
                    <span>Kirim Permintaan Proposal via WhatsApp</span>
                  </button>

                  <div className="text-center pt-1">
                    <p className="text-[11px] text-slate-500">
                      Terkendala dengan WhatsApp?{' '}
                      <a
                        href={getMailtoUrl(formData)}
                        className="font-semibold text-navy-900 underline hover:text-brandBlue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue-500 rounded px-0.5 break-all sm:break-normal"
                      >
                        Kirim proposal langsung via Email ({COMPANY_INFO.email})
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </SectionContainer>
  );
};

export default LeadHub;

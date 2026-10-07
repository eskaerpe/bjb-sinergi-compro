import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '@/data/companyData';
import { SectionContainer } from '@/components/common/SectionContainer';

export const LeadHub: React.FC = () => {
  const [name, setName] = useState('');
  const [institution, setInstitution] = useState('');
  const [service, setService] = useState(SERVICES_DATA[0].title);
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const messageBody = [
    `Nama: ${name}`,
    institution && `Instansi: ${institution}`,
    `Layanan: ${service}`,
    `Kontak: ${contact}`,
    message && `Pesan: ${message}`
  ].filter(Boolean).join('\n');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappUrl = `${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(messageBody)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <SectionContainer id="lead-form" outerClassName="bg-navy-950 text-white">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-3">
            <span className="text-sm font-semibold text-coral-300">Kontak & kemitraan</span>
            <h2 className="text-3xl font-extrabold">Mari diskusikan kebutuhan institusi Anda</h2>
            <p className="text-sm leading-relaxed text-navy-100">Hubungi tim PT Sinergi Ekuitas Indonesia untuk membahas layanan pelatihan, konsultasi, fasilitas, dan dukungan kegiatan.</p>
          </div>
          <div className="space-y-4 text-sm text-navy-100">
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><p><strong className="text-white">Alamat</strong><br />{COMPANY_INFO.address}<br /><span className="text-navy-200">{COMPANY_INFO.officeLocation}, {COMPANY_INFO.city} {COMPANY_INFO.postalCode}</span></p></div>
            <p className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /><span><strong className="text-white">Jam layanan</strong><br />{COMPANY_INFO.operatingHours}</span></p>
            <a className="flex min-h-9 items-center gap-3 hover:text-white" href={`tel:${COMPANY_INFO.phone}`}><Phone className="h-4 w-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.phoneDisplay}</a>
            <a className="flex min-h-9 items-center gap-3 hover:text-white" href={`mailto:${COMPANY_INFO.email}`}><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />{COMPANY_INFO.email}</a>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/20 bg-white/10">
            <iframe title={`Peta lokasi ${COMPANY_INFO.officeLocation}`} src={COMPANY_INFO.googleMapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-56 w-full border-0" />
          </div>
          <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Unduh company profile PDF</a>
        </div>
        <div className="rounded-2xl bg-white p-6 text-navy-900 sm:p-8 lg:col-span-7">
          {submitted && <p role="status" className="mb-5 rounded-xl bg-brandBlue-50 p-4 text-sm">Situs mencoba membuka WhatsApp dengan isi pesan Anda. Jika jendela tidak terbuka, periksa pengaturan pemblokir pop-up. Tinjau pesan di WhatsApp sebelum mengirimkannya.</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold">Sampaikan kebutuhan Anda</h3>
            <p className="text-sm text-slate-700">Formulir ini menyiapkan pesan di WhatsApp. Anda dapat meninjau dan mengirimkannya dari WhatsApp. Pilih email untuk menyiapkan pesan di aplikasi email Anda.</p>
            <label htmlFor="lead-name" className="block text-sm font-semibold">Nama
              <input id="lead-name" required value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label htmlFor="lead-institution" className="block text-sm font-semibold">Instansi (opsional)
              <input id="lead-institution" value={institution} onChange={(event) => setInstitution(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label htmlFor="lead-service" className="block text-sm font-semibold">Layanan yang ditanyakan
              <select id="lead-service" value={service} onChange={(event) => setService(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium bg-white px-3 py-2 font-normal">
                {SERVICES_DATA.map((item) => <option key={item.id} value={item.title}>{item.title}</option>)}
              </select>
            </label>
            <label htmlFor="lead-contact" className="block text-sm font-semibold">Nomor WhatsApp atau email
              <input id="lead-contact" required value={contact} onChange={(event) => setContact(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label htmlFor="lead-message" className="block text-sm font-semibold">Pesan (opsional)
              <textarea id="lead-message" value={message} onChange={(event) => setMessage(event.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="min-h-11 rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700">Lanjutkan ke WhatsApp</button>
              <a href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Pertanyaan untuk PT Sinergi Ekuitas Indonesia')}&body=${encodeURIComponent(messageBody)}`} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border-medium px-5 py-3 text-center font-semibold hover:bg-surface-tint">Lanjutkan ke email</a>
            </div>
            <p className="text-xs text-slate-600">Informasi tentang data yang dimasukkan pada formulir tersedia di <Link className="underline" to="/kebijakan-privasi">Informasi Data Formulir</Link>.</p>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LeadHub;

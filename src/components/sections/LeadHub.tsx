import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span className="text-sm font-semibold text-coral-300">Kontak</span>
            <h2 className="text-3xl font-extrabold">PT Sinergi Ekuitas Indonesia</h2>
            <p className="text-sm text-navy-100 leading-relaxed">{COMPANY_INFO.address}</p>
          </div>
          <div className="space-y-3 text-sm">
            <p><span className="font-semibold">Telepon / WhatsApp: </span><a className="underline underline-offset-4" href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneDisplay}</a></p>
            <p><span className="font-semibold">Email: </span><a className="underline underline-offset-4" href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a></p>
          </div>
          <a href={COMPANY_INFO.brochureUrl} download="Company-Profile-PT-Sinergi.pdf" className="inline-flex rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10">Unduh Company Profile PDF</a>
        </div>
        <div className="lg:col-span-7 rounded-2xl bg-white p-6 sm:p-8 text-navy-900">
          {submitted && <p role="status" className="mb-5 rounded-xl bg-brandBlue-50 p-4 text-sm">WhatsApp telah dibuka dengan isi pesan Anda. Periksa pesan di WhatsApp sebelum mengirimnya.</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold">Kirim pertanyaan melalui WhatsApp</h3>
            <p className="text-sm text-slate-700">Saat Anda mengirim formulir, situs membuka WhatsApp dengan data yang Anda isi. Anda dapat meninjau dan mengirim pesan dari WhatsApp.</p>
            <label className="block text-sm font-semibold">Nama
              <input required value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label className="block text-sm font-semibold">Instansi (opsional)
              <input value={institution} onChange={(event) => setInstitution(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label className="block text-sm font-semibold">Layanan yang ditanyakan
              <select value={service} onChange={(event) => setService(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium bg-white px-3 py-2 font-normal">
                {SERVICES_DATA.map((item) => <option key={item.id} value={item.title}>{item.title}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold">Nomor WhatsApp atau email
              <input required value={contact} onChange={(event) => setContact(event.target.value)} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <label className="block text-sm font-semibold">Pesan (opsional)
              <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-border-medium px-3 py-2 font-normal" />
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <button type="submit" className="rounded-xl bg-navy-900 px-5 py-3 font-semibold text-white hover:bg-brandBlue-700">Buka WhatsApp</button>
              <a href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Pertanyaan untuk PT Sinergi Ekuitas Indonesia')}`} className="rounded-xl border border-border-medium px-5 py-3 text-center font-semibold hover:bg-surface-tint">Kirim email</a>
            </div>
            <p className="text-xs text-slate-600">Informasi tentang data yang dimasukkan pada formulir tersedia di <Link className="underline" to="/kebijakan-privasi">Informasi Data Formulir</Link>.</p>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LeadHub;

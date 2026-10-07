# PDF-Sourced Website Content Audit

## Status: resolved

The user designated `public/docs/Company-Profile-PT-Sinergi.pdf` as the single factual source of truth for public company content. This supersedes older briefs, the former root `AGENTS.md` fact values, and previous `companyData.ts` entries. The audit was completed against the extracted text of all 22 pages.

### Source limits

- Page 6 contains only the heading “Our Services”. The site now describes only broad activities explicitly present elsewhere in the profile; it does not present a PDF-verified formal service catalog or number of pillars.
- Pages 16–21 provide 12 domain headings and their individual topics. The site reproduces those headings and topic lists. The profile does not state a total topic count or instructor credentials/seniority.
- Pages 7–14 label transport, meeting room, classroom, computer lab, mini bank, and aula. The profile provides no facility capacities or equipment specifications.
- Page 15 names “Kegiatan Abdi bjb Frontliner” and gives a broad experience statement. It does not give dates, participant totals, outcome metrics, a client legal name, or detailed photo captions.
- Page 22 gives phone `+62821-1969-5761`, email `sinergiekuitas@gmail.com`, and address `Jl. PHH. Mustofa No. 31, Bandung`.

### Resolved discrepancies

| Area | PDF value | Cutover |
| :--- | :--- | :--- |
| Affiliation | Subsidiary of Yayasan Kesejahteraan Pegawai (YKP) bank bjb; integrated ecosystem with Universitas Ekuitas Indonesia | Removed unsupported claim that the university jointly founded the company and removed “YKP bank bjb Group”. |
| Leadership | Deni Hamdani, SE.M.Si (Direktur Utama); Dr. Gatot Iwan Kurniawan, SE., MBA (Direktur); Muhammad Gunawan (Komisaris) | Replaced differing credentials and removed unsupported role embellishments and quotes. |
| Vision and mission | Page 5 exact statements | Kept exact vision and five missions; removed extra GCG wording and unsupported SINERGI values/superlatives. |
| Services | Broad activities on pages 3, 15 and 22 | Removed unverified packages, formal “pillars”, detailed scopes, audiences and technical claims. |
| Facilities | Names on pages 3 and 7–14 | Removed capacities, specs, office/map/hours claims and unsupported facility total. |
| Portfolio | Page 15 event name and experience statement | Removed dates, metrics, participant totals, client legal identity, detailed work claims, stages and gallery captions. |
| Experts | Exact headings/topics on pages 16–21 | Replaced prior mismatched category/topic mapping; removed `120+` count and unsupported expertise credential claims. |
| Contacts | Page 22 values | Corrected email and pared address back to the printed address. |
| Privacy page | No privacy content in PDF | Replaced unverified policy/compliance assertions with a concise disclosure of the form's observable WhatsApp/email behavior. |

### Coverage

Audited the centralized data, every routed page, all domain section components, shared page chrome, title/meta/social metadata, contacts, image labels/alt text, download links, privacy copy, and relevant root/source maps and briefs. The PDF contains no identified internal factual contradiction. Missing details were treated as unsupported, not false.

### Verification record

`npm run build` passed. Browser smoke checks passed for all eight named routes and the homepage service CTA. Expert-topic search and its empty state worked. The contact form prepared a WhatsApp URL containing the selected service and entered fields; the email action points to `mailto:sinergiekuitas@gmail.com`. Fetching the profile returned HTTP 200 with `application/pdf` and 943,383 bytes. The built PDF and source asset have matching SHA-256 `7c3bc33e844f7e07ccc5ca74436dcff3a5f43edbab296e8891cbdc2d0266ca6f`. No Git commit or push was performed.

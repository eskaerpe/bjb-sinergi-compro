# Website Content Update Plan

## Current source of truth

`public/docs/Company-Profile-PT-Sinergi.pdf` is the single authoritative source for public company facts. Earlier values in AGENTS.md, companyData.ts, review notes, and proposal briefs are subordinate when inconsistent. The PDF has 22 pages; page 6 shows only the “Our Services” heading, with no detailed service catalog.

## PDF content boundaries

- **Company and affiliation:** PT Sinergi Ekuitas Indonesia is a subsidiary of Yayasan Kesejahteraan Pegawai (YKP) bank bjb and part of an ecosystem integrated with Universitas Ekuitas Indonesia (p. 3).
- **Leadership:** Use names, qualifications, titles and bios from p. 4 exactly.
- **Vision and missions:** Use p. 5; the profile does not list corporate values.
- **Services:** Describe only broad activities present on pp. 3, 15 and 22. Do not represent derived groupings as a formal catalog or pillars.
- **Facilities:** Use named types from pp. 3 and 7–14; no capacities/specifications are stated.
- **Portfolio:** Use “Kegiatan Abdi bjb Frontliner” and the broad experience statement on p. 15; no dates, metrics or participant counts are stated.
- **Experts:** Reproduce all 12 headings and their exact topic lists on pp. 16–21. Do not claim a profile total or credential/seniority details.
- **Contacts:** Use p. 22 phone, email and address only.

## Cutover status

The PDF fact audit and content cutover have been implemented across data, routes, sections, shared navigation/footer, metadata, and the form information page. The homepage remains a summary of the source-backed company profile. Forms retain WhatsApp and email actions; facility and portfolio numerical/specification cards were removed. The former privacy claims were replaced with an explanation limited to the actual client-side message behavior.

## Verification

`npm run build` passed. Browser smoke checks passed for all eight named routes; the homepage service CTA navigated to `#/layanan`; expert-topic search and empty results behaved as expected; the contact form produced a WhatsApp message containing the selected service and user-entered fields. The email link points to `mailto:sinergiekuitas@gmail.com`. Fetching the profile returned HTTP 200, `application/pdf`, 943,383 bytes. The `public/docs` and `dist/docs` PDFs have matching SHA-256 `7c3bc33e844f7e07ccc5ca74436dcff3a5f43edbab296e8891cbdc2d0266ca6f`. No commit or push was performed.

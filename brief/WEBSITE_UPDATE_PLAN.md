# Website Content Update Plan

## Content authority

The supplied PDF at `public/docs/Company-Profile-PT-Sinergi.pdf` is the authority for core corporate facts: company identity and affiliation, leadership names/credentials/titles, public contact values, vision and five mission statements, and the exact expert-domain headings and topic lists. It is a fact-checking reference, not the sole source of website copy.

The prior website at commit `a718419061b53a457d9707797f0f91874529f9b9` is the source for supplemental service, facility, portfolio, leadership-context, value-layout, and page-header material that it already contained. Preserve useful historical detail unless it directly conflicts with a PDF fact. A PDF omission alone does not invalidate or prohibit supplemental website content. Do not introduce new claims beyond those two sources.

## Core facts to preserve

- PT Sinergi Ekuitas Indonesia is a subsidiary of Yayasan Kesejahteraan Pegawai (YKP) bank bjb and belongs to an ecosystem integrated with Universitas Ekuitas Indonesia. The University is not a joint founder or co-owner.
- Leadership: Deni Hamdani, SE.M.Si (Direktur Utama); Dr. Gatot Iwan Kurniawan, SE., MBA (Direktur); Muhammad Gunawan (Komisaris).
- Use the exact vision and five missions in `src/data/companyData.ts`.
- Use all 12 exact expert-domain headings and topic arrays in `src/data/companyData.ts`; do not restore the prior version's incorrect domain/topic mapping.
- Public contact values: `+62821-1969-5761`, `sinergiekuitas@gmail.com`, and `Jl. PHH. Mustofa No. 31, Bandung`.
- The supplied profile PDF asset SHA-256 is `7c3bc33e844f7e07ccc5ca74436dcff3a5f43edbab296e8891cbdc2d0266ca6f`.

## Restoration scope

Restore the six historical service areas with descriptions, target audiences, scopes, methods, and section navigation; facility cards, descriptions, historical capacities/highlights/photo galleries and lightbox, and site-visit CTA; full Abdi bjb Frontliner portfolio presentation, its historical details and metrics, photo gallery/lightbox; the fuller vision/mission/values composition, leadership role context, expert teaser/overview, and useful page-header context. Retain current working routes and contact/search behavior. Historical metrics and capacities are prior-site supplemental details, not facts attributed to the PDF.

Keep privacy copy aligned with the real current contact behavior: form submission opens a prefilled WhatsApp message that the visitor reviews, while email links open the visitor's mail client. Shared contact values must stay synchronized with `COMPANY_INFO`.

## Verification

Build and browser verification for the current restoration are pending. Check all eight routes, service section navigation/CTAs, facilities modal/carousel, portfolio gallery/lightbox, expert search, contact form, and mobile widths 320, 375, 768, 1024, and 1440. Record only observed outcomes in `brief/CHANGELOG.md`.

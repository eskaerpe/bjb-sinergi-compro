# Website Content and Fact-Checking Audit

## Source boundary

The supplied PDF `public/docs/Company-Profile-PT-Sinergi.pdf` governs core facts: company identity and affiliation, leadership names/credentials/titles, public contact values, vision and missions, and the 12 expert-domain headings and topic lists. The PDF is a fact-checking source, not the only allowed source of website content.

The prior project/site version at `a718419061b53a457d9707797f0f91874529f9b9` supplies existing supplemental explanations for service areas, facilities, portfolio, leadership roles, values, and page context. Preserve those materials unless they directly conflict with PDF facts. Absence from the PDF is not evidence that a historical website detail is false, and does not prohibit explanatory copy. Do not add claims beyond the PDF and historical website baseline.

## Resolved direct conflicts

| Topic | PDF-authoritative fact | Website treatment |
| :--- | :--- | :--- |
| Company affiliation | PT Sinergi Ekuitas Indonesia is a subsidiary of Yayasan Kesejahteraan Pegawai (YKP) bank bjb, integrated with Universitas Ekuitas Indonesia | Do not say the University jointly founded or owns the company; avoid “YKP bank bjb Group”. |
| Leadership | Deni Hamdani, SE.M.Si (Direktur Utama); Dr. Gatot Iwan Kurniawan, SE., MBA (Direktur); Muhammad Gunawan (Komisaris) | Keep the exact names, credentials, and titles; old credentials are not restored. Historical role context and bios may supplement these facts. |
| Vision and mission | Exact statement and five missions on PDF page 5 | Keep the PDF wording unchanged. Historical website values may appear separately as supplemental material. |
| Expert directory | Exact 12 headings and topic lists on pages 16–21 | Preserve current PDF-exact `EXPERT_DOMAINS_DATA`; do not restore old swapped domain mappings. Contextual teaser copy may supplement the taxonomy. |
| Contact | `+62821-1969-5761`, `sinergiekuitas@gmail.com`, `Jl. PHH. Mustofa No. 31, Bandung` | Keep shared values synchronized from `COMPANY_INFO`. |

## Supplemental website material

The PDF does not detail service scopes, audience, methods, facility capacities, portfolio metrics, or values. The site may retain these details because they were present in the prior website and the user requested that restoration. Present these as historical/supplemental website information, not as content stated in the PDF. The restored Abdi bjb portfolio includes historical program descriptions, metrics and photo captions. Facility cards restore prior capacities and specifications. Service detail preserves the former six-area structure and explanations.

The detailed privacy page should describe actual website behavior. The current form assembles a message from user-entered fields and opens WhatsApp; the email link opens the user's mail client. Do not state that the website itself stores or transmits form submissions to a backend.

## Verification status

The current restoration requires a fresh production build and browser pass across eight routes, service navigation and CTAs, facility gallery/modal, portfolio gallery/lightbox, expert search, contact form, and 320/375/768/1024/1440 viewport widths. Do not reuse the previous cutover's verification result as evidence for this version; record new observed results in `brief/CHANGELOG.md`.

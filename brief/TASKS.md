# Website Content Integrity Checklist

## Authority

- `public/docs/Company-Profile-PT-Sinergi.pdf` is the single source of truth for visible corporate facts. It supersedes older briefs and prior master-data values.
- Page 6 contains only “Our Services”; service copy may use only broad activities stated elsewhere in the PDF.
- Do not infer falsehood from omission. Omit claims not substantiated by the PDF rather than inventing replacements.
- No commit or push is requested or permitted for this task.

## PDF-source cutover

- [x] Correct corporate affiliation and remove unsupported joint-founding/group claims.
- [x] Correct leadership names, titles and credentials to page 4; remove unsupported embellishments and quotes.
- [x] Use page 5 vision and mission wording; remove the unsupported SINERGI values and superlatives.
- [x] Restrict service content to broad activities stated in the profile; remove invented catalogs, scopes and counts.
- [x] Restrict facility content to the types shown on pages 3 and 7–14; remove capacities and specifications.
- [x] Restrict portfolio content to the event name and broad experience statement on page 15.
- [x] Replace prior expertise mapping with all 12 exact headings and topic lists from pages 16–21; remove unsupported totals/credentials.
- [x] Correct contact email and address to page 22; remove unsupported office details/hours/map.
- [x] Align website metadata, alt text, page headers, privacy disclosure, layout copy and source maps with the cutover.
- [x] Run `npm run build` and record the result.
- [x] Smoke every route and service/contact interaction in a browser; verify profile PDF download reaches the supplied asset.

Verification completed; results are recorded in `brief/CHANGELOG.md` and `brief/WEBSITE_UPDATE_PLAN.md`.

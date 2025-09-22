import { parseCSVToObjects } from './csv';
import { HOSPITALS_CSV } from './hospitals_raw';

export type Hospital = {
  name: string;
  specialty?: string;
  address?: string;
  languages?: string;
  lat?: string;
  lng?: string;
  phone?: string;
};

// Pre-clean the CSV to handle a few malformed lines from the source paste
function preCleanCSV(text: string): string {
  const lines = text.split(/\r?\n/);
  const fixed: string[] = [];
  for (let idx = 0; idx < lines.length; idx++) {
    let line = lines[idx];
    if (!line.trim()) { fixed.push(line); continue; }
    // Normalize obvious placeholders
    line = line.replace(/,unsure(,|$)/i, ',');
    // If a line has an odd number of double quotes, append a closing quote to avoid bleeding into the next row
    const quoteCount = (line.match(/"/g) || []).length;
    if (quoteCount % 2 === 1) {
      line = line + '"';
    }
    // Some rows were concatenated in one physical line separated by trailing ",,," followed by the next name
    if (idx > 0 && /,,,\s*[^,]/.test(line)) {
      const splitIdx = line.indexOf(',,,');
      if (splitIdx >= 0 && splitIdx < line.length - 3) {
        const head = line.slice(0, splitIdx + 3);
        const tail = line.slice(splitIdx + 3).trim();
        if (tail && /^[A-Za-z"(]/.test(tail)) {
          fixed.push(head);
          fixed.push(tail);
          continue;
        }
      }
    }
    fixed.push(line);
  }
  // Avoid splitting header if it contains trailing commas
  return fixed.join('\n');
}

const raw = parseCSVToObjects<Hospital>(preCleanCSV(HOSPITALS_CSV));

// Keep only entries with a name and either lat/lng for mapping or an address for potential future use.
export const hospitals: Hospital[] = raw
  .filter((h) => h.name)
  .map((h) => ({
    ...h,
    name: h.name.trim(),
    specialty: (h.specialty || '').trim(),
    address: (h.address || '').replace(/\s+/g, ' ').trim(),
    languages: (h.languages || '').replace(/\s*,\s*/g, ', '),
  lat: (h.lat || '').trim(),
  lng: (h.lng || '').trim(),
  phone: normalizePhone(h.phone),
  }))
  // For map pins we require valid numeric lat/lng
  .filter((h) => h.lat && h.lng && !isNaN(parseFloat(h.lat)) && !isNaN(parseFloat(h.lng)));

export default hospitals;

function normalizePhone(phone?: string): string | undefined {
  const raw = (phone || '').trim();
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }
  return raw;
}

import { parseCSV, parseCSVToObjects } from './csv';
import { DOCTORS_CSV } from './doctors_raw';

export type Doctor = {
  name: string;
  specialty: string;
  languages: string; // comma-separated
  address: string;
  lat: string;
  lng: string;
  zip?: string;
  phone?: string;
  uninsured?: string; // 'yes' | 'no'
};

// Parse and then repair at the row level: take last two as lat/lng, last three as languages, rest join as address
const rows = parseCSV(DOCTORS_CSV);
const header = rows[0] || [];
const dataRows = rows.slice(1);

const raw: Doctor[] = dataRows.map((r) => {
  // Ensure at least 6 columns; if more, reassemble address and pick last two as lat/lng
  if (!r || r.length < 6) {
    return {
      name: r?.[0] || '',
      specialty: r?.[1] || '',
      address: r?.[2] || '',
      languages: r?.[3] || '',
      lat: r?.[4] || '',
      lng: r?.[5] || '',
    } as Doctor;
  }
  const name = r[0];
  const specialty = r[1];
  const lat = r[r.length - 2];
  const lng = r[r.length - 1];
  const languages = r[r.length - 3];
  const addressParts = r.slice(2, r.length - 3);
  const address = addressParts.join(',');
  return { name, specialty, address, languages, lat, lng } as Doctor;
});

// Normalize and filter
export const doctors: Doctor[] = raw
  .filter((d) => d.name && d.address)
  .map((d) => ({
    ...d,
    name: d.name.trim(),
    specialty: d.specialty.trim(),
    languages: (d.languages || '').replace(/\s*,\s*/g, ', '),
    address: d.address.trim(),
    lat: String(d.lat).trim(),
    lng: String(d.lng).trim(),
  }));

export default doctors;

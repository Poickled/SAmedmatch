import { parseCSVToObjects } from './csv';
import { DOCTORS_CLEANED_CSV } from './doctors_cleaned_raw';

export type Doctor = {
  name: string;
  specialty: string; // comma-separated specific specialties
  gen?: string; // comma-separated general categories from 'gen'
  languages: string; // comma-separated
  address: string;
  lat: string;
  lng: string;
  zip?: string;
  phone?: string;
};

type CleanedDoctorRow = {
  name?: string;
  specialty?: string;
  address?: string;
  languages?: string;
  lat?: string;
  lng?: string;
  phone?: string;
  gen?: string;
};

function parseListString(listLike?: string): string[] {
  const text = (listLike || '').trim();
  if (!text) return [];
  // Normalize Python-like list strings to CSV: ['A', "B"] -> A,B
  const stripped = text
    .replace(/^\[/, '')
    .replace(/\]$/, '')
    .replace(/['"]/g, '');
  return stripped
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function rowsToDoctors(rawRows: CleanedDoctorRow[]): Doctor[] {
  return rawRows.map((r) => {
  const specialties = parseListString(r.specialty);
  const langs = parseListString(r.languages);
  const general = parseListString(r.gen);
    return {
      name: (r.name || '').trim(),
      specialty: specialties.join(', '),
      gen: general.join(', '),
      languages: langs.join(', '),
      address: (r.address || '').replace(/\s+/g, ' ').trim(),
      lat: String(r.lat || '').trim(),
      lng: String(r.lng || '').trim(),
      phone: (r.phone || '').trim() || undefined,
    } as Doctor;
  });
}

const rawRows = parseCSVToObjects<CleanedDoctorRow>(DOCTORS_CLEANED_CSV);
const raw: Doctor[] = rowsToDoctors(rawRows);

// Normalize and filter
export const doctors: Doctor[] = raw
  .filter((d) => d.name)
  .map((d) => ({
    ...d,
    name: d.name.trim(),
    specialty: (d.specialty || '').replace(/\s*,\s*/g, ', '),
    languages: (d.languages || '').replace(/\s*,\s*/g, ', '),
    address: (d.address || '').trim(),
    lat: String(d.lat).trim(),
    lng: String(d.lng).trim(),
  }));

export async function loadDoctors(): Promise<Doctor[]> {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data/doctors_cleaned.csv`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    const rows = parseCSVToObjects<CleanedDoctorRow>(text);
    const parsed = rowsToDoctors(rows)
      .filter((d) => d.name)
      .map((d) => ({
        ...d,
        name: d.name.trim(),
        specialty: (d.specialty || '').replace(/\s*,\s*/g, ', '),
        languages: (d.languages || '').replace(/\s*,\s*/g, ', '),
        address: (d.address || '').trim(),
        lat: String(d.lat).trim(),
        lng: String(d.lng).trim(),
      }));
    return parsed;
  } catch (e) {
    return doctors;
  }
}

export default doctors;

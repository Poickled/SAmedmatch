import { parseCSVToObjects } from './csv';
import { DOCTORS_CLEANED_CSV } from './doctors_cleaned_raw';

export type Doctor = {
  name: string;
  specialty: string; // specific specialties from 'specialty' column
  gen?: string; // general categories from 'gen' column
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

// For now, use empty data and let loadDoctors handle the loading
const raw: Doctor[] = [];

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
    console.log('Attempting to load doctors from CSV...');
    const response = await fetch(`/data/doctors_cleaned.csv`, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    console.log('CSV loaded, length:', text.length);
    console.log('First 500 chars:', text.substring(0, 500));
    
    const rows = parseCSVToObjects<CleanedDoctorRow>(text);
    console.log('Parsed rows:', rows.length);
    console.log('Sample row:', rows[0]);
    
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
    
    console.log('Final parsed doctors:', parsed.length);
    console.log('Sample doctor:', parsed[0]);
    return parsed;
  } catch (e) {
    console.error('Failed to load doctors from CSV:', e);
    console.log('Using fallback data, length:', doctors.length);
    return doctors;
  }
}

export default doctors;

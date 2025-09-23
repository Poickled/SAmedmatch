import { doctorsData, Doctor } from './doctorsData';

// Export the type
export type { Doctor };

// Use the direct data - no complex CSV parsing needed
export const doctors: Doctor[] = doctorsData
  .filter((d) => d.name && d.name.trim())
  .map((d) => ({
    ...d,
    name: d.name.trim(),
    specialty: (d.specialty || '').trim(),
    gen: (d.gen || '').trim(),
    languages: (d.languages || '').trim(),
    address: (d.address || '').trim(),
    lat: String(d.lat || '').trim(),
    lng: String(d.lng || '').trim(),
    phone: (d.phone || '').trim() || undefined,
  }));

// Simple async function that just returns the data
export async function loadDoctors(): Promise<Doctor[]> {
  console.log('Loading doctors data...');
  console.log('Total doctors:', doctors.length);
  console.log('Sample doctor:', doctors[0]);
  return doctors;
}

export default doctors;

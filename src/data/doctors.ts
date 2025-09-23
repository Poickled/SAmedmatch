import { comprehensiveDoctorsData, Doctor } from './comprehensiveDoctorsData';

// Export the type
export type { Doctor };

// Helper function to safely handle missing data
function safeString(value: any): string {
  if (!value || typeof value !== 'string') return '';
  return value.trim();
}

function safeArray(value: any): string {
  if (!value) return '';
  if (typeof value === 'string') {
    return value
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/['"]/g, '')
      .replace(/\s*,\s*/g, ', ')
      .trim();
  }
  return '';
}

// Use the comprehensive data with robust error handling
export const doctors: Doctor[] = comprehensiveDoctorsData
  .filter((d) => d.name && d.name.trim() && d.name.length > 3)
  .map((d) => ({
    name: safeString(d.name),
    specialty: safeArray(d.specialty),
    gen: safeArray(d.gen),
    languages: safeArray(d.languages),
    address: safeString(d.address),
    lat: safeString(d.lat),
    lng: safeString(d.lng),
    phone: safeString(d.phone) || undefined,
  }));

// Simple async function that just returns the data
export async function loadDoctors(): Promise<Doctor[]> {
  console.log('Loading comprehensive doctors data...');
  console.log('Total doctors:', doctors.length);
  console.log('Sample doctor:', doctors[0]);
  return doctors;
}

export default doctors;

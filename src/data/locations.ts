// Static locations (hospitals/clinics) migrated from CSV
export type Hospital = {
  name: string;
  specialty: string;
  address: string;
  lat: string;
  lng: string;
};

export const hospitals: Hospital[] = [
  { name: 'General Hospital', specialty: 'General Practice', address: '123 Main St', lat: '29.4241', lng: '-98.4936' },
  { name: 'City Clinic', specialty: 'Pediatrics', address: '456 Elm St', lat: '29.4251', lng: '-98.4946' },
  { name: 'Health Center', specialty: 'Cardiology', address: '789 Oak St', lat: '29.4261', lng: '-98.4956' },
  { name: 'Wellness Center', specialty: 'Dentistry', address: '321 Pine St', lat: '29.4271', lng: '-98.4966' },
  { name: 'Family Health', specialty: 'Family Medicine', address: '654 Maple St', lat: '29.4281', lng: '-98.4976' },
  { name: 'Community Care', specialty: 'Internal Medicine', address: '987 Cedar St', lat: '29.4291', lng: '-98.4986' },
  { name: 'Urgent Care', specialty: 'Emergency Medicine', address: '135 Birch St', lat: '29.4301', lng: '-98.4996' },
  { name: 'Specialty Clinic', specialty: 'Orthopedics', address: '246 Spruce St', lat: '29.4311', lng: '-98.5006' },
  { name: 'Rehab Center', specialty: 'Physical Therapy', address: '357 Willow St', lat: '29.4321', lng: '-98.5016' },
  { name: 'Mental Health Services', specialty: 'Psychiatry', address: '468 Ash St', lat: '29.4331', lng: '-98.5026' },
];

export default hospitals;

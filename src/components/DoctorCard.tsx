import React from 'react';


interface Doctor {
  name: string;
  specialty: string;
  languages?: string;
  address: string;
  lat: string;
  lng: string;
}

interface DoctorCardProps {
  doctor: Doctor;
  currentLang?: string;
  translations?: any;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, currentLang = 'en', translations }) => {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p><strong>{translations?.[currentLang]?.specialty || 'Specialty'}:</strong> {doctor.specialty}</p>
      {doctor.languages && <p><strong>{translations?.[currentLang]?.languages || 'Languages'}:</strong> {doctor.languages}</p>}
      <p><strong>{translations?.[currentLang]?.address || 'Address'}:</strong> {doctor.address}</p>
      {/* Optionally hide lat/lng for UI polish */}
    </div>
  );
};

export default DoctorCard;
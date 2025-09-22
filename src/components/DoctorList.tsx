import React from 'react';
import DoctorCard from './DoctorCard';

interface Doctor {
  name: string;
  specialty: string;
  languages: string;
  address: string;
  lat: string;
  lng: string;
}

interface DoctorListProps {
  doctors: Doctor[];
  currentLang?: string;
  translations?: any;
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors, currentLang = 'en', translations }) => {
  return (
    <div className="doctor-list">
      {doctors.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#555' }}>
          No doctors found.
        </div>
      ) : (
        doctors.map((doc, index: number) => (
          <DoctorCard key={index} doctor={doc} currentLang={currentLang} translations={translations} />
        ))
      )}
    </div>
  );
};

export default DoctorList;
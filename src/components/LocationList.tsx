import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import DoctorCard from './DoctorCard';

const LocationList = () => {
  const [locations, setLocations] = useState<any[]>([]);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = () => {
    Papa.parse('/data/locations.csv', {
      download: true,
      header: true,
      complete: (results: any) => {
        const filteredLocations = results.data.filter((loc: any) => loc.name && loc.specialty && loc.lat && loc.lng);
        setLocations(filteredLocations);
      },
      error: () => {
        alert('Error loading locations data');
      }
    });
  };

  return (
    <div>
      <h2>General Locations & Services</h2>
      <div className="doctor-list">
        {locations.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#555' }}>No locations found.</div>
        ) : (
          locations.map((loc: any) => (
            <DoctorCard key={loc.name} doctor={loc} />
          ))
        )}
      </div>
    </div>
  );
};

export default LocationList;
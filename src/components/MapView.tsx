import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Hospital {
  name: string;
  specialty: string;
  address: string;
  lat: string;
  lng: string;
  phone?: string;
}

interface Doctor {
  name: string;
  specialty: string;
  languages?: string;
  address: string;
  lat: string;
  lng: string;
}

interface MapViewProps {
  doctors: Doctor[];
  hospitals: Hospital[];
}

const MapView: React.FC<MapViewProps & { currentLang?: string; translations?: any }> = ({ doctors, hospitals, currentLang = 'en', translations }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const mapMarkers = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (mapRef.current) {
      // Clean up any previous map instance
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      mapInstance.current = L.map(mapRef.current).setView([29.4241, -98.4936], 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(mapInstance.current);
      // Ensure the map resizes correctly once mounted
      setTimeout(() => {
        mapInstance.current?.invalidateSize();
      }, 0);
      updateMapMarkers(doctors, hospitals);
    }
    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (mapInstance.current) {
      updateMapMarkers(doctors, hospitals);
    }
  }, [doctors, hospitals]);

  const updateMapMarkers = (doctors: Doctor[], hospitals: Hospital[]) => {
    mapMarkers.current.forEach(marker => mapInstance.current?.removeLayer(marker));
    mapMarkers.current = [];

    // Add doctor pins
    doctors.forEach(doc => {
      const lat = parseFloat(doc.lat);
      const lng = parseFloat(doc.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: 'marker-emoji doctor-marker',
            html: '<div>👩‍⚕️</div>',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          }),
        }).addTo(mapInstance.current);
        marker.bindPopup(`
          <b>${translations?.[currentLang]?.popupDoctor || 'Doctor'}: ${doc.name}</b><br>
          ${translations?.[currentLang]?.specialty || 'Specialty'}: ${doc.specialty}<br>
          ${doc.languages ? `${translations?.[currentLang]?.languages || 'Languages'}: ${doc.languages}<br>` : ''}
          ${translations?.[currentLang]?.address || 'Address'}: ${doc.address}
        `);
        mapMarkers.current.push(marker);
      }
    });

    // Add hospital pins
    hospitals.forEach(hospital => {
      const lat = parseFloat(hospital.lat);
      const lng = parseFloat(hospital.lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: 'marker-emoji hospital-marker',
            html: '<div>🏥</div>',
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          }),
        }).addTo(mapInstance.current);
        marker.bindPopup(`
          <b>${translations?.[currentLang]?.popupHospital || 'Hospital'}: ${hospital.name}</b><br>
          ${translations?.[currentLang]?.hospitalSpecialty || 'Hospital Specialty'}: ${hospital.specialty}<br>
      ${translations?.[currentLang]?.hospitalAddress || 'Hospital Address'}: ${hospital.address}<br>
      ${hospital.phone ? `${translations?.[currentLang]?.hospitalPhone || 'Hospital Phone'}: ${hospital.phone}` : ''}
        `);
        mapMarkers.current.push(marker);
      }
    });

    if (mapMarkers.current.length > 0 && mapInstance.current) {
      mapInstance.current.fitBounds(L.featureGroup(mapMarkers.current).getBounds().pad(0.1));
    }
  };

  return <div id="map" ref={mapRef} style={{ height: '500px', borderRadius: '12px', marginTop: '1rem' }} />;
};

export default MapView;
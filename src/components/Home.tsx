import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import DoctorList from './DoctorList';
import MapView from './MapView';
import ViewToggle from './ViewToggle';
import doctorsData, { loadDoctors } from '../data/doctors';
import hospitalsData from '../data/hospitals';

interface HomeProps {
  currentLang: string;
  translations: any;
}

const Home: React.FC<HomeProps> = ({ currentLang, translations }) => {
  const [allDoctors, setAllDoctors] = useState<any[]>([]);
  const [currentDoctors, setCurrentDoctors] = useState<any[]>([]);
  const [currentHospitals, setCurrentHospitals] = useState<any[]>([]);
  const [currentView, setCurrentView] = useState<string>('list');
  const [specialties, setSpecialties] = useState<string[]>([]);
  const [generalCategories, setGeneralCategories] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      // Prefer runtime-loaded CSV from public/ if available; fallback to bundled
      const docs = await loadDoctors().catch(() => doctorsData);
      const doctors = (docs || []).filter((d: any) => d.name);
      const hospitals = hospitalsData.filter((h: any) => h.name && h.lat && h.lng);
      
      console.log('Loaded doctors:', doctors.length);
      
      setAllDoctors(doctors);
      setCurrentDoctors(doctors);
      setCurrentHospitals(hospitals);

      const specialtySet = new Set<string>();
      const genSet = new Set<string>();
      const languageSet = new Set<string>();
      doctors.forEach((doc: any) => {
        if (doc.specialty) doc.specialty.split(',').forEach((s: string) => specialtySet.add(s.trim()));
        if (doc.gen) doc.gen.split(',').forEach((g: string) => genSet.add(g.trim()));
        if (doc.languages) doc.languages.split(',').forEach((l: string) => languageSet.add(l.trim()));
      });
      
      const specialtiesArray = Array.from(specialtySet).sort();
      const generalArray = Array.from(genSet).sort();
      const languagesArray = Array.from(languageSet).sort();
      
      console.log('Data processed - Specialties:', specialtiesArray.length, 'General:', generalArray.length, 'Languages:', languagesArray.length);
      
      setSpecialties(specialtiesArray);
      setGeneralCategories(generalArray);
      setLanguages(languagesArray);
    };
    init();
  }, []);

  const filterDoctors = (criteria: any) => {
    // Base filtering by multi-select specialties and languages
    let filteredDoctors = allDoctors.filter((doc) => {
      let match = true;
      
      // filter by general categories (from 'gen' column) - for map view
      if (Array.isArray(criteria.general) && criteria.general.length > 0) {
        const docGen = (doc.gen || '').split(',').map((s: string) => s.trim());
        const hasAny = criteria.general.some((s: string) => docGen.includes(s));
        if (!hasAny) match = false;
      }
      
      // filter by specific specialties (from 'specialty' column) - for list view
      if (Array.isArray(criteria.specialties) && criteria.specialties.length > 0) {
        const docSpecialties = (doc.specialty || '').split(',').map((s: string) => s.trim());
        const hasAny = criteria.specialties.some((s: string) => docSpecialties.includes(s));
        if (!hasAny) match = false;
      }
      
      // filter by languages
      if (Array.isArray(criteria.languages) && criteria.languages.length > 0) {
        const docLangs = (doc.languages || '').split(',').map((l: string) => l.trim());
        const hasAny = criteria.languages.some((l: string) => docLangs.includes(l));
        if (!hasAny) match = false;
      }
      
      return match;
    });

    // If a ZIP is provided, compute distances and sort by distance
    const zipStr = (criteria.zipcode ? String(criteria.zipcode).trim() : '');
    if (zipStr) {
      const zipCoord = getZipCentroid(zipStr, allDoctors);
      if (zipCoord) {
        filteredDoctors = filteredDoctors.map((d: any) => ({
          ...d,
          distanceMiles: (!isNaN(parseFloat(d.lat)) && !isNaN(parseFloat(d.lng)))
            ? haversineMiles(zipCoord.lat, zipCoord.lng, parseFloat(d.lat), parseFloat(d.lng))
            : undefined,
        }))
        .sort((a: any, b: any) => {
          const ad = a.distanceMiles ?? Number.POSITIVE_INFINITY;
          const bd = b.distanceMiles ?? Number.POSITIVE_INFINITY;
          return ad - bd;
        });
      }
    }

    setCurrentDoctors(filteredDoctors);
  };

  // Compute a rough centroid for a ZIP using doctors with coordinates in that ZIP
  function getZipCentroid(zip: string, doctors: any[]): { lat: number; lng: number } | null {
    const reZip = new RegExp(`\\b${zip}\\b`);
    let latSum = 0, lngSum = 0, count = 0;
    for (const d of doctors) {
      const lat = parseFloat(String(d.lat ?? ''));
      const lng = parseFloat(String(d.lng ?? ''));
      const docZip = d.zip ? String(d.zip) : (d.address ? (d.address.match(/\\b\\d{5}\\b/)?.[0] ?? '') : '');
      if (!isNaN(lat) && !isNaN(lng) && docZip && reZip.test(docZip)) {
        latSum += lat; lngSum += lng; count++;
      }
    }
    if (count > 0) return { lat: latSum / count, lng: lngSum / count };
    return null;
  }

  function haversineMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3958.8; // miles
    const toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round((R * c) * 10) / 10; // 0.1 mi precision
  }

  return (
    <div className="container">
      <SearchBar
        onSearch={filterDoctors}
        generalCategories={generalCategories}
        specialties={specialties}
        languages={languages}
        currentLang={currentLang}
        translations={translations}
      />
      <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
      {currentView === 'list' ? (
        <DoctorList doctors={currentDoctors} currentLang={currentLang} translations={translations} />
      ) : (
        <MapView
          doctors={currentDoctors.filter((d) => !isNaN(parseFloat(String(d.lat))) && !isNaN(parseFloat(String(d.lng))))}
          hospitals={currentHospitals}
          currentLang={currentLang}
          translations={translations}
        />
      )}
    </div>
  );
};

export default Home;

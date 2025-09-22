import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (criteria: any) => void;
  specialties: string[];
  languages: string[];
  currentLang: string;
  translations: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, specialties, languages, currentLang, translations }) => {
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [language, setLanguage] = useState('');
  const [zipcode, setZipcode] = useState('');

  const handleSearch = () => {
    onSearch({ search, specialty, language, zipcode });
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={translations[currentLang]?.searchDoctor || 'Search Doctor'}
      />
      <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
        <option value="">{translations[currentLang]?.allSpecialties || 'All Specialties'}</option>
        {specialties.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">{translations[currentLang]?.allLanguages || 'All Languages'}</option>
        {languages.map(l => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
      <input
        type="text"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        placeholder={translations[currentLang]?.searchZip || 'Enter ZIP code'}
      />
  <button onClick={handleSearch}>{translations[currentLang]?.searchBtn || 'Search'}</button>
    </div>
  );
};

export default SearchBar;
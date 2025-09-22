import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (criteria: any) => void;
  specialties: string[];
  languages: string[];
  currentLang: string;
  translations: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, specialties, languages, currentLang, translations }) => {
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [zipcode, setZipcode] = useState('');

  const handleSearch = () => {
    onSearch({ specialties: selectedSpecialties, languages: selectedLanguages, zipcode });
  };

  return (
    <div className="search-bar">
      {/* Specialty multi-select as checkbox dropdown (simple inline for now) */}
      <div className="multi-select">
        <div style={{ fontWeight: 600 }}>{translations[currentLang]?.specialties || 'Specialties'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.25rem', maxHeight: 160, overflow: 'auto', background: 'white', padding: '0.5rem', borderRadius: 8 }}>
          {specialties.map(s => {
            const checked = selectedSpecialties.includes(s);
            return (
              <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    setSelectedSpecialties((prev) => e.target.checked ? [...prev, s] : prev.filter(x => x !== s));
                  }}
                />
                {s}
              </label>
            );
          })}
        </div>
      </div>

      {/* Languages multi-select checkbox */}
      <div className="multi-select">
        <div style={{ fontWeight: 600 }}>{translations[currentLang]?.languages || 'Languages'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.25rem', maxHeight: 160, overflow: 'auto', background: 'white', padding: '0.5rem', borderRadius: 8 }}>
          {languages.map(l => {
            const checked = selectedLanguages.includes(l);
            return (
              <label key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    setSelectedLanguages((prev) => e.target.checked ? [...prev, l] : prev.filter(x => x !== l));
                  }}
                />
                {l}
              </label>
            );
          })}
        </div>
      </div>
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
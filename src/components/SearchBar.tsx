import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (criteria: any) => void;
  generalCategories: string[];
  languages: string[];
  currentLang: string;
  translations: any;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, generalCategories, languages, currentLang, translations }) => {
  const [isGenOpen, setIsGenOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedGeneral, setSelectedGeneral] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [zipcode, setZipcode] = useState('');

  const handleSearch = () => {
    onSearch({ general: selectedGeneral, languages: selectedLanguages, zipcode });
  };

  return (
    <div className="search-bar">
      {/* General categories dropdown (from 'gen' column) */}
      <div style={{ position: 'relative' }}>
        <button type="button" onClick={() => setIsGenOpen(v => !v)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8 }}>
          {translations[currentLang]?.specialties || 'Specialties'} ({selectedGeneral.length})
        </button>
        {isGenOpen && (
          <div style={{ position: 'absolute', zIndex: 10, background: 'white', padding: '0.5rem', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: 280, maxHeight: 260, overflow: 'auto' }}>
            {generalCategories.map((s) => {
              const checked = selectedGeneral.includes(s);
              return (
                <label key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', padding: '0.25rem 0' }}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => {
                      setSelectedGeneral((prev) => e.target.checked ? [...prev, s] : prev.filter(x => x !== s));
                    }}
                  />
                  {s}
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Languages dropdown */}
      <div style={{ position: 'relative' }}>
        <button type="button" onClick={() => setIsLangOpen(v => !v)} style={{ padding: '0.5rem 0.75rem', borderRadius: 8 }}>
          {translations[currentLang]?.languages || 'Languages'} ({selectedLanguages.length})
        </button>
        {isLangOpen && (
          <div style={{ position: 'absolute', zIndex: 10, background: 'white', padding: '0.5rem', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: 280, maxHeight: 260, overflow: 'auto' }}>
            {languages.map((l) => {
              const checked = selectedLanguages.includes(l);
              return (
                <label key={l} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', padding: '0.25rem 0' }}>
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
        )}
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
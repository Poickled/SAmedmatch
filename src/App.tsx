import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import translationsData from './translations';

const App: React.FC = () => {
  const [translations] = useState<any>(translationsData);
  const [currentLang, setCurrentLang] = useState<string>('en');

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Header
          title={translations[currentLang]?.title || 'SA MedMatch'}
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
        <Routes>
          <Route
            path="/"
            element={<Home currentLang={currentLang} translations={translations} />}
          />
          <Route
            path="/about"
            element={<AboutUs currentLang={currentLang} translations={translations} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
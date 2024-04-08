// src/components/ThemeRouteer.js
import React, { useState, useEffect } from 'react';
import {SunIcon} from '@heroicons/react/24/outline';
import {MoonIcon} from '@heroicons/react/24/outline';

const ThemeRouteer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className=" h-[48px] w-16 items-center gap-2 rounded-md"

    >
      {darkMode ? <SunIcon className="w-6"/>  : <MoonIcon className="w-6" />}
                  <div className="hidden md:block">Theme</div>

    </button>
  );
};

export default ThemeRouteer;
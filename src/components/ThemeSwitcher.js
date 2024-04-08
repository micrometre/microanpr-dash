// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import {SunIcon} from '@heroicons/react/24/outline';
import {MoonIcon} from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
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
      className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-sky-500   p-3 text-white text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      {darkMode ? <SunIcon className="w-6"/>  : <MoonIcon className="w-6" />}
                  <div className="hidden md:block">Theme</div>

    </button>
  );
};

export default ThemeSwitcher;
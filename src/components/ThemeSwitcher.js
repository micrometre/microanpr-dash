// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import { PowerIcon } from '@heroicons/react/24/outline';

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
      className="px-4 py-2 rounded-md bg-gray-800 text-white"
    >
      {darkMode ? 'Light Mode' :<PowerIcon className="w-6" />}
    </button>
  );
};

export default ThemeSwitcher;
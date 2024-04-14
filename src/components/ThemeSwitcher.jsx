// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';

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
    className={`rounded-full font-medium text-neutral-600 dark:text-neutral-900"
    ${
      darkMode ? 'bg-neutral-900' : 'bg-gray-100'
    } ${
      darkMode ? 'text-gray-100' : 'text-white'
    } transition-colors duration-200`}
  >
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
  );
};

export default ThemeSwitcher;
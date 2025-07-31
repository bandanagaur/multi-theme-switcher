import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as any);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center px-4 h-16 z-50">
      <div className="font-bold text-lg">Multi-Theme App</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <select value={theme} onChange={handleThemeChange} className="ml-4 p-1 border rounded">
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
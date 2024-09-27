import { YegoDesktopIcon, YegoMobileIcon } from '../../assets/icons';
import Chip from '../Chip/Chip';
import { HamburguerMenuIcon } from '../../assets/icons';
import Input from '../Input/Input';
import { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="absolute top-6 left-6 right-6 h-14 md:h-16 pl-2 flex items-center justify-between bg-white rounded-full shadow z-10">
      <div className="flex items-center md:gap-4">
        <div>
          <YegoMobileIcon className="block md:hidden" />
          <YegoDesktopIcon className="hidden md:block" />
        </div>
        <div className="hidden md:flex ml-10 space-x-3">
          <Chip label="Map" variant="primary" />
          <Chip label="Settings" />
        </div>
        <div className='text-center'>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or plate..."
          />
        </div>
      </div>

      <div className="relative" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 ml-1 h-10 p-0.5 rounded-full focus:outline-none"
        >
          <HamburguerMenuIcon className="w-6 h-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-30 bg-white rounded-lg shadow-lg z-20">
            <div className="flex flex-col space-y-2 p-2 justify-center">
              <Chip label="Map" variant="primary" />
              <Chip label="Settings" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

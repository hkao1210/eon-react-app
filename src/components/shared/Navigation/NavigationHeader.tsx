import React from 'react';
import dogImage from '../dog.jpg'; 
import Image from 'next/image';
import Search from './Navbar/Search';
interface NavLink {
  label: string;
  href: string;
}

const navigationLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Upload', href: '/upload' },
];

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 h-20 text-white">
      <div className="flex items-center">
        <Image src={dogImage} alt="Bruh" className="h-8 w-8 mr-4"/>
        <span className="text-xl font-bold text-red-600">YouFlix</span>
      </div>
      <div className="flex items-center space-x-4">
        {navigationLinks.map((navLink) => (
          <a
            key={navLink.label}
            href={navLink.href}
            className="px-3 py-2 rounded-md hover:bg-gray-900"
          >
            {navLink.label}
            
          </a>
        ))}
        <Search/>
     
        <div className = "h-7 w-7 md:h-10 md:w-10 overflow">
            <Image src={dogImage} alt="Bruh" className="rounded-full"/>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
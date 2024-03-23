"use client";
import Image from 'next/image';
import dogImage from '../dog.jpg'; 

import React from 'react'
interface NavLink {
    label: string;
    href: string;
  }
  
  const navigationLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Trending', href: '/trending' },
    { label: 'Your Videos', href: '/your-videos' },
  ];
const NavigationHeader = () => {
    return (
        <>
            <div className="flex items-center">
                 <Image src={dogImage} alt="Bruh" className="h-8 w-8 mr-4" /> 
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
                <input type="text" className="px-3 py-2 rounded-md bg-gray-900 text-white" placeholder="Search" />
            </div>
        </>
    )
}

export default NavigationHeader
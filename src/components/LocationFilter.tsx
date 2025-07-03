"use client";

import { useState } from "react";

interface LocationFilterProps {
  locations: string[];
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export default function LocationFilter({ locations, selectedLocation, onLocationChange }: LocationFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLocationSelect = (location: string) => {
    onLocationChange(location);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full md:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 text-left flex items-center justify-between min-w-48 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {selectedLocation === "All" ? "All Locations" : selectedLocation}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:left-auto md:right-auto md:w-48 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          <div className="py-1">
            <button
              onClick={() => handleLocationSelect("All")}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                selectedLocation === "All" ? "bg-blue-50 text-blue-600" : "text-gray-700"
              }`}
            >
              All Locations
            </button>
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationSelect(location)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
                  selectedLocation === location ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
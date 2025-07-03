"use client";

/**
 * HeroSection Component
 * ---------------------
 * Displays the featured event listing section with location-based filtering.
 * 
 * @component
 * @file HeroSection.tsx
 * @author Aditya Srivastava
 * @description A responsive and modern hero section that lists filtered events as cards.
 *              It includes a title, description, location filter, event card grid,
 *              and a fallback when no events are found.
 * 
 * @created July 3, 2025
 * @lastModified July 3, 2025
 */

import React, { useState } from 'react';
import { eventsData, getUniqueLocations, filterEventsByLocation } from "@/lib/events-data";
import LocationFilter from "@/components/LocationFilter";
import HeroSectionEventCard from '@/utils/HeroSectionEventCard';
import NoEventsFound from '@/utils/NoEventsFound';

const HeroTitle = "🌍 Featured Events & Communities";
const HeroDescription = "Discover and connect with events and communities around the world. Join us to explore, learn, and grow together.";

const HeroSection = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const locations = getUniqueLocations();
  const filteredEvents = filterEventsByLocation(selectedLocation);

  return (
    <main>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{HeroTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{HeroDescription}</p>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="text-gray-600 text-sm sm:text-base">
              Showing <span className="font-semibold">{filteredEvents.length}</span> of <span className="font-semibold">{eventsData.length}</span> events
              {selectedLocation !== "All" && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedLocation}
                </span>
              )}
            </div>
            <LocationFilter
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
            />
          </div>

          {filteredEvents.length > 0 ? (
            <HeroSectionEventCard events={filteredEvents} />
          ) : (
            <NoEventsFound />
          )}
        </div>
      </section>
    </main>
  );
};

export default HeroSection;

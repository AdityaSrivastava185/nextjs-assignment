"use client"

import EventCard from '@/components/EventCard'
import { filterEventsByLocation, getUniqueLocations } from '@/lib/events-data';
import React, { useState } from 'react'

const HeroSectionEventCard = () => {
     const [selectedLocation, setSelectedLocation] = useState("All");
    const filteredEvents = filterEventsByLocation(selectedLocation);
    const locations = getUniqueLocations();
    return (
        <div>
            <div id="events" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                    <div
                        key={event.id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
                    >
                        <EventCard event={event} />
                        <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition">
                            Subscribe
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HeroSectionEventCard

"use client"

import { filterEventsByLocation, getUniqueLocations } from '@/lib/events-data';
import React, { useState } from 'react'

const NoEventsFound = () => {
     const [selectedLocation, setSelectedLocation] = useState("All");
        const locations = getUniqueLocations();
        const filteredEvents = filterEventsByLocation(selectedLocation);
    return (
        <div>
            {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
                    <p className="text-gray-600">Try selecting a different location or check back later for new events.</p>
                </div>
            )}
        </div>
    )
}

export default NoEventsFound

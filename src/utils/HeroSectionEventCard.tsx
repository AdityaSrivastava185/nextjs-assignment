"use client";

import React from 'react';
import Head from 'next/head';
import EventCard from '@/components/EventCard';
import { Event } from '@/types/events';

/**
 * Renders filtered event cards passed via props
 * @param {Array} events - filtered list of events
 */

type eventProps = {
  events: Event[];
}
const HeroSectionEventCard = ({ events } : eventProps) => {
  return (
    <>
      <Head>
        <title>Events | Hero Section</title>
        <meta name="description" content="Explore upcoming events and subscribe to stay updated." />
      </Head>

      <div id="events" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300"
          >
            <EventCard event={event} />
            <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSectionEventCard;

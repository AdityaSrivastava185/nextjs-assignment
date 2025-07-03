import { notFound } from "next/navigation";
import Link from "next/link";
import { getEventById, eventsData } from "@/lib/events-data";
import { Metadata } from "next";

interface EventDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const event = getEventById(params.id);
  
  if (!event) {
    return {
      title: "Event Not Found",
      description: "The requested event could not be found.",
    };
  }

  return {
    title: `${event.title} - Events Explorer`,
    description: event.description,
    keywords: [event.category, event.location, "events", "tickets"],
    openGraph: {
      title: event.title,
      description: event.description,
      images: [event.imageUrl],
    },
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = getEventById(params.id);

  if (!event) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
              </svg>
              <h1 className="text-xl font-bold text-gray-900">Events Explorer</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Back to Events</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Events
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {event.category}
              </div>
              <div className="absolute top-6 right-6 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full text-lg font-bold text-gray-800">
                {event.price}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h1>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={event.date}>{formatDate(event.date)}</time>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{event.organizer}</span>
                  </div>
                </div>
              </header>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{event.fullDescription}</p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <section className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Date:</dt>
                      <dd className="text-gray-900 font-medium">{formatDate(event.date)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Location:</dt>
                      <dd className="text-gray-900 font-medium">{event.location}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category:</dt>
                      <dd className="text-gray-900 font-medium">{event.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Organizer:</dt>
                      <dd className="text-gray-900 font-medium">{event.organizer}</dd>
                    </div>
                  </dl>
                </section>

                <section className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Info</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Price:</dt>
                      <dd className="text-gray-900 font-medium text-lg">{event.price}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Capacity:</dt>
                      <dd className="text-gray-900 font-medium">{event.capacity} people</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Registered:</dt>
                      <dd className="text-gray-900 font-medium">{event.registeredCount} people</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Available:</dt>
                      <dd className="text-gray-900 font-medium">{event.capacity - event.registeredCount} spots</dd>
                    </div>
                  </dl>
                </section>
              </div>

              <div className="border-t pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Registration closes 24 hours before the event</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium">
                      Register Now
                    </button>
                    <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium">
                      Save Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
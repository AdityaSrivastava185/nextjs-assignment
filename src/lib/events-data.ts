export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  price: string;
  organizer: string;
  capacity: number;
  registeredCount: number;
}

export const eventsData: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Summit 2025",
    date: "2025-03-15",
    location: "San Francisco",
    description: "Join industry leaders for cutting-edge tech discussions and networking opportunities.",
    fullDescription: "The Tech Innovation Summit 2025 brings together the brightest minds in technology for a full day of inspiring talks, hands-on workshops, and valuable networking. Discover the latest trends in AI, blockchain, cybersecurity, and emerging technologies. This event features keynote speakers from leading tech companies, interactive sessions, and exclusive access to startup showcases. Whether you're a developer, entrepreneur, or tech enthusiast, this summit offers invaluable insights into the future of technology.",
    imageUrl: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology",
    price: "$299",
    organizer: "TechEvents Inc.",
    capacity: 500,
    registeredCount: 342
  },
  {
    id: "2",
    title: "Digital Marketing Masterclass",
    date: "2025-02-28",
    location: "New York",
    description: "Learn advanced digital marketing strategies from industry experts and grow your business.",
    fullDescription: "Transform your digital marketing approach with this comprehensive masterclass. Dive deep into SEO, social media marketing, content strategy, email marketing, and paid advertising. Our expert instructors will guide you through real-world case studies, practical exercises, and actionable strategies you can implement immediately. Perfect for marketers, business owners, and anyone looking to enhance their digital presence and drive meaningful results.",
    imageUrl: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Marketing",
    price: "$199",
    organizer: "Digital Growth Academy",
    capacity: 300,
    registeredCount: 245
  },
  {
    id: "3",
    title: "Sustainable Living Expo",
    date: "2025-04-20",
    location: "Portland",
    description: "Explore eco-friendly products, sustainable practices, and green living solutions.",
    fullDescription: "Join us for the largest sustainable living expo on the West Coast! Discover innovative eco-friendly products, meet local sustainable businesses, and learn practical tips for reducing your environmental footprint. The expo features interactive workshops on composting, renewable energy, sustainable fashion, and zero-waste living. Connect with like-minded individuals and organizations committed to creating a more sustainable future for our planet.",
    imageUrl: "https://images.pexels.com/photos/9324359/pexels-photo-9324359.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Environment",
    price: "Free",
    organizer: "Green Future Foundation",
    capacity: 1000,
    registeredCount: 756
  },
  {
    id: "4",
    title: "Creative Photography Workshop",
    date: "2025-03-08",
    location: "Los Angeles",
    description: "Master the art of photography with hands-on workshops and expert guidance.",
    fullDescription: "Elevate your photography skills with this intensive workshop led by award-winning photographers. Learn composition techniques, lighting mastery, post-processing workflows, and creative storytelling through images. The workshop covers both digital and film photography, with practical shooting sessions in diverse locations around LA. Suitable for beginners and intermediate photographers looking to take their craft to the next level.",
    imageUrl: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Arts",
    price: "$149",
    organizer: "Creative Vision Studio",
    capacity: 50,
    registeredCount: 38
  },
  {
    id: "5",
    title: "Startup Pitch Competition",
    date: "2025-05-12",
    location: "Austin",
    description: "Watch innovative startups pitch their ideas to investors and industry leaders.",
    fullDescription: "Witness the future of entrepreneurship at our annual startup pitch competition! Twenty carefully selected startups will present their innovative solutions to a panel of experienced investors, successful entrepreneurs, and industry experts. The event includes networking sessions, mentor meetups, and workshops on fundraising, product development, and scaling businesses. Whether you're an entrepreneur, investor, or startup enthusiast, this event offers incredible insights into the startup ecosystem.",
    imageUrl: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Business",
    price: "$99",
    organizer: "Startup Texas",
    capacity: 400,
    registeredCount: 289
  },
  {
    id: "6",
    title: "Wellness & Mindfulness Retreat",
    date: "2025-04-05",
    location: "Denver",
    description: "Reconnect with yourself through meditation, yoga, and wellness practices.",
    fullDescription: "Escape the hustle and bustle of daily life with our transformative wellness retreat. This weekend event combines meditation sessions, yoga classes, nutritional workshops, and mindfulness practices designed to restore balance and inner peace. Led by certified wellness coaches and mindfulness experts, the retreat offers a supportive environment for personal growth and self-discovery. Includes healthy meals, relaxation sessions, and take-home wellness resources.",
    imageUrl: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Wellness",
    price: "$249",
    organizer: "Mountain Wellness Center",
    capacity: 100,
    registeredCount: 67
  },
  {
    id: "7",
    title: "Food & Wine Festival",
    date: "2025-06-18",
    location: "Chicago",
    description: "Savor culinary delights from renowned chefs and sample premium wines.",
    fullDescription: "Indulge in a gastronomic journey at Chicago's premier food and wine festival! Experience tastings from award-winning restaurants, cooking demonstrations by celebrity chefs, and wine pairings curated by master sommeliers. The festival features live music, artisan food vendors, and interactive culinary workshops. Perfect for food enthusiasts, wine lovers, and anyone looking to explore the vibrant culinary scene of Chicago.",
    imageUrl: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Food",
    price: "$179",
    organizer: "Culinary Chicago",
    capacity: 800,
    registeredCount: 623
  },
  {
    id: "8",
    title: "AI & Machine Learning Conference",
    date: "2025-05-30",
    location: "Seattle",
    description: "Explore the latest developments in artificial intelligence and machine learning.",
    fullDescription: "Join the leading AI and machine learning conference on the West Coast! This two-day event features cutting-edge research presentations, hands-on workshops, and networking opportunities with AI researchers, data scientists, and industry practitioners. Topics include deep learning, natural language processing, computer vision, and ethical AI. The conference includes tutorial sessions for beginners and advanced technical talks for experienced practitioners.",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Technology",
    price: "$399",
    organizer: "AI Research Institute",
    capacity: 600,
    registeredCount: 445
  },
  {
    id: "9",
    title: "Music Production Workshop",
    date: "2025-03-25",
    location: "Nashville",
    description: "Learn music production techniques from Grammy-winning producers and sound engineers.",
    fullDescription: "Dive deep into the world of music production with this comprehensive workshop in Music City! Learn from Grammy-winning producers and sound engineers who have worked with top artists. The workshop covers recording techniques, mixing and mastering, music theory for producers, and the business side of music production. Hands-on sessions in professional recording studios, one-on-one mentoring, and networking opportunities with industry professionals.",
    imageUrl: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Music",
    price: "$349",
    organizer: "Nashville Music Academy",
    capacity: 75,
    registeredCount: 58
  },
  {
    id: "10",
    title: "Blockchain & Cryptocurrency Summit",
    date: "2025-07-10",
    location: "Miami",
    description: "Understand the future of finance with blockchain technology and digital currencies.",
    fullDescription: "Explore the revolutionary world of blockchain and cryptocurrency at this comprehensive summit! Industry leaders, developers, and financial experts will share insights on blockchain applications, cryptocurrency trading, DeFi protocols, and regulatory developments. The summit features panel discussions, technical workshops, and networking sessions with blockchain entrepreneurs and investors. Perfect for those looking to understand or enter the rapidly evolving world of digital finance.",
    imageUrl: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Finance",
    price: "$449",
    organizer: "Crypto Innovation Hub",
    capacity: 750,
    registeredCount: 521
  }
];

export const getEventById = (id: string): Event | undefined => {
  return eventsData.find(event => event.id === id);
};

export const getUniqueLocations = (): string[] => {
  const locations = eventsData.map(event => event.location);
  return [...new Set(locations)].sort();
};

export const filterEventsByLocation = (location: string): Event[] => {
  if (location === "All") return eventsData;
  return eventsData.filter(event => event.location === location);
};
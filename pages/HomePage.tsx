import React from 'react';
import { Hostel } from '../types';
import { HostelCard } from '../components/HostelCard';

interface HomePageProps {
  hostels: Hostel[];
}

export const HomePage = ({ hostels }: HomePageProps) => (
  <div className="home-container">
    <main className="home-main-content">
      <section className="hostel-list" aria-label="Available Hostels">
        {hostels.map(hostel => (
          <HostelCard key={hostel.id} hostel={hostel} />
        ))}
      </section>
    </main>
    <aside className="website-info" role="complementary">
      <h3>Welcome to HostelHaven!</h3>
      <p>
        Your sanctuary on the road less traveled. We believe that travel is more than just seeing new places; it's about connecting with the world and the people in it. It's about the stories you gather, the friendships you forge, and the moments that expand your perspective. Our mission was born from a simple idea: to create a platform that makes these transformative experiences accessible, safe, and profoundly memorable for every adventurer, from the seasoned globetrotter to the curious first-timer stepping out into the world.
      </p>
      <p>
        HostelHaven isn't just a booking site; it's a community. We've handpicked a diverse collection of hostels that are more than just a place to sleep. They are vibrant hubs of culture, creativity, and connection. Each hostel on our platform has a unique soul, whether it's a cozy, rustic lodge nestled in the mountains, a chic urban oasis in the heart of a bustling metropolis, or a serene seaside shack where the sound of the waves is your morning alarm. We look for places with character, heart, and a genuine passion for hospitality—places where you arrive as a guest and leave as part of the family.
      </p>
      <p>
        We understand the modern traveler. You seek authenticity, value, and convenience. That's why we've designed HostelHaven to be as intuitive and user-friendly as possible. Our detailed listings provide you with everything you need to know: honest reviews from fellow travelers, crystal-clear pricing, comprehensive amenity lists, and stunning photo galleries that give you a true sense of place. You can filter by vibe, location, price, or specific needs, ensuring you find the perfect match for your travel style. Booking is secure, straightforward, and just a few clicks away, so you can spend less time planning and more time experiencing.
      </p>
       <p>
        But our vision extends beyond simple transactions. We are committed to fostering a sustainable and responsible travel culture. We champion hostels that prioritize eco-friendly practices, support their local communities, and create a safe and inclusive environment for everyone. By choosing HostelHaven, you are not just booking a bed; you are supporting a network of small businesses and contributing to a more conscious way of exploring our beautiful planet.
      </p>
      <p>
        So, where will your next story begin? Your adventure is waiting just beyond the horizon. Browse our havens, find your perfect spot, and let us be the starting point for your next unforgettable journey. Welcome to the community. Welcome to HostelHaven.
      </p>
    </aside>
  </div>
);

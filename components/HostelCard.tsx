import React from 'react';
import { Hostel } from '../types';

interface HostelCardProps {
    hostel: Hostel;
}

export const HostelCard = ({ hostel }: HostelCardProps) => {
    const handleBooking = () => {
        alert(`Booking confirmed for ${hostel.name}! (This is a demo)`);
    };

    return (
        <article className="hostel-card" aria-labelledby={`hostel-title-${hostel.id}`}>
            <img src={hostel.imageUrl} alt={`Exterior of ${hostel.name}`} className="card-image" />
            <div className="card-content">
                <div>
                    <h3 id={`hostel-title-${hostel.id}`} className="card-title">{hostel.name}</h3>
                    <p className="card-location">📍 {hostel.city}</p>
                    <div className="card-info">
                        <span>⭐ {hostel.rating}/5</span>
                        <span>🛏️ {hostel.bedsAvailable} Beds</span>
                    </div>
                </div>
                <div className="card-footer">
                     <p className="card-price">
                        <strong>${hostel.price}</strong> / night
                    </p>
                    <button onClick={handleBooking} className="card-button">Book Now</button>
                </div>
            </div>
        </article>
    );
};

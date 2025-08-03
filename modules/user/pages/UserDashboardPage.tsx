import React, { useState, useMemo } from 'react';
import { Hostel } from '../../../types';
import { HostelCard } from '../../../components/HostelCard';

interface UserDashboardPageProps {
  hostels: Hostel[];
}

export const UserDashboardPage = ({ hostels }: UserDashboardPageProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('all');
    
    const maxPrice = useMemo(() => Math.max(...hostels.map(h => h.price), 100), [hostels]);
    const [priceRange, setPriceRange] = useState(maxPrice);

    const availableCities = useMemo(() => {
        const cities = new Set(hostels.map(h => h.city));
        return ['all', ...Array.from(cities)];
    }, [hostels]);

    const filteredHostels = useMemo(() => {
        return hostels
            .filter(h => h.price <= priceRange)
            .filter(h => selectedCity === 'all' || h.city === selectedCity)
            .filter(h => 
                h.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                h.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
    }, [hostels, searchTerm, selectedCity, priceRange]);
    
    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCity('all');
        setPriceRange(maxPrice);
    };

  return (
    <div>
      <div className="user-dashboard-filters">
        <div className="filter-group">
          <label htmlFor="search-term">Search by Name/Keyword</label>
          <input 
            type="search" 
            id="search-term" 
            placeholder="e.g., 'Wanderer' or 'beach'"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="city-filter">Filter by City</label>
          <select id="city-filter" value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
            {availableCities.map(city => (
              <option key={city} value={city}>{city === 'all' ? 'All Cities' : city}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="price-range" className="price-range-label">Max Price: <span className="price-output">${priceRange}</span></label>
          <input 
            type="range" 
            id="price-range" 
            min="0" 
            max={maxPrice} 
            value={priceRange}
            onChange={e => setPriceRange(Number(e.target.value))}
          />
        </div>
        <div className="filter-group">
            <label>&nbsp;</label> 
            <button onClick={resetFilters} className="submit-button reset-filters-button">Reset Filters</button>
        </div>
      </div>
      
      <section className="hostel-list" aria-label="Filtered Hostels">
        {filteredHostels.length > 0 ? (
            filteredHostels.map(hostel => (
              <HostelCard key={hostel.id} hostel={hostel} />
            ))
        ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>No hostels match your current filters. Try expanding your search!</p>
        )}
      </section>
    </div>
  );
};
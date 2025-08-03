import React, { useState } from 'react';
import { Hostel } from '../types';

interface RegisterPageProps {
    onAddHostel: (hostel: Omit<Hostel, 'id' | 'status'>) => void;
}

export const RegisterPage = ({ onAddHostel }: RegisterPageProps) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [bedsAvailable, setBedsAvailable] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address || !description || !imageUrl || !city || !price || !rating || !bedsAvailable) {
        alert('Please fill out all fields.');
        return;
    }
    onAddHostel({
      name,
      address,
      city,
      description,
      imageUrl,
      price: parseFloat(price) || 0,
      rating: parseFloat(rating) || 0,
      bedsAvailable: parseInt(bedsAvailable, 10) || 0,
    });
    // Clear form
    setName('');
    setAddress('');
    setCity('');
    setPrice('');
    setRating('');
    setBedsAvailable('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div className="registration-form-container">
      <form onSubmit={handleSubmit} className="registration-form" aria-label="Hostel Registration Form">
        <h2>Register Your Hostel</h2>
        <div className="form-group">
          <label htmlFor="hostel-name">Hostel Name</label>
          <input id="hostel-name" type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-address">Address</label>
          <input id="hostel-address" type="text" value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-city">City</label>
          <input id="hostel-city" type="text" value={city} onChange={e => setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-price">Price per night ($)</label>
          <input id="hostel-price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-rating">Rating (1-5)</label>
          <input id="hostel-rating" type="number" min="1" max="5" step="0.1" value={rating} onChange={e => setRating(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-beds">Beds Available</label>
          <input id="hostel-beds" type="number" min="0" value={bedsAvailable} onChange={e => setBedsAvailable(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-description">Description</label>
          <textarea id="hostel-description" value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hostel-image-url">Image URL</label>
          <input id="hostel-image-url" type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required />
        </div>
        <button type="submit" className="submit-button">Register Hostel</button>
      </form>
    </div>
  );
};
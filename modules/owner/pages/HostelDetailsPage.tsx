import React, { useState, useEffect } from 'react';
import { Hostel } from '../../../types';

interface HostelDetailsPageProps {
    hostel: Hostel;
    onUpdateHostel: (updatedHostel: Hostel) => void;
}

export const HostelDetailsPage = ({ hostel, onUpdateHostel }: HostelDetailsPageProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Hostel>(hostel);

    useEffect(() => {
        setFormData(hostel);
    }, [hostel]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    }
    
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateHostel(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(hostel);
        setIsEditing(false);
    };

    return (
        <div className="editable-form-container">
             <div className="editable-form-header">
                <h2>Hostel Details</h2>
                {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
                ) : (
                    <div className="form-actions">
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={handleSave} className="save-button" type="submit" form="hostel-details-form">Save</button>
                    </div>
                )}
            </div>
            <form id="hostel-details-form" onSubmit={handleSave} className={`editable-form ${isEditing ? 'is-editing' : ''}`}>
                <div className="form-group">
                    <label htmlFor="name">Hostel Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" value={formData.address} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                 <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input id="city" name="city" type="text" value={formData.city} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price per night ($)</label>
                    <input id="price" name="price" type="number" value={formData.price} onChange={handleNumberInputChange} readOnly={!isEditing} />
                </div>
                 <div className="form-group">
                    <label htmlFor="bedsAvailable">Beds Available</label>
                    <input id="bedsAvailable" name="bedsAvailable" type="number" value={formData.bedsAvailable} onChange={handleNumberInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} readOnly={!isEditing} rows={5} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input id="imageUrl" name="imageUrl" type="url" value={formData.imageUrl} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
            </form>
        </div>
    );
};

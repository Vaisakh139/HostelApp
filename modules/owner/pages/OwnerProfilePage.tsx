import React, { useState, useEffect } from 'react';
import { Owner } from '../../../types';

interface OwnerProfilePageProps {
    owner: Owner;
    onUpdateProfile: (updatedOwner: Owner) => void;
}

export const OwnerProfilePage = ({ owner, onUpdateProfile }: OwnerProfilePageProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Owner>(owner);

    useEffect(() => {
        setFormData(owner);
    }, [owner]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(owner);
        setIsEditing(false);
    };

    return (
        <div className="editable-form-container">
             <div className="editable-form-header">
                <h2>Owner Profile</h2>
                {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
                ) : (
                    <div className="form-actions">
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={handleSave} className="save-button" type="submit" form="owner-profile-form">Save</button>
                    </div>
                )}
            </div>
            <form id="owner-profile-form" onSubmit={handleSave} className={`editable-form ${isEditing ? 'is-editing' : ''}`}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input id="address" name="address" type="text" value={formData.address} onChange={handleInputChange} readOnly={!isEditing} />
                </div>
            </form>
        </div>
    );
};

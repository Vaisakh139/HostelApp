import React, { useState, useEffect } from 'react';
import { User } from '../../../types';

interface UserProfilePageProps {
    user: User;
    onUpdateProfile: (updatedUser: User) => void;
}

export const UserProfilePage = ({ user, onUpdateProfile }: UserProfilePageProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<User>(user);

    useEffect(() => {
        setFormData(user);
    }, [user]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdateProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    return (
        <div className="editable-form-container">
             <div className="editable-form-header">
                <h2>My Profile</h2>
                {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
                ) : (
                    <div className="form-actions">
                        <button onClick={handleCancel} className="cancel-button">Cancel</button>
                        <button onClick={handleSave} className="save-button" type="submit" form="user-profile-form">Save Changes</button>
                    </div>
                )}
            </div>
            <form id="user-profile-form" onSubmit={handleSave} className={`editable-form ${isEditing ? 'is-editing' : ''}`}>
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
                <div className="form-group">
                    <label htmlFor="occupation">I am a...</label>
                    <select id="occupation" name="occupation" value={formData.occupation} onChange={handleInputChange} disabled={!isEditing}>
                        <option value="student">Student</option>
                        <option value="worker">Worker</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                     <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} disabled={!isEditing}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                </div>
            </form>
        </div>
    );
};
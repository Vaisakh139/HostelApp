import React from 'react';
import { Hostel } from '../../../types';

interface HostelDetailsModalProps {
    hostel: Hostel;
    onClose: () => void;
}

export const HostelDetailsModal = ({ hostel, onClose }: HostelDetailsModalProps) => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="hostel-details-modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="hostel-details-modal">
                <button onClick={onClose} className="auth-modal-close" aria-label="Close modal">&times;</button>
                <img src={hostel.imageUrl} alt={`Exterior of ${hostel.name}`} className="modal-image" />
                <div className="modal-content">
                    <h2 id="modal-title">{hostel.name}</h2>
                    <p><strong>Status:</strong> <span className={`status-badge status-${hostel.status}`}>{hostel.status}</span></p>
                    <p><strong>Address:</strong> {hostel.address}, {hostel.city}</p>
                    <p><strong>Price:</strong> ${hostel.price} / night</p>
                    <p><strong>Rating:</strong> {hostel.rating} / 5</p>
                    <p><strong>Beds Available:</strong> {hostel.bedsAvailable}</p>
                    <p className="modal-description"><strong>Description:</strong> {hostel.description}</p>
                </div>
            </div>
        </div>
    );
};
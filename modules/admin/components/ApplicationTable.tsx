import React from 'react';
import { Hostel, HostelStatus } from '../../../types';

interface ApplicationTableProps {
    applications: Hostel[];
    onUpdateStatus: (hostelId: number, newStatus: HostelStatus) => void;
    onViewDetails: (hostel: Hostel) => void;
}

export const ApplicationTable = ({ applications, onUpdateStatus, onViewDetails }: ApplicationTableProps) => {
    if (applications.length === 0) {
        return <p style={{textAlign: 'center', marginTop: '2rem'}}>No applications found for this filter.</p>;
    }

    return (
        <div className="admin-table-container">
            <table className="admin-table">
                <thead>
                    <tr>
                        <th>Hostel Name</th>
                        <th>City</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map(hostel => (
                        <tr key={hostel.id}>
                            <td>{hostel.name}</td>
                            <td>{hostel.city}</td>
                            <td>${hostel.price}</td>
                            <td>
                                <span className={`status-badge status-${hostel.status}`}>{hostel.status}</span>
                            </td>
                            <td>
                                <div className="action-buttons">
                                    <button className="action-button view-button" onClick={() => onViewDetails(hostel)}>View Details</button>
                                    {hostel.status === 'pending' && (
                                        <>
                                            <button className="action-button approve-button" onClick={() => onUpdateStatus(hostel.id, 'approved')}>Approve</button>
                                            <button className="action-button reject-button" onClick={() => onUpdateStatus(hostel.id, 'rejected')}>Reject</button>
                                        </>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
import React from 'react';
import { Inmate } from '../../../types';

interface HostelInmatesPageProps {
    inmates: Inmate[];
}

export const HostelInmatesPage = ({ inmates }: HostelInmatesPageProps) => {
    return (
        <div className="page-container">
            <h2 style={{ textAlign: 'left' }}>Hostel Inmates</h2>
             <div className="inmates-table-container">
                <table className="inmates-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Check-in Date</th>
                            <th>Room Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inmates.map(inmate => (
                            <tr key={inmate.id}>
                                <td>{inmate.name}</td>
                                <td>{inmate.checkInDate}</td>
                                <td>{inmate.roomNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

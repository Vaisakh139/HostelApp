import React, { useState, useMemo } from 'react';
import { Hostel, HostelStatus } from '../../../types';
import { ApplicationTable } from '../components/ApplicationTable';
import { HostelDetailsModal } from '../components/HostelDetailsModal';

type FilterType = 'all' | HostelStatus;

interface AdminDashboardPageProps {
    allHostels: Hostel[];
    onUpdateStatus: (hostelId: number, newStatus: HostelStatus) => void;
}

export const AdminDashboardPage = ({ allHostels, onUpdateStatus }: AdminDashboardPageProps) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedHostel, setSelectedHostel] = useState<Hostel | null>(null);

    const filteredHostels = useMemo(() => {
        if (activeFilter === 'all') {
            return allHostels;
        }
        return allHostels.filter(hostel => hostel.status === activeFilter);
    }, [allHostels, activeFilter]);
    
    const handleViewDetails = (hostel: Hostel) => {
        setSelectedHostel(hostel);
        setIsDetailsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsDetailsModalOpen(false);
        setSelectedHostel(null);
    };

    const filters: FilterType[] = ['all', 'pending', 'approved', 'rejected'];

    return (
        <div className="admin-dashboard-page">
            <div className="admin-filters" role="group" aria-label="Filter applications">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                        aria-pressed={activeFilter === filter}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                ))}
            </div>
            <ApplicationTable 
              applications={filteredHostels} 
              onUpdateStatus={onUpdateStatus}
              onViewDetails={handleViewDetails}
            />
            {isDetailsModalOpen && selectedHostel && (
                <HostelDetailsModal 
                    hostel={selectedHostel}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};
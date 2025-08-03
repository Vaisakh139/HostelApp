import React from 'react';
import { OwnerView } from '../../../types';

interface OwnerHeaderProps {
    currentView: OwnerView;
    setView: (view: OwnerView) => void;
    onLogout: () => void;
}

export const OwnerHeader = ({ currentView, setView, onLogout }: OwnerHeaderProps) => (
  <header className="header owner-header" role="banner">
    <nav className="nav" aria-label="Owner navigation">
      <span className="nav-brand">HostelHaven Owner</span>
      <div className="nav-links">
        <button
          onClick={() => setView('profile')}
          className={currentView === 'profile' ? 'active' : ''}
          aria-pressed={currentView === 'profile'}
        >
          Profile
        </button>
        <button
          onClick={() => setView('hostel-details')}
          className={currentView === 'hostel-details' ? 'active' : ''}
          aria-pressed={currentView === 'hostel-details'}
        >
          Hostel Details
        </button>
        <button
          onClick={() => setView('inmates')}
          className={currentView === 'inmates' ? 'active' : ''}
          aria-pressed={currentView === 'inmates'}
        >
          Hostel Inmates
        </button>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </header>
);

import React from 'react';
import { AdminView } from '../../../types';

interface AdminHeaderProps {
    currentView: AdminView;
    setView: (view: AdminView) => void;
    onLogout: () => void;
}

export const AdminHeader = ({ currentView, setView, onLogout }: AdminHeaderProps) => (
  <header className="header admin-header" role="banner">
    <nav className="nav" aria-label="Admin navigation">
      <span className="nav-brand">HostelHaven Admin</span>
      <div className="nav-links">
        <button
          onClick={() => setView('dashboard')}
          className={currentView === 'dashboard' ? 'active' : ''}
          aria-pressed={currentView === 'dashboard'}
        >
          Dashboard
        </button>
        <button
          onClick={() => setView('profile')}
          className={currentView === 'profile' ? 'active' : ''}
          aria-pressed={currentView === 'profile'}
        >
          Profile
        </button>
        <button onClick={onLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  </header>
);

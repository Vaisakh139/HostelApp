import React from 'react';
import { UserView } from '../../../types';

interface UserHeaderProps {
    currentView: UserView;
    setView: (view: UserView) => void;
    onLogout: () => void;
}

export const UserHeader = ({ currentView, setView, onLogout }: UserHeaderProps) => (
  <header className="header user-header" role="banner">
    <nav className="nav" aria-label="User navigation">
      <span className="nav-brand">HostelHaven</span>
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
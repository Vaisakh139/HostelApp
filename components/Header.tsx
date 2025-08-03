import React from 'react';
import { View } from '../types';

interface HeaderProps {
    currentView: View;
    setView: (view: View) => void;
    onSignInClick: () => void;
}

export const Header = ({ currentView, setView, onSignInClick }: HeaderProps) => (
  <header className="header" role="banner">
    <nav className="nav" aria-label="Main navigation">
      <span className="nav-brand">HostelHaven</span>
      <div className="nav-links">
        <button
          onClick={() => setView('home')}
          className={currentView === 'home' ? 'active' : ''}
          aria-pressed={currentView === 'home'}
        >
          Home
        </button>
        <button
          onClick={() => setView('register')}
          className={currentView === 'register' ? 'active' : ''}
          aria-pressed={currentView === 'register'}
        >
          Register Hostel
        </button>
        <button
          onClick={() => setView('about')}
          className={currentView === 'about' ? 'active' : ''}
          aria-pressed={currentView === 'about'}
        >
          About
        </button>
        <button
          onClick={() => setView('contact')}
          className={currentView === 'contact' ? 'active' : ''}
          aria-pressed={currentView === 'contact'}
        >
          Contact
        </button>
        <button onClick={onSignInClick} className="sign-in-button">
          Sign In
        </button>
      </div>
    </nav>
  </header>
);
import React, { useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { User } from '../../types';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (email: string, pass: string) => void;
  onSignUp: (newUser: Omit<User, 'id'>) => void;
}

export const AuthModal = ({ onClose, onLogin, onSignUp }: AuthModalProps) => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Closes modal only if the overlay itself is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className="auth-modal">
        <button onClick={onClose} className="auth-modal-close" aria-label="Close modal">&times;</button>
        {isSigningUp ? (
          <SignUpForm onSwitchToSignIn={() => setIsSigningUp(false)} onSignUp={onSignUp} />
        ) : (
          <SignInForm onSwitchToSignUp={() => setIsSigningUp(true)} onLogin={onLogin} />
        )}
      </div>
    </div>
  );
};
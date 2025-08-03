import React, { useState } from 'react';

interface SignInFormProps {
    onSwitchToSignUp: () => void;
    onLogin: (email: string, pass: string) => void;
}

export const SignInForm = ({ onSwitchToSignUp, onLogin }: SignInFormProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="auth-form" id="auth-title">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit} aria-label="Sign In Form">
                <div className="form-group">
                    <label htmlFor="signin-email">Email Address</label>
                    <input 
                        id="signin-email" 
                        type="email" 
                        required 
                        autoComplete="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="signin-password">Password</label>
                    <input 
                        id="signin-password" 
                        type="password" 
                        required 
                        autoComplete="current-password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Sign In</button>
            </form>
            <p className="auth-toggle">
                Don't have an account? <span onClick={onSwitchToSignUp} role="button" tabIndex={0}>Sign Up</span>
            </p>
        </div>
    );
};
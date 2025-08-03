import React, { useState } from 'react';
import { User } from '../../types';

interface SignUpFormProps {
    onSwitchToSignIn: () => void;
    onSignUp: (newUser: Omit<User, 'id'>) => void;
}

export const SignUpForm = ({ onSwitchToSignIn, onSignUp }: SignUpFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        occupation: 'student' as 'student' | 'worker',
        gender: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'occupation') {
            setFormData(prev => ({ ...prev, [name]: value as 'student' | 'worker' }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.gender) {
            alert('Please select a gender.');
            return;
        }
        onSignUp(formData);
    };

    return (
        <div className="auth-form" id="auth-title">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit} aria-label="Sign Up Form">
                <div className="form-group">
                    <label htmlFor="signup-name">Full Name</label>
                    <input id="signup-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="signup-email">Email Address</label>
                    <input id="signup-email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} />
                </div>
                 <div className="form-group">
                    <label htmlFor="signup-phone">Phone Number</label>
                    <input id="signup-phone" name="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={handleChange} />
                </div>
                 <div className="form-group">
                    <label htmlFor="signup-address">Address</label>
                    <input id="signup-address" name="address" type="text" required autoComplete="street-address" value={formData.address} onChange={handleChange} />
                </div>
                 <div className="form-group">
                    <label htmlFor="signup-occupation">I am a...</label>
                    <select id="signup-occupation" name="occupation" required value={formData.occupation} onChange={handleChange}>
                        <option value="student">Student</option>
                        <option value="worker">Worker</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="signup-gender">Gender</label>
                    <select id="signup-gender" name="gender" required value={formData.gender} onChange={handleChange}>
                        <option value="" disabled>Select...</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="signup-password">Password</label>
                    <input id="signup-password" name="password" type="password" required autoComplete="new-password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit" className="submit-button">Sign Up</button>
            </form>
            <p className="auth-toggle">
                Already have an account? <span onClick={onSwitchToSignIn} role="button" tabIndex={0}>Sign In</span>
            </p>
        </div>
    );
};
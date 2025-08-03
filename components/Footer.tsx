import React from 'react';

export const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} HostelHaven. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </footer>
);
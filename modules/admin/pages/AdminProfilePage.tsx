import React from 'react';

export const AdminProfilePage = () => (
  <div className="page-container" role="document">
    <h2 id="admin-profile-title">Admin Profile</h2>
    <p>This is the profile page for the HostelHaven administrator.</p>
    <ul>
      <li><strong>Username:</strong> Admin</li>
      <li><strong>Email:</strong> admin@hostelhaven.com</li>
      <li><strong>Role:</strong> Site Administrator</li>
    </ul>
    <p>From here, you would typically be able to manage your profile settings, change your password, and view activity logs.</p>
  </div>
);

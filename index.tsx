import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

import { Hostel, View, AdminView, HostelStatus, OwnerView, Owner, Inmate, User, UserView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AuthModal } from './components/auth/AuthModal';
import { AdminHeader } from './modules/admin/components/AdminHeader';
import { AdminDashboardPage } from './modules/admin/pages/AdminDashboardPage';
import { AdminProfilePage } from './modules/admin/pages/AdminProfilePage';
import { OwnerHeader } from './modules/owner/components/OwnerHeader';
import { OwnerProfilePage } from './modules/owner/pages/OwnerProfilePage';
import { HostelDetailsPage } from './modules/owner/pages/HostelDetailsPage';
import { HostelInmatesPage } from './modules/owner/pages/HostelInmatesPage';
import { UserHeader } from './modules/user/components/UserHeader';
import { UserDashboardPage } from './modules/user/pages/UserDashboardPage';
import { UserProfilePage } from './modules/user/pages/UserProfilePage';


// --- Initial Data ---
const initialHostels: Hostel[] = [
  {
    id: 1,
    name: 'The Wanderer\'s Rest',
    address: '123 Adventure Ave',
    city: 'Travel City',
    description: 'A cozy spot for backpackers. We offer a friendly atmosphere and weekly events.',
    imageUrl: 'https://images.unsplash.com/photo-1582502251419-6299048093d3?q=80&w=2000&auto=format&fit=crop',
    price: 25,
    rating: 4.5,
    bedsAvailable: 8,
    status: 'approved',
  },
  {
    id: 2,
    name: 'Urban Oasis Hostel',
    address: '456 Downtown St',
    city: 'Metroburg',
    description: 'In the heart of the city, perfect for exploring urban landscapes and nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1544124499-589124a54414?q=80&w=2070&auto=format&fit=crop',
    price: 35,
    rating: 4.8,
    bedsAvailable: 12,
    status: 'pending',
  },
  {
    id: 3,
    name: 'Seaside Serenity',
    address: '789 Ocean Blvd',
    city: 'Coastal Town',
    description: 'Wake up to the sound of waves. Ideal for beach lovers and those looking to relax.',
    imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1932&auto=format&fit=crop',
    price: 30,
    rating: 4.2,
    bedsAvailable: 6,
    status: 'approved',
  },
   {
    id: 4,
    name: 'Mountain Ridge Lodge',
    address: '101 Pine Cone Path',
    city: 'Pine Valley',
    description: 'Escape to the mountains. Perfect for hikers and nature enthusiasts.',
    imageUrl: 'https://images.unsplash.com/photo-1559538459-e4f71d7943f6?q=80&w=1974&auto=format&fit=crop',
    price: 40,
    rating: 4.6,
    bedsAvailable: 10,
    status: 'rejected',
  },
  {
    id: 5,
    name: 'The Digital Nomad',
    address: '202 Innovation Dr',
    city: 'Tech City',
    description: 'High-speed internet and co-working spaces for the modern traveler.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2072&auto=format&fit=crop',
    price: 50,
    rating: 4.9,
    bedsAvailable: 20,
    status: 'pending',
  },
  {
    id: 6,
    name: 'Backpacker\'s Hub',
    address: '303 Crossroads St',
    city: 'Junction',
    description: 'A social hub for travelers on a budget. Meet new people every night.',
    imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
    price: 22,
    rating: 4.1,
    bedsAvailable: 15,
    status: 'approved',
  },
  {
    id: 7,
    name: 'The Coastal Shack',
    address: '404 Sandy Lane',
    city: 'Sandy Shores',
    description: 'A rustic, charming shack right on the beach. Surf, sun, and sand.',
    imageUrl: 'https://images.unsplash.com/photo-1585544733938-23214544047a?q=80&w=1964&auto=format&fit=crop',
    price: 28,
    rating: 4.3,
    bedsAvailable: 8,
    status: 'approved',
  },
  {
    id: 8,
    name: 'Green Haven Eco-Lodge',
    address: '505 Forest Rd',
    city: 'Forrest Retreat',
    description: 'Sustainable and serene. Live in harmony with nature at our eco-lodge.',
    imageUrl: 'https://images.unsplash.com/photo-1618221639-224372279869?q=80&w=1964&auto=format&fit=crop',
    price: 55,
    rating: 4.7,
    bedsAvailable: 5,
    status: 'pending',
  },
  {
    id: 9,
    name: 'Historic Downtown Inn',
    address: '606 Cobblestone Way',
    city: 'Old Town',
    description: 'Experience history. Our inn is a restored heritage building in the city center.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    price: 45,
    rating: 4.4,
    bedsAvailable: 9,
    status: 'rejected',
  },
];

const initialUsers: User[] = [
    {
        id: 1,
        name: 'Demo User',
        email: 'user@user.com',
        password: 'user',
        phone: '555-987-6543',
        address: '456 Wanderer Lane',
        occupation: 'student',
        gender: 'female'
    }
];

const initialOwner: Owner = {
    name: 'Alex Smith',
    email: 'owner@owner.com',
    phone: '555-123-4567',
    address: '789 Ocean Blvd, Coastal Town'
};

const initialOwnerHostel: Hostel = initialHostels[2]; // Seaside Serenity

const initialInmates: Inmate[] = [
    { id: 1, name: 'John Doe', checkInDate: '2024-05-20', roomNumber: 'A101' },
    { id: 2, name: 'Jane Smith', checkInDate: '2024-05-22', roomNumber: 'B203' },
    { id: 3, name: 'Peter Jones', checkInDate: '2024-05-23', roomNumber: 'A102' },
    { id: 4, name: 'Mary Williams', checkInDate: '2024-05-24', roomNumber: 'C301' },
];

// --- Main App Component ---
const App = () => {
  const [hostels, setHostels] = useState<Hostel[]>(initialHostels);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [view, setView] = useState<View>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Roles State
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // View States
  const [adminView, setAdminView] = useState<AdminView>('dashboard');
  const [ownerView, setOwnerView] = useState<OwnerView>('profile');
  const [userView, setUserView] = useState<UserView>('dashboard');

  // Owner Data State
  const [owner, setOwner] = useState<Owner>(initialOwner);
  const [ownerHostel, setOwnerHostel] = useState<Hostel>(initialOwnerHostel);
  const [inmates, setInmates] = useState<Inmate[]>(initialInmates);

  const addHostel = (newHostelData: Omit<Hostel, 'id' | 'status'>) => {
    const newHostel: Hostel = {
      ...newHostelData,
      id: Date.now(),
      status: 'pending',
    };
    setHostels(prevHostels => [newHostel, ...prevHostels]);
    setView('home');
  };
  
  const handleLogin = (email: string, pass: string) => {
      if(email === 'admin@hostelhaven.com' && pass === 'admin') {
          setIsAdminLoggedIn(true);
          setIsAuthModalOpen(false);
          setAdminView('dashboard');
      } else if (email === 'owner@owner.com' && pass === 'owner') {
          setIsOwnerLoggedIn(true);
          setIsAuthModalOpen(false);
          setOwnerView('profile');
      } else {
          const foundUser = users.find(u => u.email === email && u.password === pass);
          if (foundUser) {
              setCurrentUser(foundUser);
              setIsUserLoggedIn(true);
              setUserView('dashboard');
              setIsAuthModalOpen(false);
          } else {
              alert('Invalid credentials. Please try again or sign up.');
          }
      }
  };
  
  const handleSignUp = (newUserData: Omit<User, 'id'>) => {
      const newUser: User = {
          ...newUserData,
          id: Date.now(),
      };
      setUsers(prev => [...prev, newUser]);
      setCurrentUser(newUser);
      setIsUserLoggedIn(true);
      setUserView('dashboard');
      setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
      setIsAdminLoggedIn(false);
      setIsOwnerLoggedIn(false);
      setIsUserLoggedIn(false);
      setCurrentUser(null);
      setView('home');
  };

  const handleUpdateStatus = (hostelId: number, newStatus: HostelStatus) => {
      setHostels(hostels.map(h => h.id === hostelId ? { ...h, status: newStatus } : h));
  };
  
  const handleUpdateOwnerProfile = (updatedOwner: Owner) => {
    setOwner(updatedOwner);
  };

  const handleUpdateHostelDetails = (updatedHostel: Hostel) => {
    setOwnerHostel(updatedHostel);
    setHostels(hostels.map(h => h.id === updatedHostel.id ? updatedHostel : h));
  };

  const handleUpdateUserProfile = (updatedUser: User) => {
      setCurrentUser(updatedUser);
      setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  }

  const handleOpenAuthModal = () => setIsAuthModalOpen(true);
  const handleCloseAuthModal = () => setIsAuthModalOpen(false);

  const renderPublicContent = () => {
    switch (view) {
      case 'home':
        return <HomePage hostels={hostels.filter(h => h.status === 'approved')} />;
      case 'register':
        return <RegisterPage onAddHostel={addHostel} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage hostels={hostels.filter(h => h.status === 'approved')} />;
    }
  };
  
  const renderAdminContent = () => {
      switch(adminView) {
          case 'dashboard':
              return <AdminDashboardPage allHostels={hostels} onUpdateStatus={handleUpdateStatus} />;
          case 'profile':
              return <AdminProfilePage />;
          default:
              return <AdminDashboardPage allHostels={hostels} onUpdateStatus={handleUpdateStatus} />;
      }
  };
  
  const renderOwnerContent = () => {
      switch(ownerView) {
          case 'profile':
              return <OwnerProfilePage owner={owner} onUpdateProfile={handleUpdateOwnerProfile} />;
          case 'hostel-details':
              return <HostelDetailsPage hostel={ownerHostel} onUpdateHostel={handleUpdateHostelDetails} />;
          case 'inmates':
              return <HostelInmatesPage inmates={inmates} />;
          default:
              return <OwnerProfilePage owner={owner} onUpdateProfile={handleUpdateOwnerProfile} />;
      }
  }
  
  const renderUserContent = () => {
      if (!currentUser) return null;
      switch(userView) {
          case 'dashboard':
              return <UserDashboardPage hostels={hostels.filter(h => h.status === 'approved')} />;
          case 'profile':
              return <UserProfilePage user={currentUser} onUpdateProfile={handleUpdateUserProfile} />;
          default:
              return <UserDashboardPage hostels={hostels.filter(h => h.status === 'approved')} />;
      }
  }

  if (isAdminLoggedIn) {
      return (
        <>
            <AdminHeader currentView={adminView} setView={setAdminView} onLogout={handleLogout} />
            <main className="app-container" role="main">
                {renderAdminContent()}
            </main>
            <Footer />
        </>
      )
  }
  
  if (isOwnerLoggedIn) {
      return (
        <>
            <OwnerHeader currentView={ownerView} setView={setOwnerView} onLogout={handleLogout} />
            <main className="app-container" role="main">
                {renderOwnerContent()}
            </main>
            <Footer />
        </>
      )
  }
  
  if (isUserLoggedIn) {
      return (
        <>
            <UserHeader currentView={userView} setView={setUserView} onLogout={handleLogout} />
            <main className="app-container" role="main">
                {renderUserContent()}
            </main>
            <Footer />
        </>
      )
  }

  return (
    <>
      <Header currentView={view} setView={setView} onSignInClick={handleOpenAuthModal} />
      <main className="app-container" role="main">
        {renderPublicContent()}
      </main>
      <Footer />
      {isAuthModalOpen && <AuthModal onClose={handleCloseAuthModal} onLogin={handleLogin} onSignUp={handleSignUp} />}
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
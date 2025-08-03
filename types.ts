export type HostelStatus = 'pending' | 'approved' | 'rejected';

export interface Hostel {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  city: string;
  price: number;
  rating: number;
  bedsAvailable: number;
  status: HostelStatus;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    occupation: 'student' | 'worker';
    gender: string;
}

export type View = 'home' | 'register' | 'about' | 'contact';
export type AdminView = 'dashboard' | 'profile';
export type OwnerView = 'profile' | 'hostel-details' | 'inmates';
export type UserView = 'dashboard' | 'profile';

export interface Owner {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface Inmate {
    id: number;
    name: string;
    checkInDate: string;
    roomNumber: string;
}
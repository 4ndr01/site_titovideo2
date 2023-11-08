import { IOrder } from "./order";

// Base User Type
export interface IUser {
    userID: number;
    username: string;
    password: string;
    email: string;
    token: null | string;
    orders: IOrder[];
    creationDate: Date;
    lastLogin: Date | null;
    role: 'client' | 'prestataire' | 'admin'; // Maintaining the role for access control
  };

  
// Client Type
export interface IClient extends IUser  {
  // Client-specific properties
  subscriptionType?: string; // Optional, depends on whether the client has a subscription
  titoPoints?: number; // Optional, depends on whether the loyalty system is in place
  // ... other client-specific fields
};

// Prestataire (Monteur) Type
export interface IPrestataire extends IUser  {
  // Prestataire-specific properties
  servicesOffered: Service[]; // Array of services that the prestataire offers
  availability: Availability[];
  rating?: number; // Optional, average rating based on completed work
  mood?: string; // Optional, mood of the prestataire
  clientRating: string; // Optional, rating given by the client
  // ... other prestataire-specific fields
};

// Admin Type
export interface IAdmin extends IUser  {
  // Admin-specific properties
  accessLevel: string; // Defines the level of access this admin has
  // ... other admin-specific fields
};








// Supporting types
type Service = {
  serviceID: number;
  description: string;
  price: number;
};


type Availability = {
  // if true, can give him on order, if not true, can't give him an order
  available : boolean; // Whether the prestataire is available during this time
  weekday?: string; // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  startTime?: string;
  endTime?: string;
};
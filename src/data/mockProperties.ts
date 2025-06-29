import { Property } from '../types/Property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Home with Pool',
    price: 899000,
    address: '1234 Oak Avenue',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    propertyType: 'house',
    yearBuilt: 2019,
    description: 'Stunning modern home with open floor plan, gourmet kitchen, and resort-style backyard with pool. Located in the heart of Austin with easy access to downtown.',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Pool', 'Garage', 'Fireplace', 'Walk-in Closet', 'Granite Countertops'],
    listingAgent: {
      name: 'Sarah Johnson',
      phone: '(512) 555-0123',
      email: 'sarah@austinrealty.com',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2672, lng: -97.7431 },
    listedDate: '2024-01-15',
    status: 'for-sale'
  },
  {
    id: '2',
    title: 'Downtown Luxury Condo',
    price: 650000,
    address: '789 Main Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78702',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    propertyType: 'condo',
    yearBuilt: 2021,
    description: 'Luxury high-rise condo with panoramic city views. Premium finishes throughout, including marble countertops and hardwood floors.',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['City Views', 'Concierge', 'Fitness Center', 'Rooftop Deck', 'In-unit Laundry'],
    listingAgent: {
      name: 'Michael Chen',
      phone: '(512) 555-0124',
      email: 'michael@downtownrealty.com',
      photo: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2649, lng: -97.7364 },
    listedDate: '2024-01-20',
    status: 'for-sale'
  },
  {
    id: '3',
    title: 'Charming Victorian Townhouse',
    price: 425000,
    address: '456 Elm Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78703',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    propertyType: 'townhouse',
    yearBuilt: 1925,
    description: 'Beautiful restored Victorian townhouse with original hardwood floors, high ceilings, and modern updates. Walking distance to parks and restaurants.',
    images: [
      'https://images.pexels.com/photos/1396127/pexels-photo-1396127.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Historic Charm', 'Hardwood Floors', 'High Ceilings', 'Updated Kitchen', 'Garden'],
    listingAgent: {
      name: 'Emily Rodriguez',
      phone: '(512) 555-0125',
      email: 'emily@heritagehomes.com',
      photo: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2711, lng: -97.7437 },
    listedDate: '2024-01-18',
    status: 'for-sale'
  },
  {
    id: '4',
    title: 'Contemporary Family Home',
    price: 725000,
    address: '321 Pine Ridge Drive',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    bedrooms: 5,
    bathrooms: 4,
    sqft: 3200,
    propertyType: 'house',
    yearBuilt: 2017,
    description: 'Spacious family home in quiet neighborhood. Open concept living with chef\'s kitchen, master suite with spa-like bathroom, and large backyard perfect for entertaining.',
    images: [
      'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['Open Concept', 'Chef\'s Kitchen', 'Master Suite', 'Large Backyard', 'Two-Car Garage'],
    listingAgent: {
      name: 'David Thompson',
      phone: '(512) 555-0126',
      email: 'david@familyhomes.com',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2500, lng: -97.7500 },
    listedDate: '2024-01-12',
    status: 'for-sale'
  },
  {
    id: '5',
    title: 'Stylish Studio Apartment',
    price: 285000,
    address: '567 Riverside Drive',
    city: 'Austin',
    state: 'TX',
    zipCode: '78705',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 850,
    propertyType: 'apartment',
    yearBuilt: 2020,
    description: 'Modern studio apartment with floor-to-ceiling windows and river views. Perfect for young professionals, featuring efficient layout and premium amenities.',
    images: [
      'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396129/pexels-photo-1396129.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['River Views', 'Floor-to-Ceiling Windows', 'Modern Appliances', 'Gym Access', 'Bike Storage'],
    listingAgent: {
      name: 'Lisa Park',
      phone: '(512) 555-0127',
      email: 'lisa@riverviewapts.com',
      photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2851, lng: -97.7394 },
    listedDate: '2024-01-22',
    status: 'for-sale'
  },
  {
    id: '6',
    title: 'Executive Estate with Acreage',
    price: 1250000,
    address: '1000 Hill Country Lane',
    city: 'Austin',
    state: 'TX',
    zipCode: '78746',
    bedrooms: 6,
    bathrooms: 5,
    sqft: 4500,
    propertyType: 'house',
    yearBuilt: 2015,
    description: 'Magnificent executive estate on 2 acres with panoramic hill country views. Custom built with luxury finishes throughout, wine cellar, and resort-style pool.',
    images: [
      'https://images.pexels.com/photos/1396117/pexels-photo-1396117.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2062425/pexels-photo-2062425.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    features: ['2 Acres', 'Hill Country Views', 'Wine Cellar', 'Resort Pool', 'Custom Built', 'Three-Car Garage'],
    listingAgent: {
      name: 'Robert Williams',
      phone: '(512) 555-0128',
      email: 'robert@luxuryestates.com',
      photo: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    coordinates: { lat: 30.2200, lng: -97.8000 },
    listedDate: '2024-01-10',
    status: 'for-sale'
  }
];
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: 'house' | 'condo' | 'townhouse' | 'apartment';
  yearBuilt: number;
  description: string;
  images: string[];
  features: string[];
  listingAgent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  listedDate: string;
  status: 'for-sale' | 'pending' | 'sold';
  isFavorite?: boolean;
}

export interface SearchFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number[];
  bathrooms: number[];
  propertyTypes: string[];
  minSqft: number;
  maxSqft: number;
}
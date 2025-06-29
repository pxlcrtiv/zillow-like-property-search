import React from 'react';
import { Property } from '../types/Property';
import { Heart, Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle: (id: string) => void;
  onClick: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onFavoriteToggle,
  onClick
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSqft = (sqft: number) => {
    return new Intl.NumberFormat('en-US').format(sqft);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
      onClick={() => onClick(property)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle(property.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-200 ${
            property.isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white text-gray-400 hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${property.isFavorite ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-lg text-xs font-medium capitalize">
            {property.status.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-2">
          <span className="text-2xl font-bold text-gray-900">{formatPrice(property.price)}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center space-x-4 mb-3 text-gray-600">
          <div className="flex items-center space-x-1">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{property.bedrooms} bed{property.bedrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="w-4 h-4" />
            <span className="text-sm">{formatSqft(property.sqft)} sqft</span>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-1 text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.address}, {property.city}, {property.state} {property.zipCode}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors duration-200">
          {property.title}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* Agent */}
        <div className="flex items-center space-x-3 pt-3 border-t border-gray-100">
          <img
            src={property.listingAgent.photo}
            alt={property.listingAgent.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{property.listingAgent.name}</p>
            <p className="text-xs text-gray-500">Listing Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
};
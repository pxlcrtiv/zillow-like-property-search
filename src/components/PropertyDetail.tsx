import React, { useState } from 'react';
import { Property } from '../types/Property';
import { X, Heart, Bed, Bath, Square, Calendar, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
  onFavoriteToggle: (id: string) => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({
  property,
  onClose,
  onFavoriteToggle
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center space-x-1 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => onFavoriteToggle(property.id)}
              className={`p-3 rounded-full transition-all duration-200 ${
                property.isFavorite
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${property.isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image Gallery */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2">
                      <Bed className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-semibold">{property.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2">
                      <Bath className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2">
                      <Square className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-sm text-gray-500">Square Feet</p>
                    <p className="font-semibold">{formatSqft(property.sqft)}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="font-semibold">{property.yearBuilt}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features & Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Price and Agent */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900">{formatPrice(property.price)}</p>
                  <p className="text-sm text-gray-500 mt-1">Listed {formatDate(property.listedDate)}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium capitalize">{property.propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium capitalize text-green-600">{property.status.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Price per Sqft</span>
                    <span className="font-medium">${Math.round(property.price / property.sqft)}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6">
                  Schedule Tour
                </button>
              </div>

              {/* Agent Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Listing Agent</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={property.listingAgent.photo}
                    alt={property.listingAgent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{property.listingAgent.name}</h4>
                    <p className="text-sm text-gray-500">Licensed Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <a
                    href={`tel:${property.listingAgent.phone}`}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{property.listingAgent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.listingAgent.email}`}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{property.listingAgent.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
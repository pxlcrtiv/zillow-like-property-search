import React from 'react';
import { SearchFilters } from '../types/Property';

interface FilterSidebarProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  isOpen,
  onClose
}) => {
  const propertyTypes = ['house', 'condo', 'townhouse', 'apartment'];
  const bedroomOptions = [1, 2, 3, 4, 5];
  const bathroomOptions = [1, 2, 3, 4, 5];

  const handleBedroomToggle = (bedroom: number) => {
    const newBedrooms = filters.bedrooms.includes(bedroom)
      ? filters.bedrooms.filter(b => b !== bedroom)
      : [...filters.bedrooms, bedroom];
    
    onFiltersChange({ ...filters, bedrooms: newBedrooms });
  };

  const handleBathroomToggle = (bathroom: number) => {
    const newBathrooms = filters.bathrooms.includes(bathroom)
      ? filters.bathrooms.filter(b => b !== bathroom)
      : [...filters.bathrooms, bathroom];
    
    onFiltersChange({ ...filters, bathrooms: newBathrooms });
  };

  const handlePropertyTypeToggle = (type: string) => {
    const newTypes = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter(t => t !== type)
      : [...filters.propertyTypes, type];
    
    onFiltersChange({ ...filters, propertyTypes: newTypes });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      location: '',
      minPrice: 0,
      maxPrice: 2000000,
      bedrooms: [],
      bathrooms: [],
      propertyTypes: [],
      minSqft: 0,
      maxSqft: 10000
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none lg:border-r lg:border-gray-200
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            Filters
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 h-full overflow-y-auto">
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Filters
            </h2>
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min Price</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => onFiltersChange({ ...filters, minPrice: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Max Price</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => onFiltersChange({ ...filters, maxPrice: parseInt(e.target.value) || 2000000 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="$2,000,000"
                />
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Property Type</h3>
            <div className="space-y-2">
              {propertyTypes.map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.propertyTypes.includes(type)}
                    onChange={() => handlePropertyTypeToggle(type)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Bedrooms</h3>
            <div className="flex flex-wrap gap-2">
              {bedroomOptions.map(bedroom => (
                <button
                  key={bedroom}
                  onClick={() => handleBedroomToggle(bedroom)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    filters.bedrooms.includes(bedroom)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {bedroom}+ bed{bedroom > 1 ? 's' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Bathrooms</h3>
            <div className="flex flex-wrap gap-2">
              {bathroomOptions.map(bathroom => (
                <button
                  key={bathroom}
                  onClick={() => handleBathroomToggle(bathroom)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    filters.bathrooms.includes(bathroom)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {bathroom}+ bath{bathroom > 1 ? 's' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Square Footage */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Square Footage</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min Sqft</label>
                <input
                  type="number"
                  value={filters.minSqft}
                  onChange={(e) => onFiltersChange({ ...filters, minSqft: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Max Sqft</label>
                <input
                  type="number"
                  value={filters.maxSqft}
                  onChange={(e) => onFiltersChange({ ...filters, maxSqft: parseInt(e.target.value) || 10000 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="10,000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
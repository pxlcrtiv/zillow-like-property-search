import React from 'react';
import { Property } from '../types/Property';
import { PropertyCard } from './PropertyCard';
import { Grid, List } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  onFavoriteToggle: (id: string) => void;
  onPropertyClick: (property: Property) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  onFavoriteToggle,
  onPropertyClick,
  viewMode,
  onViewModeChange
}) => {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <Grid className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
        <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* View Controls */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          Showing {properties.length} propert{properties.length === 1 ? 'y' : 'ies'}
        </p>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'grid' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              viewMode === 'list' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Property Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
          : 'space-y-4'
      }>
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onFavoriteToggle={onFavoriteToggle}
            onClick={onPropertyClick}
          />
        ))}
      </div>
    </div>
  );
};
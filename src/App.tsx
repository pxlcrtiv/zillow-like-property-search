import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { PropertyGrid } from './components/PropertyGrid';
import { PropertyDetail } from './components/PropertyDetail';
import { Property, SearchFilters } from './types/Property';
import { mockProperties } from './data/mockProperties';

function App() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(mockProperties);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minPrice: 0,
    maxPrice: 2000000,
    bedrooms: [],
    bathrooms: [],
    propertyTypes: [],
    minSqft: 0,
    maxSqft: 10000
  });

  // Filter properties based on search and filters
  useEffect(() => {
    let filtered = properties;

    // Apply search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.zipCode.includes(searchQuery)
      );
    }

    // Apply filters
    filtered = filtered.filter(property => {
      // Price range
      if (property.price < filters.minPrice || property.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms
      if (filters.bedrooms.length > 0 && !filters.bedrooms.includes(property.bedrooms)) {
        return false;
      }

      // Bathrooms
      if (filters.bathrooms.length > 0 && !filters.bathrooms.includes(property.bathrooms)) {
        return false;
      }

      // Property types
      if (filters.propertyTypes.length > 0 && !filters.propertyTypes.includes(property.propertyType)) {
        return false;
      }

      // Square footage
      if (property.sqft < filters.minSqft || property.sqft > filters.maxSqft) {
        return false;
      }

      return true;
    });

    setFilteredProperties(filtered);
  }, [properties, searchQuery, filters]);

  const handleFavoriteToggle = (id: string) => {
    setProperties(prev => 
      prev.map(property =>
        property.id === id 
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      )
    );
  };

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
  };

  const handleSearchSubmit = () => {
    // Search is handled automatically through useEffect
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex lg:space-x-8">
          {/* Filter Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={true}
              onClose={() => {}}
            />
          </div>

          {/* Mobile Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                <span>Filters</span>
              </button>
            </div>

            <PropertyGrid
              properties={filteredProperties}
              onFavoriteToggle={handleFavoriteToggle}
              onPropertyClick={handlePropertyClick}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </div>
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )}
    </div>
  );
}

export default App;
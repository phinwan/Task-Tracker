import React from 'react';
import { Search } from 'lucide-react';
import { FilterType } from '../types/task';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  filter,
  onFilterChange
}) => {
  const filterOptions: FilterType[] = [
    'all', 'completed', 'pending', 'high', 'medium', 'low', 
    'work', 'personal', 'shopping', 'health'
  ];

  return (
    <div className="mb-8 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filterOptions.map(filterOption => (
          <Button
            key={filterOption}
            variant={filter === filterOption ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => onFilterChange(filterOption)}
            className="rounded-full"
          >
            {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
          </Button>
        ))}
      </div>
    </div>
  );
};
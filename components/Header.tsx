import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from './ui/Button';

interface HeaderProps {
  onAddTask: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTask }) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Task Tracker</h1>
          <Button onClick={onAddTask}>
            <Plus size={20} />
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { Check, Edit2, Trash2, Calendar, Tag } from 'lucide-react';
import { Task } from '../types/task';
import { getPriorityColor, getCategoryColor } from '../utils/taskUtils';
import { Button } from './ui/Button';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  onToggle, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          <button
            onClick={() => onToggle(task.id)}
            className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
              task.completed 
                ? 'bg-green-500 border-green-500 text-white' 
                : 'border-gray-300 hover:border-gray-400'
            }`}
          >
            {task.completed && <Check size={12} />}
          </button>
          
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-900'
            }`}>
              {task.title}
            </h3>
            {task.description && (
              <p className={`text-gray-600 mt-1 ${
                task.completed ? 'line-through' : ''
              }`}>
                {task.description}
              </p>
            )}
            
            <div className="flex flex-wrap gap-2 mt-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                getPriorityColor(task.priority)
              }`}>
                {task.priority} priority
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                getCategoryColor(task.category)
              }`}>
                <Tag size={12} className="inline mr-1" />
                {task.category}
              </span>
              {task.dueDate && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Calendar size={12} className="inline mr-1" />
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onEdit(task.id)}
            className="p-2 hover:bg-blue-50 hover:text-blue-600"
          >
            <Edit2 size={16} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onDelete(task.id)}
            className="p-2 hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
import { Task, FilterType } from '../types/task';

export const getPriorityColor = (priority: string) => {
  switch(priority) {
    case 'high': return 'bg-red-100 text-red-800 border-red-200';
    case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'low': return 'bg-green-100 text-green-800 border-green-200';
    default: return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getCategoryColor = (category: string) => {
  switch(category) {
    case 'work': return 'bg-blue-100 text-blue-800';
    case 'personal': return 'bg-purple-100 text-purple-800';
    case 'shopping': return 'bg-pink-100 text-pink-800';
    case 'health': return 'bg-emerald-100 text-emerald-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const filterTasks = (tasks: Task[], filter: FilterType, searchTerm: string) => {
  return tasks.filter(task => {
    const matchesFilter = filter === 'all' || 
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed) ||
      (filter === task.priority) ||
      (filter === task.category);
    
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });
};
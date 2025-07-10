export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'general' | 'work' | 'personal' | 'shopping' | 'health';
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'general' | 'work' | 'personal' | 'shopping' | 'health';
  dueDate: string;
}

export type FilterType = 'all' | 'completed' | 'pending' | 'high' | 'medium' | 'low' | 'work' | 'personal' | 'shopping' | 'health';
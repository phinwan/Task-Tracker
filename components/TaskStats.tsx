import React from 'react';
import { Task } from '../types/task';

interface TaskStatsProps {
  tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.filter(t => !t.completed).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="text-2xl font-bold text-blue-600">{totalTasks}</div>
        <div className="text-gray-600">Total Tasks</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="text-2xl font-bold text-green-600">{completedTasks}</div>
        <div className="text-gray-600">Completed</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="text-2xl font-bold text-orange-600">{pendingTasks}</div>
        <div className="text-gray-600">Pending</div>
      </div>
    </div>
  );
};
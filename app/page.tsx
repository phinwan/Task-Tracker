'use client';

import React, { useState } from 'react';
import { Task, TaskFormData, FilterType } from '../types/task';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { filterTasks } from '../utils/taskUtils';
import { Header } from '../components/Header';
import { TaskStats } from '../components/TaskStats';
import { SearchAndFilter } from '../components/SearchAndFilter';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTask = (taskData: TaskFormData) => {
    const newTask: Task = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
    setShowAddForm(false);
  };

  const updateTask = (id: number, taskData: TaskFormData) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...taskData } : task
    ));
    setEditingId(null);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id: number) => {
    setEditingId(id);
    setShowAddForm(false);
  };

  const editingTask = tasks.find(task => task.id === editingId);
  const filteredTasks = filterTasks(tasks, filter, searchTerm);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onAddTask={() => setShowAddForm(!showAddForm)} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {showAddForm && (
          <div className="mb-8">
            <TaskForm
              onSave={addTask}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}

        {editingTask && (
          <div className="mb-8">
            <TaskForm
              task={editingTask}
              onSave={(taskData) => updateTask(editingTask.id, taskData)}
              onCancel={() => setEditingId(null)}
            />
          </div>
        )}

        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filter={filter}
          onFilterChange={setFilter}
        />

        <TaskStats tasks={tasks} />

        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onEdit={handleEditTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}
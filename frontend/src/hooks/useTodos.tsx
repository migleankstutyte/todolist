import { useState } from 'react';

export type TTodoItem = {
  id: number;
  title: string;
  content: string;
  priority: 'minor' | 'major' | 'blocker';
  status: string;
  publishDate: string;
};

const useTodos = () => {
  const [todos, setTodos] = useState<TTodoItem[]>([]);
  const [todo, setTodo] = useState<TTodoItem>();
  const [isLoadingTodos, setIsLoadingTodos] = useState<boolean>(false);
  const [isCreatingTodo, setIsCreatingTodo] = useState<boolean>(false);
  const [isEditingTodo, setIsEditingTodo] = useState<boolean>(false);

  const createTodo = async (todo: TTodoItem) => {
    try {
      setIsCreatingTodo(true);
      const response = await fetch('http://localhost:3030/posts', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error(error);
    }
    setIsCreatingTodo(false);
  };

  const loadTodos = async () => {
    try {
      setIsLoadingTodos(true);
      const response = await fetch('http://localhost:3030/posts');
      setTodos(await response.json());
    } catch (error) {
      console.error(error);
    }
    setIsLoadingTodos(false);
  };

  const getTodo = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3030/posts/${id}`);
      setTodo(await response.json());
    } catch (error) {
      console.error(error);
    }
  };

  const editTodo = async (todo: TTodoItem) => {
    try {
      setIsEditingTodo(true);
      const response = await fetch(`http://localhost:3030/posts/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' },
      });
      setTodo(await response.json());
    } catch (error) {
      console.error(error);
    }
    setIsEditingTodo(false);
  };

  return {
    todo,
    todos,
    isLoadingTodos,
    isCreatingTodo,
    setIsCreatingTodo,
    createTodo,
    loadTodos,
    getTodo,
    editTodo,
    isEditingTodo,
    setIsEditingTodo,
  };
};

export default useTodos;

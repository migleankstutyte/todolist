import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useTodos, { TTodoItem } from 'src/hooks/useTodos';
import { TodoForm } from './TodoForm';

export const CreatePage = () => {
  const [todo, setTodo] = useState<TTodoItem>({});

  const navigate = useNavigate();

  const { createTodo, isCreatingTodo } = useTodos();

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTodo(todo);
    navigate('/todos'); // after submit navigate to TodoList page
  };

  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      loading={isCreatingTodo}
      todo={todo}
      setTodo={setTodo}
      submitLabel="Create"
    />
  );
};

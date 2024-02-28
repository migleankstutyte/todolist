import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTodos, { TTodoItem } from 'src/hooks/useTodos';
import { TodoForm } from './TodoForm';

export const EditPage = () => {
  const navigate = useNavigate();
  const { todo: currentTodo, getTodo, editTodo, isEditingTodo } = useTodos();

  const [todo, setTodo] = useState<TTodoItem>({});

  let { id } = useParams();

  useEffect(() => {
    if (id) getTodo(id);
    if (currentTodo) setTodo(currentTodo);
  }, [currentTodo?.id]);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(todo);
    navigate('/todos');
  };

  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      loading={isEditingTodo}
      todo={todo}
      setTodo={setTodo}
      submitLabel="Save"
    />
  );
};

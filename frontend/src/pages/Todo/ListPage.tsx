import { Badge, Button, Group, LoadingOverlay, Table } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import classes from './ToDo.module.css';
import useTodos from 'src/hooks/useTodos';
import { useEffect } from 'react';

export enum PriorityColors {
  minor = 'yellow',
  major = 'green',
  blocker = 'red',
}

export const ListPage = () => {
  const navigate = useNavigate();

  const { todos, loadTodos, isLoadingTodos } = useTodos();

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <section>
      <Group className={classes.actionButtonsContainer}>
        <Button component={Link} to="/todos/create">
          New item
        </Button>
      </Group>
      <LoadingOverlay
        visible={isLoadingTodos}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
      <Table className={classes.itemsTable}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Criticality</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Published at</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {todos.map((todo) => (
            <Table.Tr
              onClick={() => navigate(`/todos/${todo.id}`)}
              key={todo.id}
            >
              <Table.Td>{todo.title}</Table.Td>
              <Table.Td>
                {/* Extra points if you make badge different colors */}
                <Badge color={PriorityColors[todo.priority]}>
                  {todo.priority}
                </Badge>
              </Table.Td>
              <Table.Td>{todo.status}</Table.Td>
              <Table.Td>{todo.publishDate}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </section>
  );
};

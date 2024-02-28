import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge, Button, Table } from '@mantine/core';
import useTodos from 'src/hooks/useTodos';
import { PriorityColors } from './ListPage';
import classes from './ToDo.module.css';

export const ItemPage = () => {
  let { id } = useParams();

  const { todo, getTodo } = useTodos();

  // TODO Implement data query from backend
  // Get ToDo Item By ID
  useEffect(() => {
    if (id) getTodo(id);
  }, [id]);

  return (
    <section>
      <Link to="/todos">Go back</Link>
      {todo && (
        <>
          <h2>{todo.title}</h2>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Priority</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Content</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Badge color={PriorityColors[todo.priority]}>
                    {todo.priority}
                  </Badge>
                </Table.Td>
                <Table.Td>{todo.status}</Table.Td>
                <Table.Td>{todo.content}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </>
      )}
      <Button
        color="grey"
        component={Link}
        to={`/todos/edit/${id}`}
        className={classes.actionButton}
      >
        Edit
      </Button>
    </section>
  );
};

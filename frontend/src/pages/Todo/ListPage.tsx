import { Badge, Button, Group, Table } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import classes from './ToDo.module.css';

const elements = [
  {
    id: 1,
    title: 'my first item',
    content: "implement query to get all ToDo's",
    priority: 'blocker',
    status: 'pending',
    publishedAt: '2024-02-09T04:15:00.450Z',
  },
  {
    id: 2,
    title: 'my second item',
    content: 'implement ToDo item inner page',
    priority: 'major',
    status: 'pending',
    publishedAt: '2024-02-09T04:15:00.450Z',
  },
  {
    id: 3,
    title: 'my third item',
    content: 'fix routing',
    priority: 'blocker',
    status: 'pending',
    publishedAt: '2024-02-09T04:15:00.450Z',
  },
  {
    id: 4,
    title: 'my fourth item',
    content: 'implement some tests',
    priority: 'blocker',
    status: 'pending',
    publishedAt: '2024-02-09T04:15:00.450Z',
  },
  {
    id: 5,
    title: 'my fifth item',
    content: 'apply clean code principles',
    priority: 'blocker',
    status: 'pending',
    publishedAt: '2024-02-09T04:15:00.450Z',
  },
];

export const ListPage = () => {
  const navigate = useNavigate();

  // TODO Implement data query from backend

  return (
    <section>
      <Group className={classes.actionButtonsContainer}>
        <Button component={Link} to="/todos/create">
          New item
        </Button>
      </Group>
      <Table className={classes.itemsTable}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Title</Table.Th>
            <Table.Th>Criticality</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Publisher at</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {elements.map((element) => (
            <Table.Tr
              onClick={() => navigate(`/todos/${element.id}`)}
              key={element.title}
            >
              <Table.Td>{element.title}</Table.Td>
              <Table.Td>
                {/* Extra points if you make badge different colors */}
                <Badge>{element.priority}</Badge>
              </Table.Td>
              <Table.Td>{element.status}</Table.Td>
              <Table.Td>{element.publishedAt}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </section>
  );
};

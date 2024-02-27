import { Title, Text, Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

export const HomePage = () => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'pink', to: 'yellow' }}
        >
          ToDo{' '}
        </Text>
        Coding Challenge
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a starter project boilerplate for a basic coding challenge.
      </Text>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        You can find all the guidance and your tasks in readme
      </Text>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Go to{' '}
        <Anchor component={Link} to="/todos">
          ToDo task page
        </Anchor>
      </Text>
    </>
  );
};

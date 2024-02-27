import {
  Button,
  Group,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import React from 'react';
import classes from './ToDo.module.css';

export const CreatePage = () => {
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <Stack>
          <TextInput label="Title" name="title" />
          <Select label="Criticality" name="criticality" />
          <Select label="Status" name="status" />
        </Stack>
        <Group className={classes.actionButtonsContainer}>
          <Button variant="subtle">Cancel</Button>
          <Button type="submit">create</Button>
        </Group>
      </form>
    </section>
  );
};

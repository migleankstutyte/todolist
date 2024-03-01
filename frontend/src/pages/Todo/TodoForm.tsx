import {
  Button,
  Group,
  LoadingOverlay,
  Select,
  Stack,
  TextInput,
} from '@mantine/core';
import classes from './ToDo.module.css';
import { Link } from 'react-router-dom';
import { TTodoItem } from 'src/hooks/useTodos';

type TodoFormProps = {
  onFormSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  todo: TTodoItem;
  setTodo: (arg: TTodoItem) => void;
  submitLabel: string;
  formWasEdited?: boolean; // needed only for Edit Todo list item case
};
export const TodoForm = ({
  onFormSubmit,
  loading,
  todo,
  setTodo,
  submitLabel,
  formWasEdited = false,
}: TodoFormProps) => {
  const { title, priority, status, content } = todo;

  // added disabled check and passed it to submit button
  const disabled = !title || !priority || !status || !content || formWasEdited;

  return (
    <section>
      {/* adding LoadingOverlay while loading */}
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
      />
      <form onSubmit={onFormSubmit}>
        <Stack>
          <TextInput
            label="Title"
            name="title"
            value={todo.title || ''}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            required
          />
          <Select
            label="Criticality"
            name="criticality"
            data={['minor', 'major', 'blocker']}
            value={todo.priority || ''}
            onChange={(value) => setTodo({ ...todo, priority: value })}
            required
          />
          <Select
            label="Status"
            name="status"
            data={['pending', 'in progress', 'done']}
            value={todo.status || ''}
            onChange={(value) => setTodo({ ...todo, status: value })}
            required
          />
          <TextInput
            label="Content"
            name="content"
            value={todo.content || ''}
            onChange={(e) => setTodo({ ...todo, content: e.target.value })}
            required
          />
        </Stack>
        <Group className={classes.actionButtonsContainer}>
          <Button color="grey" component={Link} to="/todos">
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            {submitLabel}
          </Button>
        </Group>
      </form>
    </section>
  );
};

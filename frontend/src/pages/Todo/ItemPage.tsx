import { Link } from 'react-router-dom';

const item = {
  id: 1,
  title: 'my first item',
  content: "implement query to get all ToDo's",
  priority: 'blocker',
  status: 'pending',
};

export const ItemPage = () => {
  // TODO Implement data query from backend

  return (
    <section>
      <Link to="/todos">Go back</Link>
      <h2>{item.title}</h2>
      <p>{item.priority}</p>
      <p>{item.status}</p>
      <p>{item.content}</p>
    </section>
  );
};

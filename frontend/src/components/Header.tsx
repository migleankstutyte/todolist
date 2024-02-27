import { Anchor } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

const mainLinks = [
  { link: '/', label: 'Home' },
  { link: '/todos', label: "To-Do's" },
  { link: '/api-docs', label: 'api docs' },
];

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={classes.header}>
      {mainLinks.map((item) => (
        <Anchor
          component={Link}
          to={item.link}
          key={item.label}
          className={classes.mainLink}
          data-active={pathname === item.link ? true : undefined}
        >
          {item.label}
        </Anchor>
      ))}
    </header>
  );
};

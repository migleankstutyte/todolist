import { Outlet } from 'react-router-dom';
import { Container } from '@mantine/core';
import { Header } from './Header';

import classes from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Outlet />
      </Container>
    </>
  );
};

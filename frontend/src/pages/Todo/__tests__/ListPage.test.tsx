/** @jest-environment jsdom */

import 'jest';
import { render, screen } from '@testing-library/react';
import { ListPage } from '../ListPage';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

describe('List Page', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('should have New Item buttom', () => {
    render(
      <BrowserRouter>
        <MantineProvider>
          <ListPage />
        </MantineProvider>
      </BrowserRouter>,
    );

    const newItemButton = screen.getByRole('link', { name: 'New item' });

    expect(newItemButton).toBeInTheDocument();
  });
});

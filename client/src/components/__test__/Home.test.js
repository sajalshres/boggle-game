import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Home from '../Home';

afterEach(cleanup);

it('Title is rendered correctly', () => {
  const { getByText } = render(<Home />);

  expect(getByText(/Welcome/i).textContent).toBe('Welcome');
});

it('Rules is rendered correctly', () => {
  const { getByText } = render(<Home />);

  expect(getByText(/Rules/i).textContent).toBe('Rules');
});

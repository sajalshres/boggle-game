import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Footer from '../Footer';

afterEach(cleanup);

it('Title is rendered correctly', () => {
  const { getByText } = render(<Footer />);

  expect(getByText(/Made with/i).textContent).toBe('Made with ❤ by sajalshres');
});

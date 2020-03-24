import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('should be rendered correctly', () => {
    const history = createMemoryHistory();
    const { container, getByText, g } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(container.innerHTML).toMatch('Boggle');
  });
});

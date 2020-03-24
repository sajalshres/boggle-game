import React from 'react';
import { create } from 'react-test-renderer';

import Letter from '../Letter';

describe('Letter component', () => {
  it('should work as expected', () => {
    const letter = 'A';
    const key = 0;
    const row = 0;
    const col = 1;
    const appendInput = jest.fn();
    const component = create(
      <Letter
        letter={letter}
        key={key}
        row={row}
        col={col}
        appendInput={appendInput}
      />
    );

    const instance = component.root;
    const button = instance.findByType('button');
    button.props.onClick();
    expect(button.props.className).toEqual('letter');
    expect(button.props.row).toEqual(row);
    expect(button.props.col).toEqual(col);
    expect(button.props.children).toEqual(letter);
    expect(appendInput).toHaveBeenCalledWith(letter);
  });
});

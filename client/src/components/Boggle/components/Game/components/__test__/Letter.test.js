import React from 'react';
import { create } from 'react-test-renderer';

import Letter from '../Letter';

describe('Letter component', () => {
  let state;
  let component;
  let instance;

  beforeEach(() => {
    state = {
      letter: 'A',
      key: 0,
      row: 0,
      col: 1,
      appendInput: jest.fn()
    };
    component = create(<Letter {...state} />);
    instance = component.root;
  });

  it('should be instantiated properly', () => {
    expect(instance).toBeTruthy();
  });

  it('should have correct props', () => {
    const button = instance.findByType('button');
    expect(button.props.className).toEqual('letter');
    expect(button.props.row).toEqual(state.row);
    expect(button.props.col).toEqual(state.col);
    expect(button.props.children).toEqual(state.letter);
  });

  it('should call appendInput when onClick is triggered', () => {
    const button = instance.findByType('button');
    button.props.onClick();
    expect(state.appendInput).toHaveBeenCalledWith(state.letter);
  });
});

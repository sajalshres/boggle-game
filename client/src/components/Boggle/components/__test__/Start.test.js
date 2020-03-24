import React from 'react';
import { create } from 'react-test-renderer';

import Start from '../Start';

describe('Start component', () => {
  it('should work as expected', () => {
    const fetchGame = jest.fn();
    const component = create(<Start fetchGame={fetchGame} />);

    const instance = component.root;
    const button = instance.findByType('button');
    button.props.onClick();
    expect(button.props.className).toEqual('start-btn');
    expect(button.props.children).toEqual('Start');
    expect(fetchGame).toHaveBeenCalledWith();
  });
});

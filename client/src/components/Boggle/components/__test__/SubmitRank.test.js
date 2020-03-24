import React from 'react';
import { create } from 'react-test-renderer';

import SubmitRank from '../SubmitRank';

describe('SubmitRank component', () => {
  let total;
  let handleChange;
  let handleSubmit;
  let component;
  let instance;

  beforeEach(() => {
    total = 20;
    handleChange = jest.fn();
    handleSubmit = jest.fn();

    component = create(
      <SubmitRank
        total={total}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
    instance = component.root;
  });

  it('should work as expected', () => {
    expect(instance).toBeTruthy();
  });

  it('should render the score', () => {
    const score = instance.findByProps({
      className: 'submit-rank__score is-centered'
    }).children;
    expect(score).toEqual(['You scored: ', total.toString()]);
  });

  it('should render the input text bod', () => {
    const input = instance.findByType('input');
    expect(input.props.className).toEqual('submit-rank__input');
  });

  it('should call the handleChange on input change', () => {
    instance.props.handleChange('Test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('should render the submit button', () => {
    const button = instance.findByType('button');
    expect(button.props.className).toEqual('submit-rank__button');
    expect(button.props.children).toEqual('Submit');
  });

  it('shoudl call the handleSubmit onClick()', () => {
    const button = instance.findByType('button');
    button.props.onClick();
    expect(handleSubmit).toHaveBeenCalled();
  });
});

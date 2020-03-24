import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Total } from '../Total';

Enzyme.configure({ adapter: new Adapter() });

describe('Total component', () => {
  let wrapper;
  let timeLimit;
  let total;
  beforeEach(() => {
    timeLimit = 10;
    total = 30;
    wrapper = shallow(<Total timeLimit={timeLimit} total={total} />);
  });

  it('should be initialized correctly', () => {
    expect(wrapper.instance()).toBeTruthy();
  });

  it('should have currect state', () => {
    const instance = wrapper.instance();
    expect(instance.props.timeLimit).toEqual(timeLimit);
    expect(instance.props.total).toEqual(total);
    expect(instance.state.currentCount).toEqual(timeLimit);
  });

  it('should render correctly', () => {
    const totalProps = wrapper.getElements()[0].props;
    expect(totalProps.className).toEqual('total');
    expect(totalProps.children).toHaveLength(2);
  });
});

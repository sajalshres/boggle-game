import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Rank } from '../Rank';

Enzyme.configure({ adapter: new Adapter() });

describe('Rank component', () => {
  let initialState;
  let wrapper;
  beforeAll(() => {
    initialState = {
      ranks: [
        {
          user_name: 'test a',
          total_score: 10,
          words: 'hello world',
          created_at: '2020-03-23T12:09:30.209Z'
        },
        {
          user_name: 'test b',
          total_score: 20,
          words: 'sample word',
          created_at: '2020-03-22T10:05:30.709Z'
        },
        {
          user_name: 'test c',
          total_score: 5,
          words: 'lets pray',
          created_at: '2020-03-24T16:02:30.709Z'
        }
      ]
    };
    wrapper = shallow(
      <Rank fetchRank={jest.fn()} ranks={initialState.ranks} />
    );
  });
  it('should be initialized correctly', () => {
    expect(wrapper.instance().props.ranks).toEqual(initialState.ranks);
  });

  it('should call fetch rank methods', () => {
    const fetchRank = jest.fn();
    const rankWrapper = shallow(
      <Rank fetchRank={fetchRank} ranks={initialState.ranks} />
    );
    expect(fetchRank).toHaveBeenCalled();
  });

  it('getRanks method should work correctly', () => {
    expect(wrapper.instance().getRanks()).toHaveLength(3);
  });

  it('should have correct properties', () => {
    const rankProps = wrapper.getElements()[0].props;
    expect(rankProps.className).toEqual('rank');
    expect(rankProps.children).toHaveLength(2);
  });

  it('should render table', () => {
    expect(wrapper.find('.table').length).toBeGreaterThanOrEqual(1);
  });
});

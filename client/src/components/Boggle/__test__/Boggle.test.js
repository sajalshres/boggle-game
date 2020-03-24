import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Boogle } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Boggle Component', () => {
  let wrapper;
  let resetGame;
  let submitGame;
  let startGame;
  let boggleInstance;
  beforeEach(() => {
    resetGame = jest.fn();
    submitGame = jest.fn();
    startGame = jest.fn();
    wrapper = shallow(
      <Boogle
        resetGame={resetGame}
        submitGame={submitGame}
        startGame={startGame}
        fetchPending={false}
        totalScore={20}
        words={['hello', 'world']}
        gameStarted={false}
      />
    );
    boggleInstance = wrapper.instance();
  });
  it('should be initialized correctly', () => {
    expect(boggleInstance).toBeTruthy();
    expect(boggleInstance.state.scoreModalVisible).toBeFalsy();
    expect(boggleInstance.state.userName).toEqual('');
    expect(boggleInstance.state.game).toEqual({});
  });
  it('should have correct props', () => {
    expect(boggleInstance.props.fetchPending).toBeFalsy();
    expect(boggleInstance.props.totalScore).toEqual(20);
    expect(boggleInstance.props.words).toEqual(['hello', 'world']);
    expect(boggleInstance.props.gameStarted).toBeFalsy();
  });

  it('showScoreModal should set the modal to visible state', () => {
    boggleInstance.showScoreModal();
    expect(boggleInstance.state.scoreModalVisible).toBeTruthy();
  });

  it('hideScoreModal should set the modal to hidden state', () => {
    boggleInstance.hideScoreModal();
    expect(boggleInstance.state.scoreModalVisible).toBeFalsy();
  });

  it('handleUserInputChange should update the userName state', () => {
    const event = { target: { value: 'test' } };
    boggleInstance.handleUserInputChange(event);

    expect(boggleInstance.state.userName).toEqual('test');
  });

  it('handleSubmitRank should submit the game to api', () => {
    const event = { preventDefault: () => {} };
    boggleInstance.state.userName = 'test';
    boggleInstance.handleSubmitRank(event);
    expect(Object.keys(boggleInstance.state.game)).toHaveLength(3);
    expect(boggleInstance.state.scoreModalVisible).toBeFalsy();
  });

  it('handleClick should start the game', () => {
    const event = { preventDefault: () => {} };
    boggleInstance.handleClick(event);
    expect(startGame).toHaveBeenCalled();
  });

  it('should show modal on time out', () => {
    boggleInstance.onTimeOut();
    expect(boggleInstance.state.scoreModalVisible).toBeTruthy();
  });

  it('should be rendered properly', () => {
    expect(wrapper.props().className).toEqual('container');
    expect(wrapper.props().children).toHaveLength(4);
  });
});

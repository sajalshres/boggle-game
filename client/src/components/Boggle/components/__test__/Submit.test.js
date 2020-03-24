import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Submit } from '../Submit';
import submitGame from '../../../../redux/actions/submitGame';

Enzyme.configure({ adapter: new Adapter() });

describe('Submit component', () => {
  let state;
  let wrapper;
  let submitInstance;

  beforeEach(() => {
    state = {
      board: 'LTERXAGHAODPACAD',
      words: [],
      input: '',
      gameStarted: false,
      total: 0
    };
    wrapper = shallow(<Submit {...state} />);
    submitInstance = wrapper.instance();
  });

  it('should be initialized correctly', () => {
    expect(submitInstance).toBeTruthy();
  });

  it('should have props in correct state', () => {
    expect(submitInstance.props).toEqual({ ...state });
  });

  it('indexedBoard should return the indexed board', () => {
    const indexedBoard = submitInstance.indexedBoard(
      submitInstance.props.board
    );
    expect(Object.keys(indexedBoard)).toHaveLength(16);
    expect(indexedBoard).toBeInstanceOf(Object);
  });

  it('getMoves should return correct moves', () => {
    // When position is at right edge
    expect(submitInstance.getMoves(8)).toEqual([7, 3, 11, 4, 12]);

    // When position is at left edge
    expect(submitInstance.getMoves(5)).toEqual([6, 2, 10, 1, 9]);

    // When position is at top edge
    expect(submitInstance.getMoves(3)).toEqual([4, 8, 2, 6, 7]);

    // When position is at bottom edge
    expect(submitInstance.getMoves(15)).toEqual([16, 12, 14, 10, 11]);

    // When position is at right and top edge
    expect(submitInstance.getMoves(4)).toEqual([3, 7, 8]);

    // When position is at right and bottom edge
    expect(submitInstance.getMoves(16)).toEqual([15, 11, 12]);

    // When position is at left and top edge
    expect(submitInstance.getMoves(1)).toEqual([2, 6, 5]);

    // When position is at left and bottom edge
    expect(submitInstance.getMoves(3)).toEqual([4, 8, 2, 6, 7]);
    expect(() => submitInstance.getMoves(25)).toThrowError(TypeError);
  });

  it('isInputValid should validate when input is correct', () => {
    state.words = ['TAG', 'LAD'];
    state.input = 'DAD';
    wrapper = shallow(<Submit {...state} />);
    submitInstance = wrapper.instance();
    expect(submitInstance.isInputValid()).toBeTruthy();
  });

  it('isInputValid should invalid when input is wrong', () => {
    state.words = ['TAG', 'LAD'];
    state.input = 'HELLO';
    wrapper = shallow(<Submit {...state} />);
    submitInstance = wrapper.instance();
    expect(submitInstance.isInputValid()).toBeFalsy();
  });

  it('isAdjacentLetterValid should work properly', () => {
    let string = 'TAG';
    let pos = 2;
    const board = submitInstance.indexedBoard(submitInstance.props.board);

    let result = submitInstance.isAdjacentLetterValid(string, pos, board);
    expect(result).toBeTruthy();

    string = 'DAM';
    pos = 2;

    result = submitInstance.isAdjacentLetterValid(string, pos, board);
    expect(result).toBeFalsy();
  });

  it('should validate the word on handleClick', () => {
    state.words = ['TAG', 'LAD'];
    state.input = 'HELLO';
    const validateWord = jest.fn();
    const resetInput = jest.fn();
    const event = { preventDefault: () => {} };
    //const isInputValid = jest.fn()
    //isInputValid.mockReturnValue(true)
    wrapper = shallow(
      <Submit {...state} validateWord={validateWord} resetInput={resetInput} />
    );
    submitInstance = wrapper.instance();
    submitInstance.isInputValid = jest.fn();
    submitInstance.isInputValid.mockReturnValue(true);
    submitInstance.handleClick(event);
    expect(validateWord).toHaveBeenCalledWith(submitInstance.props.input);
    expect(resetInput).toHaveBeenCalled();
  });

  it('should be rendered properly', () => {
    expect(wrapper.props().className).toEqual('submit');
    expect(wrapper.props().children).toHaveLength(2);
    expect(wrapper.render()).toBeTruthy();
  });
});

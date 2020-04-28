import React from 'react';
import { shallow } from 'enzyme';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Keypad
        callOperator={jest.fn()}
        numbers={[]}
        operators={[]}
        setOperator={jest.fn()}
        updateDisplay={jest.fn()}
      />
    );
  });

  it('should render two <div />\'s', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('renders the values of the numbers', () => {
    wrapper.setProps({numbers: [0, 1, 2]});
    expect(wrapper.find('.numbers-container').text()).toEqual('012');
  })
});
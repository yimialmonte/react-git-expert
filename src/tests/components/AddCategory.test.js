import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategoy';

describe('Test on AddCategory Component', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    shallow(<AddCategory setCategories={setCategories} />);
  })

  test('Should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should change the text box', () => {
    const input = wrapper.find('input');
    const value = 'Hello';
    input.simulate('change', { target: { value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('Should not post info on submit', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: ' ' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should call setCategories and clean the form input', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Hello World' } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(input.text()).toBe('')
  })

});

import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategoy'

describe('Test on AddCategory Component', () => {

  const setCategories = () => {};

  test('Should show component correctly', () => {
    const wrapper = shallow( <AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  })

});

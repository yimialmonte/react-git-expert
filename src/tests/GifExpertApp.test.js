import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Test for component GifExpertApp', () => {

  test('Show show component correctly', () => {
    const wraper = shallow(<GifExpertApp />);
    expect(wraper).toMatchSnapshot();
  });

  test('Should show a list of items', () => {
    const categories = ['Michael', 'Lebron']
    const wraper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wraper).toMatchSnapshot();
    expect(wraper.find('GifGrid').length).toBe(categories.length);
  })
});

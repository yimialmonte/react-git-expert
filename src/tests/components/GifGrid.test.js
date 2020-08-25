import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test for component GifGrid', () => {
  const category = 'Hand';

  test('Should show component correctly', () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show items when load imagenes', () => {
    const gifs = [{ id: 'ABC', url: 'https//localhost', title: 'Title' }];

    useFetchGifs.mockReturnValue({ data: gifs, loading: false });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on <GifGridItem />', () => {
  const title = 'Title';
  const url = 'https://localhost/logo.png';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Should show the correct component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should have a paragraph with title', () => {
    const paragraph = wrapper.find('p');
    expect(paragraph.text().trim()).toBe(title);
  });

  test('Should image display correctly', () => {
    const image = wrapper.find('img');
    expect(image.props().src).toBe(url);
    expect(image.props().alt).toBe(title);
  })

  test('Should have animate__fadeIn class', () => {
    const element = wrapper.find('div');
    const className = element.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  })

});

import { getGifs } from '../../helpers/getGif';

describe('Test on getGifs fetch', () => {

  test('Should return ten items', async() => {
    const gifs = await getGifs('Jordan');
    expect(gifs.length).toBe(10);
  });

  test('Should return ten items', async() => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });

})

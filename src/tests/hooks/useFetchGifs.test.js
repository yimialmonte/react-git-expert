
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'
describe('Test on useFetchGifs hooks', () => {

  test('should return an initial value', async() => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Jordan') )
    const { loading, data } = result.current;
    await waitForNextUpdate()
    expect(loading).toBe(true)
    expect(data).toEqual([])
  })

  test('should return a list of images and loading true', async () => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Jordan') )
    await waitForNextUpdate()
    const { loading, data } = result.current;

    expect(loading).toBe(false)
    expect(data.length).toBe(10)
  })

})

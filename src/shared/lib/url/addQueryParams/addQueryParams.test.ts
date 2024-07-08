import { getQueryParams } from './addQueryParams'

describe('addQueryParams.test.ts', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      test: 'test'
    })

    expect(params).toBe('?test=test')
  })

  test('test with multiply params', () => {
    const params = getQueryParams({
      test: 'test',
      test2: 'test2'
    })

    expect(params).toBe('?test=test&test2=test2')
  })
})

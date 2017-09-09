import jsonView from '.'

test('says hello world', () => (
  expect(jsonView()).toBe('hello world')
))

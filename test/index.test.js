import test from 'ava'
import mapAll from '..'

const plus1 = (x) => x + 1
const appendIndex = (x, i) => x + `${i}`

test('should work given non-array mappers and Iterable parameters', t => {
  let iterable = {}
  let mapperIterable = {}
  mapperIterable[Symbol.iterator] = function* () {
    yield plus1
    yield appendIndex
    yield (x) => x + 2
  }
  iterable[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
  }
  t.deepEqual(mapAll(mapperIterable)(iterable), [ [2, 3, 4], ['10', '21', '32'], [3, 4, 5] ])
})

test('works as expected given [] as an iterable', t => {
  t.deepEqual(mapAll([plus1, appendIndex])([]), [[], []])
})

test('works as expected given [] as an iterable mapper and iterable', t => {
  t.deepEqual(mapAll([])([]), [])
})

test('works as expected given [] as an iterable mapper', t => {
  t.deepEqual(mapAll([])([1, 2, 3]), [])
})

test('should not affect either of the given iterables', t => {
  let mappers = [plus1, appendIndex]
  let arr = ['id1', 'id2', 'id1', 'id1']
  mapAll(mappers)(arr)
  t.deepEqual(mappers, [plus1, appendIndex])
  t.deepEqual(arr, ['id1', 'id2', 'id1', 'id1'])
})

test('Each mapper should be called with index as 2nd param', t => {
  t.deepEqual(mapAll([appendIndex])(['a', 'b']), [ ['a0', 'b1'] ])
})

test('Each mapper should be called with array iterating over as 3nd param', t => {
  t.deepEqual(mapAll([(el, idx, arr) => arr.join('|')])(['a', 'b']), [ ['a|b', 'a|b'] ])
})

test('works as expected when mappers return null / undefined', t => {
  t.deepEqual(mapAll([() => null, () => undefined])([1, 2, 3]), [ [null, null, null], [undefined, undefined, undefined] ])
})

test('sample data', t => {
  let arr = [
    'item_id1',
    'item_id1',
    'item_id2',
    'item_id3',
    'itemInstance_id1',
    'itemInstance_id2',
    'itemInstance_id3',
    'itemInstance_id4',
    'itemInstance_id5'
  ]
  t.deepEqual(mapAll([plus1, appendIndex, (x) => x.substring(4)])(arr), [
    [
      'item_id11',
      'item_id11',
      'item_id21',
      'item_id31',
      'itemInstance_id11',
      'itemInstance_id21',
      'itemInstance_id31',
      'itemInstance_id41',
      'itemInstance_id51'
    ],
    [
      'item_id10',
      'item_id11',
      'item_id22',
      'item_id33',
      'itemInstance_id14',
      'itemInstance_id25',
      'itemInstance_id36',
      'itemInstance_id47',
      'itemInstance_id58'
    ],
    [
      '_id1',
      '_id1',
      '_id2',
      '_id3',
      'Instance_id1',
      'Instance_id2',
      'Instance_id3',
      'Instance_id4',
      'Instance_id5'
    ]
  ])
})

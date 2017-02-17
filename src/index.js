/**
 * A Mapper is a similar callback to what you'd pass to [Array.map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 * @callback Mapper
 * @param  {*} currentValue The current element being processed in the array.
 * @param  {number} index The index of the current element being processed in the array.
 * @param  {Array<*>}  array The array map was called upon.
 */

/**
 * Calls each mapper obtained from `mapperIterable` on each element obtained from `iterable`.
 * In the given result, there is an array for each found mapper. The result of mapper[0] is at
 * result[0] etc…
 * @param  {Iterable<Mapper>} mappers  [description]
 * @param  {Iterable<*>} iterable [description]
 * @return {Array<Array<*>>}          [description]
 */
function mapAll (mappersIterable, iterable) {
  let mappers = Array.from(mappersIterable)
  let results = mappers.map(() => [])
  let arr = Array.from(iterable)
  return arr.reduce((acc, d, i) => {
    let nextResults = mappers.map(mapper => mapper(d, i, arr))
    nextResults.forEach((nextResult, i) => acc[i].push(nextResult))

    return acc
  }, results)
}

module.exports = mapAll

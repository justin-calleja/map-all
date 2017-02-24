/**
 * @module @justinc/map-all
 */

/**
 * Calls each mapper obtained from `mappers` on each element obtained from `iterable`.
 * In the given result, there is an array for each found mapper. The result of mappers[0] is at
 * results[0] etc…
 * @param  {Iterable<Mapper>} mappers
 * @param  {Iterable<*>} iterable
 * @return {Array<Array<*>>}
 * @see {@link module:@justinc/jsdocs.Mapper}
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

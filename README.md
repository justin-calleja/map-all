# `map-all` [![NPM version][version-image]][version-url] [![License][license-image]][license-url] [![Js Standard Style][standard-image]][standard-url]

Run multiple map functions against an [Iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) in one go. There must be better (more composable) ways of doing this. Temporary solution until I figure out how.

## Install

`npm i @justinc/map-all`

### Example of usage

```js
const mapAll = require('@justinc/map-all')
mapAll([(x) => x + 1, (x) => x + 2], [1, 2, 3])
// [ [2, 3, 4], [3, 4, 5] ]

```

## Functions

<dl>
<dt><a href="#mapAll">mapAll(mappers, iterable)</a> ⇒ <code>Array.&lt;Array.&lt;*&gt;&gt;</code></dt>
<dd><p>Calls each mapper obtained from <code>mapperIterable</code> on each element obtained from <code>iterable</code>.
In the given result, there is an array for each found mapper. The result of mapper[0] is at
result[0] etc…</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Mapper">Mapper</a> : <code>function</code></dt>
<dd><p>A Mapper is a similar callback to what you&#39;d pass to <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.map</a></p>
</dd>
</dl>

<a name="mapAll"></a>

## mapAll(mappers, iterable) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
Calls each mapper obtained from `mapperIterable` on each element obtained from `iterable`.
In the given result, there is an array for each found mapper. The result of mapper[0] is at
result[0] etc…

**Kind**: global function  
**Returns**: <code>Array.&lt;Array.&lt;\*&gt;&gt;</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| mappers | <code>[Iterable.&lt;Mapper&gt;](#Mapper)</code> | [description] |
| iterable | <code>Iterable.&lt;\*&gt;</code> | [description] |

<a name="Mapper"></a>

## Mapper : <code>function</code>
A Mapper is a similar callback to what you'd pass to [Array.map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| currentValue | <code>\*</code> | The current element being processed in the array. |
| index | <code>number</code> | The index of the current element being processed in the array. |
| array | <code>Array.&lt;\*&gt;</code> | The array map was called upon. |


[version-image]: https://img.shields.io/npm/v/@justinc/map-all.svg?style=flat-square
[version-url]: https://npmjs.org/package/@justinc/map-all

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-url]: ./LICENSE

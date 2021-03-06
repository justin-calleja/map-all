# `map-all` [![NPM version][version-image]][version-url] [![License][license-image]][license-url] [![Js Standard Style][standard-image]][standard-url]

Run multiple map functions against an [Iterable](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) in one go.

## Install

`npm i @justinc/map-all`

### Example of usage

```js
const mapAll = require('@justinc/map-all')
// `mapAll` is curried in v2 onwards (see curry tutorial)
mapAll([(x) => x + 1, (x) => x + 2])([1, 2, 3])
// [ [2, 3, 4], [3, 4, 5] ]
```

### Tutorials

TODO: A JSDoc 3 tutorial (re currying) needs to be injected in this README.md. For now there's only a link:

* tutorial: [curry.md](https://github.com/justin-calleja/jsdocs/blob/master/tutorials/curry.md)
* issue: [jsdoc2md/jsdoc-to-markdown#115](https://github.com/jsdoc2md/jsdoc-to-markdown/issues/115)

## Modules

<dl>
<dt><a href="#module_@justinc/map-all">@justinc/map-all</a></dt>
<dd></dd>
<dt><a href="#module_@justinc/jsdocs">@justinc/jsdocs</a></dt>
<dd><p>This module houses JSDoc 3 type definitions which can be re-used in different packages.</p>
</dd>
</dl>

<a name="module_@justinc/map-all"></a>

## @justinc/map-all
<a name="module_@justinc/map-all..mapAll"></a>

### @justinc/map-all~mapAll(mappers, iterable) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
This function is curried.
Calls each mapper obtained from `mappers` on each element obtained from `iterable`.
In the given result, there is an array for each found mapper. The result of mappers[0] is at
results[0] etc…

**Kind**: inner method of <code>[@justinc/map-all](#module_@justinc/map-all)</code>  
**See**: [Mapper](#module_@justinc/jsdocs.Mapper)  

| Param | Type |
| --- | --- |
| mappers | <code>Iterable.&lt;Mapper&gt;</code> | 
| iterable | <code>Iterable.&lt;\*&gt;</code> | 

<a name="module_@justinc/jsdocs"></a>

## @justinc/jsdocs
This module houses JSDoc 3 type definitions which can be re-used in different packages.

<a name="module_@justinc/jsdocs.Mapper"></a>

### @justinc/jsdocs.Mapper ⇒ <code>Array.&lt;Y&gt;</code>
A function of type Mapper is a similar function to what you'd pass to [Array.map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: static typedef of <code>[@justinc/jsdocs](#module_@justinc/jsdocs)</code>  
**Template**: X,Y  

| Param | Type | Description |
| --- | --- | --- |
| currentValue | <code>X</code> | The current element being processed in the array. |
| index | <code>number</code> | The index of the current element being processed in the array. |
| array | <code>Array.&lt;X&gt;</code> | The array map was called upon. |

**Example**  
```js
const appendIndex = (x, i) => x + `${i}`
;[1, 2, 3].map(appendIndex)
// gives: ['10', '21', '32']
```

[version-image]: https://img.shields.io/npm/v/@justinc/map-all.svg?style=flat-square
[version-url]: https://npmjs.org/package/@justinc/map-all

[standard-image]: https://img.shields.io/badge/code-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard

[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-url]: ./LICENSE

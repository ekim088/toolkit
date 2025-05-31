[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / memoizeOne

# Function: memoizeOne()

> **memoizeOne**\<`T`\>(`fn`, `equalityFn?`): [`MemoizedFn`](../type-aliases/MemoizedFn.md)\<`T`\>

Defined in: [memoizeOne.ts:31](https://github.com/ekim088/toolkit/blob/3865ce9c006f2b33f0fd65a427db970a598ee1af/src/memoizeOne.ts#L31)

Returns a memoized function that caches the last result of a function call.
The cached result is returned if the function arguments remain the same. Only
a single result is ever cached.

## Type Parameters

### T

`T` _extends_ (...`args`) => `unknown`

## Parameters

### fn

`T`

The function to memoize.

### equalityFn?

[`EqualityFn`](../type-aliases/EqualityFn.md)\<`T`\>

A custom function to check equality between the
current arguments and the cached arguments. Arguments are considered equal
if the equality function returns `true`.

## Returns

[`MemoizedFn`](../type-aliases/MemoizedFn.md)\<`T`\>

The memoized function.

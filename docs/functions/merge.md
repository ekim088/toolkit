[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / merge

# Function: merge()

> **merge**\<`T`\>(...`objects`): [`Merged`](../type-aliases/Merged.md)\<`T`\>

Defined in: [merge.ts:16](https://github.com/ekim088/toolkit/blob/3865ce9c006f2b33f0fd65a427db970a598ee1af/src/merge.ts#L16)

Deeply merges a list of objects into a single object. For duplicate
properties, subsequent occurrences overwrite the previous.

## Type Parameters

### T

`T` _extends_ `object`[]

## Parameters

### objects

...`T`

Any number of object literals to merge.

## Returns

[`Merged`](../type-aliases/Merged.md)\<`T`\>

A new object with the properties of its source objects.

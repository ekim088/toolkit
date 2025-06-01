[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / pick

# Function: pick()

> **pick**\<`T`\>(`obj`, `predicate`): `Partial`\<`T`\>

Defined in: [pick.ts:11](https://github.com/ekim088/toolkit/blob/main/src/pick.ts#L11)

Returns an object with only the properties that pass a given test.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### obj

`T`

The object to parse.

### predicate

(`val`, `key`) => `boolean`

A test function called against each object
property. Properties that return a falsy result will not be included.

## Returns

`Partial`\<`T`\>

A new object containing only the properties that passed the
test.

[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / createObjectFactory

# Function: createObjectFactory()

> **createObjectFactory**\<`T`\>(`defaultObj`): [`ObjectFactoryFn`](../type-aliases/ObjectFactoryFn.md)\<`T`\>

Defined in: [createObjectFactory.ts:25](https://github.com/ekim088/toolkit/blob/main/src/createObjectFactory.ts#L25)

Creates a factory function that returns an object of a given type.

## Type Parameters

### T

`T` _extends_ `object`

## Parameters

### defaultObj

`T`

The default object to return when calling the
factory function.

## Returns

[`ObjectFactoryFn`](../type-aliases/ObjectFactoryFn.md)\<`T`\>

A factory function that returns a new object of a given
type. Accepts an object argument that shallowly overrides properties on the
default object.

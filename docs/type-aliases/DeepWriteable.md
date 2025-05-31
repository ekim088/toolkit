[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / DeepWriteable

# Type Alias: DeepWriteable\<T\>

> **DeepWriteable**\<`T`\> = `{ -readonly [P in keyof T]: DeepWriteable<T[P]> }`

Defined in: [typeUtils.ts:23](https://github.com/ekim088/toolkit/blob/3865ce9c006f2b33f0fd65a427db970a598ee1af/src/typeUtils.ts#L23)

Makes a readonly object and all nested objects mutable.

## Type Parameters

### T

`T`

[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / RecursivePartial

# Type Alias: RecursivePartial\<T\>

> **RecursivePartial**\<`T`\> = `{ [P in keyof T]?: T[P] extends Record<keyof any, unknown> ? RecursivePartial<T[P]> : T[P] }`

Defined in: [typeUtils.ts:9](https://github.com/ekim088/toolkit/blob/3865ce9c006f2b33f0fd65a427db970a598ee1af/src/typeUtils.ts#L9)

Declares an object and its nested objects as partials.

## Type Parameters

### T

`T`

[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / RecursivePartial

# Type Alias: RecursivePartial\<T\>

> **RecursivePartial**\<`T`\> = `{ [P in keyof T]?: T[P] extends Record<keyof any, unknown> ? RecursivePartial<T[P]> : T[P] }`

Defined in: [typeUtils.ts:4](https://github.com/ekim088/toolkit/blob/main/src/typeUtils.ts#L4)

Declares an object and its nested objects as partials.

## Type Parameters

### T

`T`

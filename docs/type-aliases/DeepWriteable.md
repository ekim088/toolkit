[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / DeepWriteable

# Type Alias: DeepWriteable\<T\>

> **DeepWriteable**\<`T`\> = `{ -readonly [P in keyof T]: DeepWriteable<T[P]> }`

Defined in: [typeUtils.ts:27](https://github.com/ekim088/toolkit/blob/main/src/typeUtils.ts#L27)

Makes a readonly object and all nested objects mutable.

## Type Parameters

### T

`T`

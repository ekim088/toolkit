[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / Merged

# Type Alias: Merged\<T\>

> **Merged**\<`T`\> = `T` _extends_ \[infer FirstObj, `...(infer Rest)`\] ? `FirstObj` & `Merged`\<`Rest` _extends_ `object`[] ? `Rest` : \[\]\> : `object`

Defined in: [merge.ts:3](https://github.com/ekim088/toolkit/blob/main/src/merge.ts#L3)

## Type Parameters

### T

`T` _extends_ `object`[]

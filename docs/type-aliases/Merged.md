[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / Merged

# Type Alias: Merged\<T\>

> **Merged**\<`T`\> = `T` _extends_ \[infer FirstObj, `...(infer Rest)`\] ? `FirstObj` & `Merged`\<`Rest` _extends_ `object`[] ? `Rest` : \[\]\> : `object`

Defined in: [merge.ts:3](https://github.com/ekim088/toolkit/blob/3865ce9c006f2b33f0fd65a427db970a598ee1af/src/merge.ts#L3)

## Type Parameters

### T

`T` _extends_ `object`[]

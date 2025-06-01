[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / ValueOf

# Type Alias: ValueOf\<T\>

> **ValueOf**\<`T`\> = `T` _extends_ infer U[] ? `U` : `T` _extends_ `object` ? `T`\[keyof `T`\] : `never`

Defined in: [typeUtils.ts:13](https://github.com/ekim088/toolkit/blob/main/src/typeUtils.ts#L13)

Derives the item type from an array or object.

## Type Parameters

### T

`T`

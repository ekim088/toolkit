[**@ekim088/toolkit**](../README.md)

---

[@ekim088/toolkit](../README.md) / truthy

# Function: truthy()

> **truthy**\<`TruthyValue`\>(`value`): `value is TruthyValue`

Defined in: truthy.ts:12

Tests if a value is truthy. Can be passed as the callback to an Array
`filter()` method to correctly infer the type of the resulting array items.

```
const arr: (string | undefined)[] = [];
const truthyArr1: string[] = arr.filter(Boolean); // TS error
const truthyArr2: string[] = arr.filter(truthy); // no TS error
```

## Type Parameters

### TruthyValue

`TruthyValue`

## Parameters

### value

The value to test.

`undefined` | `null` | `false` | `""` | `0` | `TruthyValue`

## Returns

`value is TruthyValue`

`true` if the value is truthy.

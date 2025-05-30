/**
 * Derives the item type from an array.
 */
export type ItemType<T> = T extends (infer U)[] ? U : never;

/**
 * Declares an object and its nested objects as partials.
 */
export type RecursivePartial<T> = {
	[P in keyof T]?: T[P] extends Record<keyof any, unknown>
		? RecursivePartial<T[P]>
		: T[P];
};

/**
 * Makes a readonly object mutable.
 */
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

/**
 * Makes a readonly object and all nested objects mutable.
 */
export type DeepWriteable<T> = {
	-readonly [P in keyof T]: DeepWriteable<T[P]>;
};

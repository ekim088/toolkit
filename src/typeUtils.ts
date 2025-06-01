/**
 * Declares an object and its nested objects as partials.
 */
export type RecursivePartial<T> = {
	[P in keyof T]?: T[P] extends Record<keyof any, unknown>
		? RecursivePartial<T[P]>
		: T[P];
};

/**
 * Derives the item type from an array or object.
 */
export type ValueOf<T> = T extends (infer U)[]
	? U
	: T extends object
		? T[keyof T]
		: never;

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

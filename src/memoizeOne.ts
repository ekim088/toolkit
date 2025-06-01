import { isDeepEqual } from './isDeepEqual';

export type MemoizedFn<T extends (...args: any) => unknown> = T & {
	/**
	 * Clears the cached function result.
	 */
	clear(): void;
};

export type EqualityFn<T extends (...args: any) => unknown> = (
	newArgs: Parameters<T>,
	cachedArgs: Parameters<T>
) => boolean;

type MemoCache<T extends (...args: any) => unknown> = {
	cachedThis: ThisParameterType<T>;
	cachedArgs: Parameters<T>;
	cachedResult: ReturnType<T>;
};

/**
 * Returns a memoized function that caches the last result of a function call.
 * The cached result is returned if the function arguments remain the same. Only
 * a single result is ever cached.
 * @param {Function} fn The function to memoize.
 * @param {Function} equalityFn A custom function to check equality between the
 *  current arguments and the cached arguments. Arguments are considered equal
 *  if the equality function returns `true`.
 * @returns {Function} The memoized function.
 */
export function memoizeOne<T extends (...args: any) => unknown>(
	fn: T,
	equalityFn?: EqualityFn<T>
): MemoizedFn<T> {
	let cache: MemoCache<T> | null = null;

	function memoizedFn(this: ThisParameterType<T>, ...args: Parameters<T>) {
		if (
			cache &&
			cache.cachedThis === this &&
			(equalityFn
				? equalityFn(args, cache.cachedArgs)
				: isDeepEqual(args, cache.cachedArgs))
		) {
			return cache.cachedResult;
		}

		cache = {
			cachedThis: this,
			cachedArgs: args,
			cachedResult: fn.apply(this, args) as ReturnType<T>,
		};

		return cache.cachedResult;
	}
	memoizedFn.clear = () => {
		cache = null;
	};

	return memoizedFn as MemoizedFn<T>;
}

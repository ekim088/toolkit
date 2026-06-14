export type DebouncedFn<T extends (...args: any) => unknown> = ((
	...args: Parameters<T>
) => void) & {
	/**
	 * Cancels any pending invocation without calling the function.
	 */
	cancel(): void;

	/**
	 * Immediately invokes any pending call and cancels the timer.
	 * @returns The return value of the pending call, or `undefined` if none
	 * 	was pending.
	 */
	flush(): ReturnType<T> | undefined;
};

/**
 * Returns a debounced function that delays invocation until the function has
 * reached a steady state for a defined delay period.
 * @param fn The function to debounce.
 * @param delay The number of milliseconds to wait before calling the function.
 * @returns The debounced function. `cancel()` can be called on the function to
 * 	cancel any pending calls, and `flush()` can be called to immediately call
 * 	the function.
 */
export function debounce<T extends (...args: any) => unknown>(
	fn: T,
	delay: number
): DebouncedFn<T> {
	let timer: ReturnType<typeof setTimeout> | null = null;
	let pendingThis: ThisParameterType<T>;
	let pendingArgs: Parameters<T> | null = null;

	const invoke = (): ReturnType<T> => {
		const thisArg = pendingThis;
		const args = pendingArgs as Parameters<T>;
		pendingThis = undefined as ThisParameterType<T>;
		pendingArgs = null;

		return fn.apply(thisArg, args) as ReturnType<T>;
	};

	function debounced(this: ThisParameterType<T>, ...args: Parameters<T>) {
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		pendingThis = this;
		pendingArgs = args;

		if (timer !== null) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			timer = null;

			if (pendingArgs !== null) {
				invoke();
			}
		}, delay);
	}

	debounced.cancel = () => {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}

		pendingThis = undefined as ThisParameterType<T>;
		pendingArgs = null;
	};

	debounced.flush = (): ReturnType<T> | undefined => {
		if (timer !== null) {
			clearTimeout(timer);
			timer = null;
		}

		return pendingArgs !== null ? invoke() : undefined;
	};

	return debounced as DebouncedFn<T>;
}

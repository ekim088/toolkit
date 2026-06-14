import { type Mock } from 'vitest';
import { debounce, type DebouncedFn } from '../debounce.js';

describe('debounce', () => {
	let debounced: DebouncedFn<typeof mockDebouncedFn>;
	let mockDebouncedFn: Mock;

	beforeEach(() => {
		vi.useFakeTimers();
		mockDebouncedFn = vi.fn();
		debounced = debounce(mockDebouncedFn, 100);
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	it('should not invoke the function before the wait has elapsed', () => {
		debounced();
		vi.advanceTimersByTime(99);
		expect(mockDebouncedFn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(1);
		expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
	});

	it('should invoke only once for calls within the wait window', () => {
		debounced();
		debounced();
		debounced();
		vi.advanceTimersByTime(100);
		expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
	});

	it('should invoke with the most recent context and arguments', () => {
		const firstContext = {};
		const secondContext = {};
		debounced.call(firstContext, 'a');
		debounced.call(secondContext, 'b');
		vi.advanceTimersByTime(100);

		expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
		expect(mockDebouncedFn).toHaveBeenLastCalledWith('b');
		expect(mockDebouncedFn.mock.contexts[0]).toBe(secondContext);
	});

	it('should reset the wait window on each call', () => {
		debounced();
		vi.advanceTimersByTime(80);
		debounced();
		vi.advanceTimersByTime(80);
		expect(mockDebouncedFn).not.toHaveBeenCalled();

		vi.advanceTimersByTime(20);
		expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
	});

	describe('cancel', () => {
		it('should prevent a pending invocation', () => {
			debounced();
			debounced.cancel();
			vi.advanceTimersByTime(100);
			expect(mockDebouncedFn).not.toHaveBeenCalled();
		});

		it('should be safe to call when nothing is pending', () => {
			expect(() => debounced.cancel()).not.toThrow();
		});
	});

	describe('flush', () => {
		it('should immediately invoke a pending call', () => {
			debounced('a');
			debounced.flush();
			expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
			expect(mockDebouncedFn).toHaveBeenLastCalledWith('a');
		});

		it('should return the result of the flushed invocation', () => {
			const summed = debounce((a: number, b: number) => a + b, 100);
			summed(2, 3);
			expect(summed.flush()).toBe(5);
		});

		it('should return undefined when no call is pending', () => {
			expect(debounced.flush()).toBeUndefined();
		});

		it('should not invoke again after flushing', () => {
			debounced();
			debounced.flush();
			vi.advanceTimersByTime(100);
			expect(mockDebouncedFn).toHaveBeenCalledTimes(1);
		});

		it('should do nothing when no call is pending', () => {
			debounced.flush();
			expect(mockDebouncedFn).not.toHaveBeenCalled();
		});
	});
});

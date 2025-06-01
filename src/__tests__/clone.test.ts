import { clone } from '../clone';

describe('clone', () => {
	it('should clone an object', () => {
		const source = {
			id: 1,
			name: 'Root Object',
			isActive: true,
			metadata: {
				tags: ['example', 'nested', 42],
				flags: {
					visible: true,
					archived: false,
					notes: null,
				},
				dimensions: {
					width: 100.5,
					height: 200.75,
					units: 'px',
				},
			},
			content: {
				paragraphs: [
					{
						id: 'p1',
						text: 'This is the first paragraph.',
						words: ['This', 'is', 'the', 'first', 'paragraph'],
					},
					{
						id: 'p2',
						text: 'This is the second paragraph.',
						words: ['This', 'is', 'the', 'second', 'paragraph'],
						metadata: {
							sentiment: 'positive',
							score: 0.87,
						},
					},
				],
				attachments: [
					{
						type: 'image',
						src: 'https://example.com/image.png',
						size: {
							width: 800,
							height: 600,
						},
						alt: null,
					},
					{
						type: 'document',
						filename: 'report.pdf',
						sizeKB: 1234,
						encrypted: true,
					},
				],
			},
			nestedLevels: {
				level1: {
					level2: {
						level3: {
							level4: {
								message: 'Deeply nested value',
								value: [1, { a: 2 }, [3, 4]],
							},
						},
					},
				},
			},
		};
		const cloned = clone(source);

		expect(cloned).toEqual(source);
		expect(cloned).not.toBe(source);
	});

	it('should clone an array', () => {
		const source = [
			42,
			'hello',
			true,
			null,
			undefined,
			{ a: 1, b: 'text' },
			[1, 2, 3],
			Symbol('id'),
			BigInt(9007199254740991),
		];
		const cloned = clone(source);

		expect(cloned).toEqual(source);
		expect(cloned).not.toBe(source);
	});

	it.each(['str', 1, false, Symbol('id'), BigInt(9007199254740991)])(
		'should clone primitive "%s"',
		value => {
			expect(clone(value)).toBe(value);
		}
	);

	it('should clone a date', () => {
		const source = new Date('1/1/2025');
		const cloned = clone(source);

		expect(cloned).toEqual(source);
		expect(cloned).not.toBe(source);
	});

	describe('functions', () => {
		it('should clone a function', () => {
			const sum = (a: number, b: number): number => a + b;
			const clonedSum = clone(sum);

			expect(clonedSum(4, 9)).toBe(sum(4, 9));
			expect(sum).not.toBe(clonedSum);
		});

		it('should copy properties on the original function to the cloned function', () => {
			const mockFn = (a: number, b: number): number => a + b;
			mockFn.foo = 'bar';

			expect(clone(mockFn).foo).toBe('bar');
		});

		it('should clone object properties on the original function', () => {
			const mockFn = (a: number, b: number): number => a + b;
			mockFn.someObj = { a: 1 };
			const clonedFn = clone(mockFn);

			expect(clonedFn.someObj).toEqual(mockFn.someObj);
			expect(clonedFn.someObj).not.toBe(mockFn.someObj);
		});
	});
});

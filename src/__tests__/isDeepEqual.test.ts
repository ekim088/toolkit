import clone from '../clone';
import isDeepEqual from '../isDeepEqual';

describe('isDeepEqual', () => {
	const mockDate = new Date();
	const mockFn = () => {};
	let deeplyNestedObject: any;

	beforeEach(() => {
		deeplyNestedObject = {
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
	});

	it.each([
		['', ''],
		[0, 0],
		[false, false],
		[{}, {}],
		[[], []],
		[
			[1, { a: 1 }, 3],
			[1, { a: 1 }, 3],
		],
		[null, null],
		[undefined, undefined],
		[mockDate, mockDate],
		[mockFn, mockFn],
	])('should return true for %s and %s', (a, b) => {
		expect(isDeepEqual(a, b)).toBe(true);
	});

	it.each([
		['a', ''],
		[1, 0],
		[true, false],
		[{ a: 1 }, {}],
		[
			{ a: 1, b: 2 },
			{ a: 1, b: 2, c: 3 },
		],
		[[0], []],
		[
			[1, 2, 3],
			[1, 2, 3, 4],
		],
		[
			[1, { a: 1 }, 3],
			[1, { a: 2 }, 3],
		],
		[null, undefined],
		[new Date('1/1/2025'), new Date('1/1/2025')],
		[() => {}, () => {}],
	])('should return false for %s and %s', (a, b) => {
		expect(isDeepEqual(a, b)).toBe(false);
	});

	it('should return true for 2 deeply nested objects that are deeply equal', () => {
		expect(isDeepEqual(deeplyNestedObject, clone(deeplyNestedObject))).toBe(
			true
		);
	});

	it('should return false for 2 deeply nested objects that are not deeply equal', () => {
		const objToCompare = clone(deeplyNestedObject);
		objToCompare.content.paragraphs[1].text = 'some text';

		expect(isDeepEqual(deeplyNestedObject, objToCompare)).toBe(false);
	});
});

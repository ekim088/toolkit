import { createObjectFactory } from '../createObjectFactory';

describe('createObjectFactory', () => {
	type TestObject = {
		id: number;
		name: string;
		isActive: boolean;
		tags: string[];
		meta: { created: Date; updated?: Date };
		optionalField?: number;
	};

	const defaultTestObject: TestObject = {
		id: 0,
		name: 'Some Name',
		isActive: false,
		tags: ['some tag'],
		meta: {
			created: new Date('1/1/2025'),
			updated: new Date('1/1/2025'),
		},
	};
	const testObjectFactory = createObjectFactory(defaultTestObject);

	it('should return a copy of the default object', () => {
		const newObj = testObjectFactory();

		expect(newObj).toEqual(defaultTestObject);
		expect(newObj).not.toBe(defaultTestObject);
	});

	it('should accept overrides to the default object and merge shallowly by default', () => {
		const newObj = testObjectFactory({
			id: 1,
			isActive: true,
			tags: ['new tag'],
			meta: {
				created: new Date('2/2/2025'),
			},
		});

		expect(newObj).toEqual({
			id: 1,
			name: 'Some Name',
			isActive: true,
			tags: ['new tag'],
			meta: {
				created: new Date('2/2/2025'),
			},
		});
	});

	it('should not reflect updates to the original default object when creating new objects', () => {
		const defaultObj = { a: 1 };
		const objFactory = createObjectFactory(defaultObj);
		(defaultObj as any).b = 2;

		expect(objFactory()).toEqual({ a: 1 });
	});

	describe('factory function configuration', () => {
		it('should deeply merge overrides when mergeDeep = true', () => {
			const newObj = testObjectFactory(
				{
					id: 1,
					isActive: true,
					tags: ['new tag'],
					meta: {
						created: new Date('2/2/2025'),
					},
				},
				{ mergeDeep: true }
			);

			expect(newObj).toEqual({
				id: 1,
				name: 'Some Name',
				isActive: true,
				tags: ['some tag', 'new tag'],
				meta: {
					created: new Date('2/2/2025'),
					updated: new Date('1/1/2025'),
				},
			});
		});
	});
});

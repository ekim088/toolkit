import fs from 'fs';
import * as toolkit from '..';

const ignoredFiles = ['__tests__', 'index.ts', 'typeUtils.ts'];
const getAllUtilityFunctions = (): Promise<string[]> =>
	new Promise((resolve, reject) => {
		fs.readdir('src', (err, files) => {
			if (err) {
				reject(err);
				return;
			}

			const utils: string[] = files
				.filter(file => !ignoredFiles.includes(file))
				.map(file => file.replace('.ts', ''));
			resolve(utils);
		});
	});

describe('index', async () => {
	it.each(await getAllUtilityFunctions())(
		'should export the "%s" utility',
		util => {
			expect(typeof toolkit[util as keyof typeof toolkit]).toBe(
				'function'
			);
		}
	);
});

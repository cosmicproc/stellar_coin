import { info, enter, mul, select, selectOption, toggle, cond } from './calcUtils';

export const calcParameters = [
	enter('CPU Core Count', 'The count of the CPU cores your computer will have.'),
	enter('RAM Size (GB)', 'The size of the RAM your computer will have in GBs.'),
	enter('Disk Size (GB)', 'The size of the disk your computer will have in GBs.', 0, 10000),
	select('Operating System', undefined, [
		selectOption('Microsoft Windows', 100),
		selectOption('Fedora'),
		selectOption('Ubuntu')
	]),
	toggle('Also add a monitor', 'Also get a monitor alongside the computer.')
];
export const calcResult = (...args: number[]) =>
	args[0] * 100 + args[1] * 10 + args[2] * 0.5 + args[3] + args[4] * 800;

export const calcDetail = (...args: number[]) => [
	info(mul(args[0], 100), 'CPU'),
	info(mul(args[1], 10), 'RAM'),
	info(mul(args[2], 0.5), 'Disk'),
	cond(args[3], info(100, 'OS')),
	cond(args[4], info(800, 'Monitor'))
];

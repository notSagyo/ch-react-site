export function classList(...args: Array<string>) {
	return args.reduce((classList, currentClass) =>
		`${classList} ${currentClass}`, '');
}

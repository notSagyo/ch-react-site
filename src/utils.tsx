export function classes(...args: Array<string>) {
	return args.reduce((classList, currentClass) =>
		`${classList} ${currentClass}`, '');
}

export function classList(...args: Array<string | undefined>) {
	return args.reduce((classList, currentClass) =>
		`${classList} ${currentClass || ''}`, '');
}

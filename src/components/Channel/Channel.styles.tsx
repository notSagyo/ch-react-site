import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const spacing = theme.spacing.md;

	return {
		channel: {
			display: 'flex',
			padding: spacing,
		},

		messages: {
			width: '100%',
			height: 0,
			flexGrow: 1,
			paddingRight: spacing,
		},

		scrollRoot: {
			marginRight: -spacing
		}
	};
});

export default useStyles;

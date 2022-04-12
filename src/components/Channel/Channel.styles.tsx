import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	const spacing = theme.spacing.md;

	return {
		channel: {
			flexDirection: 'column',
			padding: spacing,
			height: '100%',
		},

		messagesWindow: {
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

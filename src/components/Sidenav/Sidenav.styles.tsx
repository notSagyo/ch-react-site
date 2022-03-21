import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark';
	const border = `1px solid ${
		darkMode ? theme.colors.dark[4] : theme.colors.gray[2]
	}`;

	return {
		navbar: {
			backgroundColor: darkMode ? theme.colors.dark[6] : theme.white,
			padding: theme.spacing.md,
			height: '100%',
			width: 256
		},

		header: {
			paddingBottom: theme.spacing.md,
			borderBottom: border,

			[`& ~ .${getRef('controls')}`]: {
				marginTop: theme.spacing.md,
			},
		},

		title: {
			textTransform: 'uppercase',
			letterSpacing: -0.25,
		},

		links: {
			padding: `${theme.spacing.md}px 0`,
		},

		footer: {
			paddingTop: theme.spacing.md,
			marginTop: theme.spacing.md,
			borderTop: border
		},

		controls: {
			ref: getRef('controls')
		},

		controlsActive: {
			backgroundColor: theme.fn.rgba(theme.colors.brand[7], 0.9),
			color: theme.black
		},

		controlsLabel: {
			padding: 8,
		}
	};
});

export default useStyles;

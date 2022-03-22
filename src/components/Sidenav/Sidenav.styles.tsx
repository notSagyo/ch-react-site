import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark';
	const border = `1px solid ${
		darkMode ? theme.colors.dark[4] : theme.colors.gray[2]
	}`;
	const spacing = theme.spacing.md;

	return {
		navbar: {
			backgroundColor: darkMode ? theme.colors.dark[6] : theme.white,
			padding: spacing,
			height: '100%',
			width: 256
		},

		header: {
			paddingBottom: spacing,
			borderBottom: border,

			[`& ~ .${getRef('controls')}`]: {
				marginTop: spacing,
			},
		},

		title: {
			textTransform: 'uppercase',
			letterSpacing: -0.25,
		},

		links: {
			height: '0',
		},

		footer: {
			paddingTop: spacing,
			marginTop: spacing,
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
		},

		scrollArea: {
			flexGrow: 1,
			marginRight: -spacing * 0.85
		},

		scrollScrollbar: {
			['&:hover']: {
				backgroundColor: 'transparent',
			}
		},
	};
});

export default useStyles;

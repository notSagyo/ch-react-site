import { createStyles } from '@mantine/core';

export let spacing: number;
export let scrollbarOffset: number;
export let border: string;

const useStyles = createStyles((theme) => {
	const darkMode = theme.colorScheme === 'dark';
	border = `1px solid ${
		darkMode ? theme.colors.dark[4] : theme.colors.gray[2]
	}`;

	spacing = theme.spacing.md;
	scrollbarOffset = -spacing * 0.85;

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
			marginBottom: spacing
		},

		title: {
			textTransform: 'uppercase',
			letterSpacing: -0.25,
		},

		footer: {
			paddingTop: spacing,
			marginTop: spacing,
			borderTop: border
		},

		scrollArea: {
			marginRight: scrollbarOffset
		},

		scrollbar: {
			['&:hover']: {
				backgroundColor: 'transparent',
			}
		},
	};
});

export default useStyles;

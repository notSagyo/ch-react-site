import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;
	const icon = getRef('icon');

	const hoverBgc = darkMode
		? theme.colors.dark[6]
		: theme.colors.gray[0];
	const activeBgc = darkMode
		? theme.fn.rgba(theme.colors.dark[3], 0.25)
		: theme.colors[theme.primaryColor][0];
	const activeIconColor = theme.colors.brand[darkMode ? 5 : 7];

	return {
		link: {
			...theme.fn.focusStyles(),
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			fontSize: theme.fontSizes.sm,
			color: darkMode ? theme.colors.dark[1] : theme.colors.gray[7],
			padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
			margin: '4px 0',
			borderRadius: theme.radius.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor: hoverBgc,
				color: darkMode ? theme.white : theme.black,

				[`& .${icon}`]: {
					color: darkMode ? theme.white : theme.black,
				},
			},
		},

		linkIcon: {
			ref: icon,
			color: darkMode ? theme.colors.dark[2] : theme.colors.gray[6],
			marginRight: theme.spacing.sm,
		},

		linkActive: {
			backgroundColor: activeBgc,

			'&, &:hover': {
				color: darkMode ? theme.white : theme.colors.brand[7],
				[`& .${icon}`]: {
					color: activeIconColor,
				},
			},
		}
	};
});

export default useStyles;

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		user: {
			display: 'block',
			width: '100%',
			padding: theme.spacing.md,
			color: darkMode ? theme.colors.dark[0] : theme.black,
			borderRadius: theme.radius.sm,

			'&:hover': {
				backgroundColor: darkMode ? theme.colors.dark[6] : theme.colors.gray[0],
				color: darkMode ? theme.white : theme.black,
			},
		},
	};
});

export default useStyles;

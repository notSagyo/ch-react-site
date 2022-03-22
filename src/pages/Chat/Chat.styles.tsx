import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		header: {},

		root: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			height: '100vh',
			backgroundColor: darkMode ? theme.colors.dark[6] : theme.colors.gray[5],
		},

		body: {
			height: 0,
			flexGrow: 1
		},

		main: {
			padding: 0
		},

		channel: {
			height: '100%',
			flexDirection: 'column',
			alignContent: 'start',
			justifyContent: 'start',
		},
	};
});

export default useStyles;

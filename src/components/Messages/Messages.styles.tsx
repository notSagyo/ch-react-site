import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		messages: {
			display: 'flex',
			flexDirection: 'column',
			color: theme.colors.dark[0]
		}
	};
});

export default useStyles;

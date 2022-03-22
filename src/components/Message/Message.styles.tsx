import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		messageWrapper: {
			// Styles
		},

		timestamp: {
			color: theme.colors.dark[3]
		}
	};
});

export default useStyles;

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		sidenav: {
			backgroundColor: darkMode ? theme.colors.dark[7] : theme.colors.gray[0]
		}
	};
});

export default useStyles;

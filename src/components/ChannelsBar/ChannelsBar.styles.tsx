import { createStyles } from '@mantine/core';
import { scrollbarOffset } from '../Sidenav/Sidenav.styles';

const useStyles = createStyles((theme, _params, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		sidenav: {
			backgroundColor: darkMode ? theme.colors.dark[7] : theme.colors.gray[0],
		},

		links: {
			marginRight: -scrollbarOffset
		},

		controls: {
			ref: getRef('controls'),
			width: '100%'
		},

		controlsActive: {
			backgroundColor: theme.fn.rgba(theme.colors.brand[7], 0.9),
			color: theme.black
		},

		controlsLabel: {
			padding: 8,
			fontWeight: 600
		},
	};
});

export default useStyles;

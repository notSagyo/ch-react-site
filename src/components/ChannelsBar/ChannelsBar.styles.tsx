import { createStyles } from '@mantine/core';
import { scrollbarOffset } from '../Sidenav/Sidenav.styles';

const useStyles = createStyles((theme, _params: { opened: boolean }, getRef) => {
	const darkMode = theme.colorScheme === 'dark' ? true : false;

	return {
		burger: {
			position: 'fixed',
			top: -2.5,
			left: 0,
			zIndex: 100,

			[`@media (min-width: ${theme.breakpoints.sm}px)`]: { 
				display: 'none' 
			},
		},

		sidenav: {
			backgroundColor: darkMode ? theme.colors.dark[7] : theme.colors.gray[0],
			display: _params.opened ? 'flex' : 'none',
			position: 'fixed',
			paddingBottom: theme.spacing.xl * 2,
			
			[`@media (min-width: ${theme.breakpoints.sm}px)`]: { 
				display: 'flex',
				position: 'static',
				paddingBottom: theme.spacing.md,
			}
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

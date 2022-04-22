import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	return {
		root: {
			paddingTop: 80,
			paddingBottom: 80,
		},

		inner: {
			position: 'relative',
		},

		backgroundText: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			zIndex: 0,
			transform: 'translate(-50%, -50%)',
			letterSpacing: '1vw',
			fontSize: ['35vw', 'min(35vw, 500px)'],
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			color: theme.colors.dark[6],
			opacity: 0.5,
		},

		content: {
			paddingTop: 220,
			position: 'relative',
			zIndex: 1,

			[theme.fn.smallerThan('sm')]: {
				paddingTop: 120,
			},
		},

		title: {
			textAlign: 'center',
			fontWeight: 900,
			fontSize: 38,

			[theme.fn.smallerThan('sm')]: {
				fontSize: 32,
			},
		},

		description: {
			maxWidth: 540,
			margin: 'auto',
			marginTop: theme.spacing.xl,
			marginBottom: theme.spacing.xl * 1.5,
		},
	};
});

export default useStyles;

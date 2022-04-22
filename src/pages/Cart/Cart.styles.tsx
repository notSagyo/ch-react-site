import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			display: 'flex',
			flexDirection: 'column',
			marginTop: theme.spacing.xl,
			marginBottom: theme.spacing.xl,
			flexGrow: 1,
		},

		checkoutBtn: {
			margin: `${theme.spacing.xl}px 0 ${theme.spacing.xl}px auto`,
			width: 'fit-content',
		},

		emptyCartWrapper: {
			margin: 'auto',
			paddingBottom: theme.other.navbarHeight
		},

		emptyDescription: {
			color: theme.colors.dark[1],
			maxWidth: 375,
			textAlign: 'center',
		},

		smallText: {
			color: theme.colors.dark[1],
			maxWidth: 375,
			textAlign: 'end',
			margin: `auto 0 ${theme.spacing.xl}px auto`,
		}
	};
});

export default useStyles;

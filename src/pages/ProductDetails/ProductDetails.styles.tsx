import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 36,
		fontWeight: 600,
		lineHeight: 1.1,
		marginBottom: theme.spacing.md,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	infoColumn: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing.md,
	}
}));

export default useStyles;

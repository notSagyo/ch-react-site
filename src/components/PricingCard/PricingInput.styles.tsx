import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
	},

	controlWrapper: {
		display: 'flex',
		flexBasis: '50%',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 4,
		height: 40,
		borderRadius: theme.radius.sm,
		border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

		'&:focus-within': {
			borderColor: theme.colors[theme.primaryColor][6],
		},
	},

	control: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[7] : theme.white,
		color: theme.white,
		border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,

		'&:disabled': {
			borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
			opacity: 0.8,
			backgroundColor: 'transparent',
		},
	},

	input: {
		textAlign: 'center',
		paddingRight: `${theme.spacing.sm}px !important`,
		paddingLeft: `${theme.spacing.sm}px !important`,
		height: 28,
		flex: 1,
	},

	button: {
		height: 40,
	}
}));

export default useStyles;

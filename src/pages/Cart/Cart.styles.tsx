import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	return {
		wrapper: {
			height: '100%'
		},

		emptyDescription: {
			color: theme.colors.dark[1],
			maxWidth: 375,
			textAlign: 'center',
		},
	};
});

export default useStyles;

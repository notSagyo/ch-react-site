import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	return {
		messageWrapper: {
			// Styles
		},

		timestamp: {
			color: theme.colors.dark[3]
		},

		author: {
			color: 'inherit',
			fontWeight: 500
		},

		content: {
			whiteSpace: 'pre-line'
		}
	};
});

export default useStyles;

import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => {
	return {
		card: {
			position: 'fixed',
			width: 250,
			visibility: 'hidden',
			zIndex: 10
		}
	};
});

export default useStyles;

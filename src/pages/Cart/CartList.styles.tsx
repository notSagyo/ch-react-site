import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => {
	return {
		table: {
			['tbody tr td']: {
				border: 'none',
			}
		}
	};
});

export default useStyles;

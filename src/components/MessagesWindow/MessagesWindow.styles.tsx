import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
	return {
		viewport: {
			color: theme.colors.dark[0],

			['& > *']: {
				height: '100%',
				paddingBottom: 5
			}
		},

		messages: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			height: '100%'
		}
	};
});

export default useStyles;

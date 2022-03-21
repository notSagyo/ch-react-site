import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
	return {
		textInput: {
			fontWeight: 500,
		},

		inputInner: {
			padding: `${theme.spacing.lg}px`,

			'&:focus, &:focus-within': {
				borderColor: 'transparent !important'
			}
		},

		placeholderIcon: {
			fontWeight: 100
		}
	};
});

export default useStyles;

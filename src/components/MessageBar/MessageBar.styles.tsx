import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => {
	return {
		textInput: {
			fontWeight: 500,
		},

		inputInner: {
			maxHeight: '100%',

			'&:focus, &:focus-within': {
				borderColor: 'transparent !important'
			}
		},

		placeholderIcon: {
			fontWeight: 100
		},

		form: {
			width: '100%',
			height: 'fit-content'
		}
	};
});

export default useStyles;

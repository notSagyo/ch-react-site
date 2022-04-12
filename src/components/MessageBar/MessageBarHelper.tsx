export const validateMessage = (content: string) => {
	content = content.trim();

	if (content.length < 1 	|| content.length > 200) {
		alert('Message must be between 1 and 200 characters.');
		return false;
	}

	return content;
};

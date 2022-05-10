import { Textarea } from '@mantine/core';
import { HTMLAttributes, useRef, useState } from 'react';
import { Message as MessageIcon } from 'tabler-icons-react';
import { useChannelContext } from '../../context/ChannelContext';
import { maxMessageLength } from '../../pages/Chat/ChatHelper';
import useStyles from './MessageBar.styles';

function MessageBar(props: HTMLAttributes<HTMLFormElement>) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [errorState, setErrorState] = useState<string | null>(null);
	const { pushMessage } = useChannelContext();
	const { classes, cx } = useStyles();

	async function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		setErrorState(null);
		if (!(e.key === 'Enter' && !e.shiftKey) || !inputRef.current)
			return;

		e.preventDefault();
		// ?FIXME: Fix err comunication method
		pushMessage(inputRef.current.value)
			.catch((err: Error) => setErrorState(`*${err.message}`));
		inputRef.current.value = '';
	}

	return (
		<form action={void(0)} className={classes.form}>
			<Textarea
				icon={<MessageIcon className={classes.placeholderIcon} />}
				className={cx(props.className, classes.textInput)}
				classNames={{input: classes.inputInner}}
				placeholder='Write a message...'
				maxLength={maxMessageLength}
				onKeyDown={handleKeyDown}
				autoComplete='off'
				error={errorState}
				ref={inputRef}
				maxRows={10}
				minRows={1}
				autosize
				aria-label='Message bar'
			/>
		</form>
	);
}

export default MessageBar;

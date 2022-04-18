import { Textarea } from '@mantine/core';
import { HTMLAttributes, useRef, useState } from 'react';
import { Message as MessageIcon } from 'tabler-icons-react';
import { useChannelContext } from '../../context/ChannelContext';
import { maxMessageLength } from '../../pages/Chat/ChatHelper';
import useStyles from './MessageBar.styles';

function MessageBar(props: HTMLAttributes<HTMLFormElement>) {
	const inputRef = useRef<HTMLTextAreaElement>(null);
	const [errorState, setErrorState] = useState<string | null>(null);
	const { pushMessage, ...channelCtx } = useChannelContext();
	const { classes, cx } = useStyles();

	function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
		setErrorState(null);
		if (!(e.key === 'Enter' && !e.shiftKey) || !inputRef.current)
			return;

		pushMessage(inputRef.current.value)
			.catch((e: Error) => setErrorState(`*${e.message}`));
		inputRef.current.value = '';
		e.preventDefault();
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

import React, { useEffect, useState } from 'react';
import { Group, Tooltip, TooltipProps } from '@mantine/core';
import { Message } from 'tabler-icons-react';

type Props = React.HTMLAttributes<HTMLElement> & Partial<TooltipProps> & {
	textColor?: string
};

function NotificationTooltip({textColor, ...props}:Props) {
	const [messages] = useState(3);
	const [opened, setOpened] = useState(true);
	const display = messages < 1 ? 'none':'';

	// ?HACK: scroll to fix tooltip position, timeout to wait for fully mounted
	useEffect(() => {
		setTimeout(() => {
			window.scrollBy(0, 1);
			setTimeout(() => { window.scrollBy(0, -1); }, 50);
		}, 50);
	}, []);

	const handleClick = () => {
		setOpened(!opened);
		console.log('clicked');
	};

	return (
		<>
			<Tooltip
				label={
					<Group sx={{gap: 1, alignItems:'flex-start'}}>
						{messages} <Message size={20}/>
					</Group>}
				color={'primary'}
				position={'right'}
				placement={'center'}
				gutter={7.5}
				arrowSize={3}
				withArrow={true}
				withinPortal={false}
				opened={opened}
				allowPointerEvents={true}
				onClick={handleClick}
				styles={{
					body: {
						color: textColor || 'white',
						padding: '3px 6px',
						transform: 'translateY(-10%)',
						display: display,
					},
					arrow: {display: display}
				}}
				{...props}
			>
				{props.children}
			</Tooltip>
		</>
	);
}

export default NotificationTooltip;

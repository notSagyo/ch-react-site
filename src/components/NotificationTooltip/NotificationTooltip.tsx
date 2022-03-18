import React, { useState } from 'react';
import { Group, Tooltip, TooltipProps } from '@mantine/core';
import { Message } from 'tabler-icons-react';

type Props = React.HTMLAttributes<HTMLElement> & Partial<TooltipProps> & {
	textColor?: string
};

function NotificationTooltip(props:Props) {
	const [messages] = useState(3);
	const display = messages < 1 ? 'none':'';

	return (
		<Tooltip
			label={
				<Group sx={{gap: 1, alignItems:'flex-start'}}>
					{messages} <Message size={20}/>
				</Group>}
			color={'brand'}
			position={'right'}
			placement={'center'}
			gutter={7.5}
			arrowSize={3}
			withArrow={true}
			withinPortal={false}
			opened={true}
			styles={{
				body: {
					color:props.textColor || 'white',
					padding: '3px 6px',
					transform: 'translateY(-10%)',
					display: display
				},
				arrow: {display: display}
			}}
			{...props}
		>
			{props.children}
		</Tooltip>
	);
}

export default NotificationTooltip;

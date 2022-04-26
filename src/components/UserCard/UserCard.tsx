import { Card, Avatar, Text, Group, Button, Popover, PopoverProps } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { iUser } from '../../types';
import { CHANNEL_URL } from '../../utils';
import { useStyles } from './UserCard.styles';

export interface UserCardProps extends Partial<PopoverProps> {
	parent: JSX.Element;
	user: iUser | undefined;
	inline?: boolean;
	clickTrigger?: 'left' | 'right' | 'both';
	stats?: { label: string; value: string }[];
}

// TODO: add support for team channels
function UserCard({
	stats,
	parent,
	user,
	inline,
	clickTrigger,
	...props }: UserCardProps)
{
	const [ opened, setOpened ] = useState(false);
	const navigate = useNavigate();
	const { createDM, setLoading } = useChannelContext();
	const { activeUser } = useUserContext();
	useWindowEvent('wheel', () => setOpened(false));

	const { classes, theme, cx } = useStyles();

	function handleContextMenu(e: React.MouseEvent<HTMLDivElement>) {
		if (clickTrigger !== 'both' && clickTrigger !== 'right')
			return;
		e.preventDefault();
		e.stopPropagation();
		setOpened(true);
	}

	function handleClick(e: React.MouseEvent<HTMLDivElement>) {
		if (clickTrigger !== 'both' && clickTrigger !== 'left')
			return;
		e.preventDefault();
		e.stopPropagation();
		setOpened(true);
	}

	async function handleMessageBtn(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		e.stopPropagation();
		setOpened(false);
		if (!user) return;

		setLoading(true);
		const channel = await createDM({
			type: 'user',
			membersIds: [user.id, activeUser.id],
			createdAt: Date.now(),
			updatedAt: Date.now(),
			id: '',
			label: '',
			description: '',
			messages: [],
		});
		navigate(`../${CHANNEL_URL}/${channel.id}`);
		setLoading(false);
	}

	const statElements = stats && stats.map((stat) => (
		<div key={stat.label}>
			<Text align="center" size="lg" weight={500}>
				{stat.value}
			</Text>
			<Text align="center" size="sm" color="dimmed">
				{stat.label}
			</Text>
		</div>
	));

	return (
		<Popover
			styles={{
				inner: {padding: 0},
				body: {border: 'none'},
				root: {display: !inline ? 'block' : ''},
			}}
			position={'right'}
			placement={'start'}
			trapFocus={false}
			{...props}
			opened={opened}
			onClose={() => setOpened(false)}
			target={
				<div onContextMenu={handleContextMenu} onClick={handleClick}>
					{parent}
				</div>}
		>
			<Card
				withBorder
				p="xl"
				radius="md"
				className={cx(classes.card, props.className)}
			>
				<Card.Section sx={{ backgroundImage: `url(${user?.bannerURL})`, height: 140 }} />
				<Avatar src={user?.photoURL} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
				<Text align="center" size="lg" weight={500} mt="sm"> {user?.name} </Text>
				<Text align="center" size="sm" color="dimmed"> {user?.occupation}</Text>
				<Group mt="md" position="center" spacing={30}> {statElements} </Group>
				<Button
					fullWidth
					radius="md"
					mt="xl"
					size="md"
					color={theme.colorScheme === 'dark' ? undefined : 'dark'}
					onClick={handleMessageBtn}
				>
					Send message
				</Button>
			</Card>
		</Popover>
	);
}

export default UserCard;

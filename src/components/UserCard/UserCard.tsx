import { useEffect, useState } from 'react';
import { Card, Avatar, Text, Group, Button, Popover, PopoverProps } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
import { useChannelContext } from '../../context/ChannelContext';
import { useUserContext } from '../../context/UserContext';
import { iChannel, iUser } from '../../types';
import { CHANNEL_URL } from '../../utils';
import { useStyles } from './UserCard.styles';
import { useModals } from '@mantine/modals';

export interface UserCardProps extends Partial<PopoverProps> {
	parent: JSX.Element;
	channelId?: string | undefined;
	user?: iUser | undefined;
	inline?: boolean;
	clickTrigger?: 'left' | 'right' | 'both';
	stats?: { label: string; value: string }[];
}

function UserCard({
	stats,
	parent,
	user,
	channelId,
	inline,
	clickTrigger,
	...props }: UserCardProps)
{
	const { createDM, setLoading, getChannel } = useChannelContext();
	const { activeUser } = useUserContext();
	const [ opened, setOpened ] = useState(false);
	const [ channel, setChannel ] = useState<iChannel>();

	const navigate = useNavigate();
	const modals = useModals();
	const { classes, theme, cx } = useStyles();
	useWindowEvent('wheel', () => setOpened(false));

	useEffect(() => {
		channelId && getChannel(channelId).then(setChannel);
	}, [channelId]);

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

		setLoading(true);
		if (user) {
			const dm = await createDM({
				type: 'user',
				membersIds: [user.id, activeUser.id],
				createdAt: Date.now(),
				updatedAt: Date.now(),
				id: '',
				label: '',
				description: '',
				messages: [],
			}).catch(err => {
				(console.error(err));
				openGuestModal();
			});
			dm && navigate(`../${CHANNEL_URL}/${dm.id}`);
		} else if (channel)
			navigate(`../${CHANNEL_URL}/${channel.id}`);
		else
			openGuestModal();
		setLoading(false);
	}

	function openGuestModal() {
		modals.openContextModal('alertModal', {
			title: 'Guest user',
			centered: true,
			innerProps: {
				modalBody: 'Can\'t start a conversation as/with a Guest user',
				type: 'warning'
			}});
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
				<Card.Section sx={{ backgroundImage: `url(${user?.bannerURL || channel?.bannerUrl})`, height: 140 }} />
				<Avatar src={user?.photoURL || channel?.photoUrl} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
				<Text align="center" size="lg" weight={500} mt="sm"> {user?.name || channel?.label} </Text>
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

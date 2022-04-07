import { Card, Avatar, Text, Group, Button, Popover } from '@mantine/core';
import { useWindowEvent } from '@mantine/hooks';
import React, { useState } from 'react';
import { DivProps } from '../../utils';
import { useStyles } from './UserCard.styles';

export interface UserCardProps extends DivProps {
	parent: JSX.Element;
	avatar?: string;
	banner?: string;
	name?: string;
	occupation?: string;
	stats?: { label: string; value: string }[];
}

// TODO: add support for team channels
function UserCard({ avatar, banner, name, occupation, stats, parent, ...props }: UserCardProps)
{
	const { classes, theme, cx } = useStyles();
	const [opened, setOpened] = useState(false);
	useWindowEvent('wheel', () => setOpened(false));

	function handleContextMenu(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		e.stopPropagation();
		setOpened(true);
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
			opened={opened}
			target={<div onContextMenu={handleContextMenu}>{parent}</div>}
			position='right'
			placement='end'
			styles={{
				inner: {padding: 0},
				body: {border: 'none'},
				root: {display: 'block'}
			}}
			onClose={() => setOpened(false)}
		>
			<Card
				{...props}
				withBorder
				p="xl"
				radius="md"
				className={cx(classes.card, props.className)}
			>
				<Card.Section sx={{ backgroundImage: `url(${banner})`, height: 140 }} />
				<Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
				<Text align="center" size="lg" weight={500} mt="sm"> {name} </Text>
				<Text align="center" size="sm" color="dimmed"> {occupation} </Text>
				<Group mt="md" position="center" spacing={30}> {statElements} </Group>
				<Button
					fullWidth
					radius="md"
					mt="xl"
					size="md"
					color={theme.colorScheme === 'dark' ? undefined : 'dark'}
				>
					Send message
				</Button>
			</Card>
		</Popover>
	);
}

export default UserCard;
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import { DivProps } from '../../utils';
import { useStyles } from './UserCard.styles';

export interface UserCardProps extends DivProps {
	banner: string;
	avatar: string;
	name: string;
	occupation: string;
	stats: { label: string; value: string }[];
	innerRef?: React.Ref<HTMLDivElement>;
}

export function UserCard({ banner, avatar, name, occupation, stats, innerRef, ...props }: UserCardProps) {
	const { classes, theme, cx } = useStyles();

	const items = stats.map((stat) => (
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
		<Card
			{...props}
			withBorder
			p="xl"
			radius="md"
			className={cx(classes.card, props.className)}
			ref={innerRef}
		>
			<Card.Section sx={{ backgroundImage: `url(${banner})`, height: 140 }} />
			<Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
			<Text align="center" size="lg" weight={500} mt="sm">
				{name}
			</Text>
			<Text align="center" size="sm" color="dimmed">
				{occupation}
			</Text>
			<Group mt="md" position="center" spacing={30}>
				{items}
			</Group>
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
	);
}

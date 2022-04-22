import React from 'react';
import { UnstyledButton, Group, Avatar, Text, } from '@mantine/core';
import { ChevronRight } from 'tabler-icons-react';
import useStyles from './UserButton.styles';
import { useUserContext } from '../../context/UserContext';

interface UserButtonProps {
	image?: string;
	name?: string;
	email?: string;
	icon?: React.ReactNode;
}

export function UserButton({ image, name, email, icon, ...props }: UserButtonProps) {
	const { signIn, signOut, authUser } = useUserContext();
	const { classes } = useStyles();

	const handleClick = () => {
		if (authUser) {
			signOut();
			window.location.reload();
		}
		else {
			signIn();
		}
	};

	return (
		<UnstyledButton className={classes.user} {...props} onClick={handleClick}>
			<Group style={{ flexWrap: 'nowrap' }}>
				<Avatar src={authUser?.photoURL} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500} className='clampLine'>
						{authUser?.displayName || 'Log in'}
					</Text>

					<Text color="dimmed" size="xs" className='clampLine'>
						{authUser?.email || 'Guest'}
					</Text>
				</div>

				{icon || <ChevronRight size={14} />}
			</Group>
		</UnstyledButton>
	);
}

import { Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';
import { User, Users } from 'tabler-icons-react';
import { sidenavIcons } from '../../types';
import useStyles from './SidenavLink.styles';

export type SidenavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	linkId: string,
	label?: string,
	link?: string,
	photoUrl?: string,
	icon?: sidenavIcons,
	activeLink?: string
}

function SidenavLink({
	linkId,
	children,
	activeLink,
	label,
	link='',
	photoUrl,
	icon = 'Users',
	...props}: SidenavLinkProps)
{
	const { classes, cx } = useStyles();

	const iconComponent = icon === 'User'
		? <User className={classes.linkIcon} />
		: <Users className={classes.linkIcon} />;

	return (
		<Link
			{...props}
			className={cx(classes.link, props.className, {
				[classes.linkActive]: linkId === activeLink,
			})}
			to={link}
		>
			{photoUrl
				?	<Avatar src={photoUrl} size={24} radius='md' className={classes.linkImage} />
				: iconComponent
			}
			<div className={classes.textWrapper}>
				<span>{children || label}</span>
			</div>
		</Link>
	);
}

export default SidenavLink;

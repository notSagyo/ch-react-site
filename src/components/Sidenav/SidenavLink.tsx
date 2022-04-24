import { Avatar } from '@mantine/core';
import { Link } from 'react-router-dom';
import { User, Users } from 'tabler-icons-react';
import useStyles from './SidenavLink.styles';

export type SidenavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	linkId: string,
	label?: string,
	link?: string,
	photoUrl?: string,
	icon?: string,
	activeLink?: string
}

function SidenavLink({
	linkId,
	children,
	activeLink,
	label,
	link='',
	photoUrl,
	icon: LinkIcon = 'Users',
	...props}: SidenavLinkProps)
{
	const { classes, cx } = useStyles();

	const icon = LinkIcon === 'user'
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
				: icon
			}
			<div className={classes.textWrapper}>
				<span>{children || label}</span>
			</div>
		</Link>
	);
}

export default SidenavLink;

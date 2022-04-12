import { Link } from 'react-router-dom';
import { Icon } from 'tabler-icons-react';
import useStyles from './SidenavLink.styles';

export type SidenavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	linkId: string,
	label?: string,
	link?: string,
	icon?: Icon,
	activeLink?: string
}

function SidenavLink({
	linkId,
	children,
	activeLink,
	label,
	link='',
	icon: LinkIcon,
	...props}: SidenavLinkProps)
{
	const { classes, cx } = useStyles();

	return (
		<Link
			{...props}
			className={cx(classes.link, props.className, {
				[classes.linkActive]: linkId === activeLink,
			})}
			to={link}
		>
			{LinkIcon && (<LinkIcon className={classes.linkIcon} />)}
			<div className={classes.textWrapper}>
				<span>{children || label}</span>
			</div>
		</Link>
	);
}

export default SidenavLink;

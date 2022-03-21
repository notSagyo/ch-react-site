import { Icon } from 'tabler-icons-react';
import useStyles from './SidenavLink.styles';

export type SidenavLinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	label:string,
	link?:string,
	icon?: Icon,
	activeLink?: string
}

function SidenavLink({
	children,
	activeLink,
	label,
	link='',
	icon: LinkIcon,
	...props}: SidenavLinkProps) {
	const { classes, cx } = useStyles();

	return (
		<a
			{...props}
			className={cx(classes.link, props.className, {
				[classes.linkActive]: label === activeLink,
			})}
			href={link}
		>
			{LinkIcon && (<LinkIcon className={classes.linkIcon} />)}
			<span>{children || label}</span>
		</a>
	);
}

export default SidenavLink;

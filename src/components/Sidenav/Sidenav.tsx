import React, {  } from 'react';
import { Navbar, Group, ScrollArea } from '@mantine/core';
import useStyles from './Sidenav.styles';
import { DivProps } from '../../utils';

export type SidenavProps = DivProps & {
	header?: React.ReactNode,
	subheader?: React.ReactNode,
	footer?: React.ReactNode,
};

function Sidenav({
	footer,
	header,
	subheader,
	children,
	...props
}: SidenavProps) {
	const { classes, cx } = useStyles();

	return (
		<Navbar {...props} className={cx(classes.navbar, props.className)}>
			<Navbar.Section>
				{header && (
					<Group className={classes.header} position="apart"> {header} </Group>
				)}
				{subheader}
			</Navbar.Section>

			<Navbar.Section
				classNames={{scrollbar: classes.scrollbar}}
				className={classes.scrollArea}
				component={ScrollArea}
				scrollbarSize={5}
				grow
			>
				{ children }
			</Navbar.Section>

			{/* FOOTER =========================================================== */}
			{footer && (
				<Navbar.Section className={classes.footer}> {footer} </Navbar.Section>
			)}
		</Navbar>
	);
}

export default Sidenav;

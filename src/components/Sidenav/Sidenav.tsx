import React, { useState } from 'react';
import { Navbar, Group, SegmentedControl, Box, ScrollArea } from '@mantine/core';
import useStyles from './Sidenav.styles';
import SidenavLink, { SidenavLinkProps } from './SidenavLink';
import { DivProps } from '../../utils';

// Otro que me causó pesadillas con TypeScript
export type SidenavPropsTabs = { [tabName: string]: SidenavLinkProps[] }

export type SidenavProps = DivProps & {
	tabs: SidenavPropsTabs,
	color?: string,
	defaultLink?: string,
	defaultSection?: string,
	footer?: React.ReactNode,
	header?: React.ReactNode,
	onLinkClick?: (link: SidenavLinkProps) => void;
	preventSelect?: boolean,
};

function Sidenav({
	tabs,
	color,
	footer,
	header,
	defaultLink,
	onLinkClick,
	preventSelect,
	defaultSection = Object.keys(tabs)[0],
	...props
}: SidenavProps) {
	const [activeLink, setActiveLink] = useState(defaultLink);
	const [section, setSection] = useState(defaultSection);
	const { classes, cx } = useStyles();

	const links = tabs[section].map((item, index) => (
		<SidenavLink
			{...item}
			key={index}
			activeLink={activeLink}
			onClick={(event) => {
				!preventSelect && setActiveLink(item.label);
				onLinkClick && onLinkClick(item);
				event.preventDefault();
			}}/>
	));

	const segments = Object.keys(tabs).map((tabName) => ({
		label: tabName, value: tabName
	}));

	return (
		<Navbar {...props} className={cx(classes.navbar, props.className)}>
			<Navbar.Section>
				{header && (
					<Group className={classes.header} position="apart"> {header} </Group>
				)}

				{/* TAB CONTROLS =================================================== */}
				{segments.length > 1 && (
					<Box className={classes.controls}>
						<SegmentedControl
							classNames={{
								label: classes.controlsLabel,
								active: classes.controlsActive
							}}
							transitionTimingFunction="ease"
							onChange={setSection}
							value={section}
							data={segments}
							fullWidth
						/>
					</Box>
				)}
			</Navbar.Section>

			{/* LINKS ============================================================ */}
			<Navbar.Section
				classNames={{scrollbar: classes.scrollbar}}
				className={classes.scrollArea}
				component={ScrollArea}
				scrollbarSize={5}
				grow
			>
				<div className={classes.links}> {links} </div>
			</Navbar.Section>

			{/* FOOTER =========================================================== */}
			{footer && (
				<Navbar.Section className={classes.footer}> {footer} </Navbar.Section>
			)}
		</Navbar>
	);
}

export default Sidenav;

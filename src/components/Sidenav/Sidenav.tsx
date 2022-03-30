import React, { useEffect, useState } from 'react';
import { Navbar, Group, SegmentedControl, Box, ScrollArea, SegmentedControlItem } from '@mantine/core';
import useStyles from './Sidenav.styles';
import SidenavLink, { SidenavLinkProps } from './SidenavLink';
import { DivProps } from '../../utils';

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
	const [activeLink] = useState(defaultLink);
	const [segments, setSegments] = useState<SegmentedControlItem[]>([]);
	const [links, setLinks] = useState<JSX.Element[]>([<></>]);
	const [section, setSection] = useState(defaultSection);
	const { classes, cx } = useStyles();

	useEffect(() => {
		if (Object.keys(tabs).length > 1) {
			setSection(Object.keys(tabs)[1]);

			setSegments(Object.keys(tabs).map((tabName) => ({
				label: tabName, value: tabName
			})));

			setLinks(tabs[Object.keys(tabs)[1]].map((item, index) => (
				<SidenavLink
					{...item}
					key={index}
					activeLink={activeLink}
					icon={item.icon}
				/>
			)));
		}
	}, [tabs]);

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

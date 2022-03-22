import { useState } from 'react';
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
	preventSelect?: boolean,
};

function Sidenav({
	tabs,
	color,
	defaultLink,
	defaultSection = Object.keys(tabs)[0],
	footer,
	header,
	preventSelect,
	...props}: SidenavProps) {
	const { classes, cx } = useStyles();
	const [section, setSection] = useState(defaultSection);
	const [activeLink, setActiveLink] = useState(defaultLink);

	const links = tabs[section].map((item, index) => (
		<SidenavLink
			{...item}
			key={index}
			activeLink={activeLink}
			onClick={(event) => {
				event.preventDefault();
				!preventSelect && setActiveLink(item.label);
			}}/>
	));

	const segments = Object.keys(tabs).map((tabName) => ({
		label: tabName, value: tabName
	}));

	return (
		<Navbar {...props} className={cx(classes.navbar, props.className)}>
			<Navbar.Section>
				{header && (
					<Group className={classes.header} position="apart">
						{header}
					</Group>
				)}

				{segments.length > 1 && (
					<Box className={classes.controls}>
						<SegmentedControl
							classNames={{
								label: classes.controlsLabel,
								active: classes.controlsActive
							}}
							value={section}
							onChange={setSection}
							transitionTimingFunction="ease"
							fullWidth
							data={segments}
						/>
					</Box>
				)}
			</Navbar.Section>

			<ScrollArea
				className={classes.scrollArea}
				scrollbarSize={6}
				classNames={{ scrollbar: classes.scrollScrollbar }}
			>
				<Navbar.Section className={classes.links}>
					{links}
				</Navbar.Section>
			</ScrollArea>

			{footer && (
				<Navbar.Section className={classes.footer}> {footer} </Navbar.Section>
			)}
		</Navbar>
	);
}

export default Sidenav;

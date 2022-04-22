import React from 'react';
import { Container, Title, Text, Button, Group } from '@mantine/core';
// import { Illustration } from './Illustration';
import useStyles from './Error404.styles';
import { BASE_URL } from '../../utils';
import { Link } from 'react-router-dom';



function Error404() {
	const { classes } = useStyles();

	return (
		<Container className={classes.root}>
			<div className={classes.inner}>
				<Title order={2} className={classes.backgroundText}>
					404
				</Title>
				<div className={classes.content}>
					<Title className={classes.title}>Nothing to see here</Title>
					<Text color="dimmed" size="lg" align="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
					</Text>
					<Group position="center">
						<Link to={`/${BASE_URL}`}>
							<Button color={'brand'} size="md">Take me back to home page</Button>
						</Link>
					</Group>
				</div>
			</div>
		</Container>
	);
}

export default Error404;

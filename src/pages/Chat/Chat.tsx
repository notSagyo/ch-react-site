import { AppShell, Header } from '@mantine/core';
import useStyles from './Chat.styles';

// TODO: Participants sidebar
// TODO: Replace states call stack with context variables
function Chat() {
	const { classes } = useStyles();

	const header = ( <Header className={classes.header} height={32}>{}</Header> );

	return (
		<AppShell
			navbar={<></>}
			header={header}
			classNames={{
				root: classes.root,
				body: classes.body,
				main: classes.main
			}}
		>
		</AppShell>
	);
}

export default Chat;

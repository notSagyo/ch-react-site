import { AppShell, Group, Header } from '@mantine/core';
import ChannelsBar from '../../components/ChannelsBar/ChannelsBar';
import MessageBar from '../../components/MessageBar/MessageBar';
import Messages from '../../components/Messages/Messages';
import useStyles from './Chat.styles';

function Chat() {
	const { classes } = useStyles();

	const header = (
		<Header className={classes.header} height={32}>{}</Header>
	);

	return (
		<AppShell
			style={{zIndex: 99}}
			padding="md"
			navbar={<><ChannelsBar /></>}
			header={header}
			classNames={{
				root: classes.root,
				body: classes.body
			}}
		>
			<Group className={classes.channel}>
				<Messages className={classes.messages} />
				<MessageBar className={classes.messageBar}/>
			</Group>
		</AppShell>
	);
}

export default Chat;

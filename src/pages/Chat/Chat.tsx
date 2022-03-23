import { AppShell, Header } from '@mantine/core';
import { useState } from 'react';
import Channel from '../../components/Channel/Channel';
import ChannelsBar from '../../components/ChannelsBar/ChannelsBar';
import useStyles from './Chat.styles';

// TODO: Participants sidebar
function Chat() {
	const [currentChannel, setCurrentChannel] = useState<string>('none');
	const { classes } = useStyles();

	const header = ( <Header className={classes.header} height={32}>{}</Header> );

	return (
		<AppShell
			navbar={<ChannelsBar setCurrentChannel={setCurrentChannel}/>}
			header={header}
			classNames={{
				root: classes.root,
				body: classes.body,
				main: classes.main
			}}
		>
			<Channel className={classes.channel} currentChannel={currentChannel || ''}/>
		</AppShell>
	);
}

export default Chat;

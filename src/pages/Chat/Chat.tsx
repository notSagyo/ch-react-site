import { AppShell, Header } from '@mantine/core';
import { RecoilRoot } from 'recoil';
import Channel from '../../components/Channel/Channel';
import ChannelsBar from '../../components/ChannelsBar/ChannelsBar';
import ChatContextProvider from '../../context/ChatContext';
import useStyles from './Chat.styles';

// TODO: Participants sidebar
function Chat() {
	const { classes } = useStyles();

	const header = ( <Header className={classes.header} height={32}>{}</Header> );

	return (
		<ChatContextProvider>
			<RecoilRoot>
				<AppShell
					navbar={<ChannelsBar />}
					header={header}
					classNames={{
						root: classes.root,
						body: classes.body,
						main: classes.main
					}}
				>
					<Channel />
				</AppShell>
			</RecoilRoot>
		</ChatContextProvider>
	);
}

export default Chat;

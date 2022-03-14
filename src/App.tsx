import { MantineProvider, Container, ScrollArea } from '@mantine/core';
import Home from './pages/Home';
import '/src/styles/main.scss';

function App() {
	return (
		<MantineProvider
			theme={{
				colorScheme: 'dark',
				colors: { brand: ['#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444'] },
				white: '#fafaff',
				black: '#1b1e21',
				primaryColor: 'brand',
				fontFamily: 'Poppins, sans-serif'
			}}
			withGlobalStyles
			withNormalizeCSS
		>
			<ScrollArea sx={{height: '100vh'}}><Container className="app"
				sx={(theme) => ({
					backgroundColor: theme.black,
					color: theme.white
				})} fluid
			>
				<Home />
			</Container></ScrollArea>
		</MantineProvider>
	);
}

export default App;

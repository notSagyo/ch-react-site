import { MantineProvider, Container, useMantineTheme, } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BASE_URL } from './utils';
import Chat from './pages/Chat/Chat';
import Home from './pages/Home/Home';
import '/src/styles/main.scss';

function App() {
	const theme = useMantineTheme();
	return (
		<MantineProvider
			theme={{
				colorScheme: 'dark',
				colors: {
					primary: ['#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E', '#F03E3E'],
					brand: theme.colors.red
				},
				white: '#fafaff',
				black: '#101113',
				primaryColor: 'primary',
				fontFamily: 'Poppins, sans-serif'
			}}
			withNormalizeCSS
		>
			<Container px='0' fluid>
				<BrowserRouter>
					<Routes>
						<Route path={`${BASE_URL}/*`} element={<Home />} />
						<Route path={`${BASE_URL}/chat`} element={<Chat />} />
					</Routes>
				</BrowserRouter>
			</Container>
		</MantineProvider>
	);
}

export default App;
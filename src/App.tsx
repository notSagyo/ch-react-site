import { MantineProvider, Container } from '@mantine/core';
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
			withNormalizeCSS
		>
			<Container px='0' fluid>
				<Home />
			</Container>
		</MantineProvider>
	);
}

export default App;

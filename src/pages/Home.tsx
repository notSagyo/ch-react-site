import { Container } from '@mantine/core';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

function Home() {
	return (
		<Container size={'xl'}>
			<Navbar />
			<Hero />
		</Container>
	);
}

export default Home;

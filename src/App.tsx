import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useAppContext } from './hooks';

function App() {
	const { loading } = useAppContext();

	if(loading) {		
		return (
			<main>
				<h1 style={{ marginTop: '6rem' }}>Loading...</h1>
			</main>
		);
	}

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;

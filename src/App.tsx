import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useAppContext } from './hooks';

function App() {
	const { name } = useAppContext();

	console.log(name);

	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;

import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { CartState } from './types';
import reducer from './reducer';
import { getTotals } from './utils';
import cartItems from './data';

type Props = {
	children: ReactNode;
};

export const AppContext = createContext<CartState | undefined>(
	undefined
);

const initialState: CartState = {
	loading: false,
	items: new Map(),
	clearCart: () => {},
	removeItem: () => {},
	increaseAmount: () => {},
	decreaseAmount: () => {},
	totalAmount: 0,
	totalPrice: 0,
};

const AppContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const { totalAmount, totalPrice } = getTotals(state.items);

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const removeItem = (id: string) => {
		dispatch({ type: 'REMOVE_ITEM', payload: { id } });
	};

	const increaseAmount = (id:string) => {
		dispatch({ type: 'INCREASE', payload: { id } });
	};

	const decreaseAmount = (id:string) => {
		dispatch({ type: 'DECREASE', payload: { id } });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });

		//EXAMPLE LOADING DATA FROM API
		// const response = await fetch(URL);
		// const data = await response.json();
		// dispatch({ type: 'FETCH_CART', payload: { items: data } });

		dispatch({ type: 'FETCH_CART', payload: { items: cartItems } });
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ 
			...state, 
			clearCart, 
			removeItem, 
			increaseAmount, 
			decreaseAmount, 
			totalAmount, 
			totalPrice  
		}}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

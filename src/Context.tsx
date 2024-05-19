import { ReactNode, createContext, useReducer } from 'react';
import { CartState, TCartItem } from './types';
import cartItems from './data';
import reducer from './reducer';
import { getTotals } from './utils';

type Props = {
	children: ReactNode;
};

export const AppContext = createContext<CartState | undefined>(
	undefined
);

const itemsPairs:[string, TCartItem][] = cartItems.map(item => [item.id, item]);

const items = new Map(itemsPairs);

const initialState: CartState = {
	items,
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

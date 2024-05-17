import { ReactNode, createContext, useReducer } from 'react';
import { CartState, TCartItem } from './types';
import cartItems from './data';
import reducer from './reducer';

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
};

const AppContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

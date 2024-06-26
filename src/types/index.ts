export type TCartItem = {
	id: string;
	img: string;
	title: string;
	price: string;
	amount: number;
}

export type CartState = {
	loading: boolean;
	items: Map<string, TCartItem>;
	clearCart: () => void;
	removeItem: (id: string) => void;
	increaseAmount: (id: string) => void;
	decreaseAmount: (id: string) => void;
	totalAmount: number;
	totalPrice: number;
}

type ClearCartAction = {
	type: 'CLEAR_CART'
}

type RemoveItemAction = {
	type: 'REMOVE_ITEM',
	payload: { id: string },
};

type IncreaseAction = {
	type: 'INCREASE',
	payload: { id: string },
}

type DecreaseAction = {
	type: 'DECREASE',
	payload: { id: string },
}

type LoadingAction = {
	type: 'LOADING',
}

type FetchCart = {
	type: 'FETCH_CART',
	payload: { items: TCartItem[] },
}

export type TAction = 
	ClearCartAction | 
	RemoveItemAction | 
	IncreaseAction | 
	DecreaseAction | 
	LoadingAction |
	FetchCart;
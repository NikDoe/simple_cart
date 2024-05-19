export type TCartItem = {
	id: string;
	img: string;
	title: string;
	price: string;
	amount: number;
}

export type CartState = {
	items: Map<string, TCartItem>,
	clearCart: () => void;
	removeItem: (id: string) => void;
	increaseAmount: (id: string) => void;
	decreaseAmount: (id: string) => void;
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

export type TAction = ClearCartAction | RemoveItemAction | IncreaseAction | DecreaseAction;
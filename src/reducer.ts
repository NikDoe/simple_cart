import { CartState, TAction, TCartItem } from './types';

const reducer = (state: CartState, action: TAction): CartState => {
	if(action.type === 'LOADING') {		
		return { ...state, loading: true };
	}

	if(action.type === 'FETCH_CART') {
		const newItems:[string, TCartItem][] = action.payload.items.map(item => [item.id, item]);

		return { ...state, loading: false, items: new Map(newItems) };
	}
	
	if(action.type === 'CLEAR_CART') {
		return { ...state, items: new Map() };
	}

	if (action.type === 'REMOVE_ITEM') {
		const newItems = new Map(state.items);
		newItems.delete(action.payload.id);
		return { ...state, items: newItems };
	}

	if (action.type === 'INCREASE') {
		const newItems = new Map(state.items);
		const itemValue = newItems.get(action.payload.id);

		if(itemValue) {
			const newItemValue: TCartItem = { ...itemValue, amount: itemValue.amount + 1 };
			newItems.set(action.payload.id, newItemValue);
		}

		return { ...state, items: newItems };
	}

	if(action.type === 'DECREASE') {
		const newItems = new Map(state.items);
		const itemValue = newItems.get(action.payload.id);

		if(itemValue && itemValue.amount === 1) {
			newItems.delete(action.payload.id);
			return { ...state, items: newItems };
		}

		if(itemValue) {
			const newItemValue: TCartItem = { ...itemValue, amount: itemValue.amount - 1 };
			newItems.set(action.payload.id, newItemValue);
		}

		return { ...state, items: newItems };
	}

	return state;
};

export default reducer;
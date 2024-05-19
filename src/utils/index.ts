import { TCartItem } from '../types';

export const getTotals = (items: Map<string, TCartItem>) => {
	let totalAmount = 0;
	let totalPrice = 0;

	for(const itemValue of items.values()) {
		const { amount, price } = itemValue;
		totalAmount += amount;
		totalPrice += amount * Number(price);
	}

	return { totalAmount, totalPrice };
};
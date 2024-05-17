export type TCartItem = {
	id: string;
	img: string;
	title: string;
	price: string;
	amount: number;
}

export type CartState = {
	items: Map<string, TCartItem>
}
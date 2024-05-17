import CartItem from './CartItem';
import { useAppContext } from './hooks';

const CartContainer = () => {
	const { items } = useAppContext();

	const handleClearCart = () => {
		console.log('очистить корзину');
	};

	if (items.size === 0) {
		return (
			<section className='cart'>
				{/* cart header */}
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className='cart'>
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<div>
				{Array.from(items.values()).map((cartItem) => {
					return <CartItem key={cartItem.id} {...cartItem} />;
				})}
			</div>
			{/* cart footer */}
			<footer>
				<hr />
				<div>
					<h5 className='cart-total'>
						total <span>$10</span>
					</h5>
				</div>
				<button
					className='btn btn-hipster'
					onClick={handleClearCart}
				>
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;

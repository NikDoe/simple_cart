import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { TCartItem } from './types';
import { useAppContext } from './hooks';

interface CartItemProps {
	cartItem: TCartItem;
}

const CartItem = ({ cartItem }: CartItemProps) => {
	const { amount, img, price, title, id } = cartItem;
	const { removeItem, increaseAmount, decreaseAmount } = useAppContext();

	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h5>{title}</h5>
				<span className='item-price'>${price}</span>
				{/* remove button */}
				<button className='remove-btn' onClick={() => removeItem(id)}>
					remove
				</button>
			</div>
			<div>
				{/* increase amount */}
				<button className='amount-btn' onClick={() => increaseAmount(id)}>
					<FaChevronUp className='amount-icon' />
				</button>
				{/* amount */}
				<span className='amount'>{amount}</span>
				{/* decrease amount */}
				<button className='amount-btn' onClick={() => decreaseAmount(id)}>
					<FaChevronDown className='amount-icon' />
				</button>
			</div>
		</article>
	);
};

export default CartItem;

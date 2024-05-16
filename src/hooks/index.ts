import { useContext } from 'react';
import { AppContext } from '../Context';

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (context === undefined) {
		throw new Error('useContext must be inside a Provider with a value');
	}

	return context;
};
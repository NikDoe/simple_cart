import { ReactNode, createContext } from 'react';
import { AppProviderState } from './types';

export const AppContext = createContext<AppProviderState | undefined>(
	undefined
);

type Props = {
	children: ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
	const name = 'NikDoe';

	return (
		<AppContext.Provider value={{ name }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

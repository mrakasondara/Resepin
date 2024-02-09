import {createContext,useState} from 'react'
export const UserContext = createContext({})
export default function UserContextProvider({children}) {
	const [active,setActive] = useState('Beef')
	return (
		<UserContext.Provider value={{active,setActive}}>
			{children}
		</UserContext.Provider>
	)	
}
import React from 'react' 
import {Link} from 'react-router-dom'
const Header = () =>{
	return(
		<div className="w-full flex items-center justify-center bg-emerald-400 py-3">
			<Link to={'/'} className="text-xl text-white font-bold italic">Resepin</Link>
		</div>
	)
}
export default Header 
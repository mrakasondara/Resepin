import React from 'react'
const Footer = () =>{
	return(
		<div className="w-full flex justify-center items-center p-5 mt-5 bg-emerald-400">
			<h1 className="text-lg text-white font-bold">&copy; mrakasondara {new Date().getFullYear()}</h1>
		</div>
	)
}
export default Footer
import React,{useContext,useState} from 'react'
import {Link,Navigate} from 'react-router-dom'
const MenuItem = ({idCategory, strCategory, strCategoryThumb, handleClick})=>{
	return(

		<div className="w-[100px] flex-col mx-auto py-3 p-4 justify-center bg-emerald-400 items-center rounded-full shadow-lg hover:bg-emerald-300 transition cursor-pointer" onClick={()=> handleClick(strCategory)}>
				<img src={strCategoryThumb} className="w-[84px] h-[50px] rounded-full"/>
				<p className="text-slate-100 font-semibold text-center text-elipsis overflow-hidden">{strCategory}</p>
		</div>

		)
}
export default MenuItem
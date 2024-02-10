import React from 'react'
import {Link} from 'react-router-dom'
const RecipeItem = ({strMeal, strMealThumb,idMeal})=>{
	
	return(
		<div className="w-[100px] h-[150px] md:w-[150px] lg:w-[200px]  mx-auto  md:h-[210px] flex p-2 items-end relative rounded-lg shadow-gray-400 shadow-md cursor-pointer">
			<h1 className="text-sm md:text-md lg:text-lg font-bold text-slate-100 z-10">{strMeal}</h1>
			<Link to={`/recipe/${idMeal}`}>
				<img src={strMealThumb} className="absolute top-0 left-0 w-full h-full rounded-lg hover:scale-[1.1] transition"/>
			</Link>
		</div>
		)
}
export default RecipeItem
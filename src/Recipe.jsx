import React,{useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Breadcrumbs} from '@mui/material'
const Recipe = ({handlerClick})=>{
	const [meal,setMeal] = useState({})
	const [ingredients,setIngredients] = useState({}) 
	const {idMeal} = useParams()
	const ingredientImage = 'https://themealdb.com/images/ingredients/'
	const getMeals = () =>{
		fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(response=>response.json()).then(data=>{
			setMeal(...data.meals)		
		})
	}
	const ingredientsIndex = (meal)=>{
		if(!meal) return []
		let index = []
		for(let i=1; i<=20; i++){
			if(meal['strIngredient'+i]){
				index.push(i)
			}
		}
		 return index
	}
	const getEmbedId = () =>{
		const url = meal.strYoutube
		const watch = url.split('v')
		const getId = watch[1].split('=')
		return getId[1]
	}
	useEffect(()=>{
		getMeals()
	},[])
	
	return(
		<div className="w-full flex-cols gap-2 p-5">
			<div className="w-full md:w-1/2 flex py-2 px-5 my-2 bg-emerald-300 rounded-lg shadow-lg">
			<Breadcrumbs max-items={2} color="white" aria-label="breadcrumb">
				<Link to={'/'} className="cursor-pointer text-white hover:text-slate-500 transition"> Home </Link> 
				<p className="text-white">{meal.strCategory}</p> 
				<p className="text-white">{meal.strMeal}</p>
			</Breadcrumbs>
				
			</div>
			<div className="w-full bg-red-300 flex-cols md:flex my-[3rem] p-5 bg-emerald-300 rounded-lg shadow-lg gap-2 text-white">
				<div className="w-full flex-cols md:w-[40%] md:ml-5 mt-5 md:my-5">
					<img src={meal.strMealThumb} className="w-1/2 md:w-full rounded-lg mx-auto md:mx-0"/>
					<h1 className="text-lg px-5">Instructions</h1>
					<p className="text-justify px-5">{meal.strInstructions}</p>
				</div>
				<div className="w-full flex-cols md:w-[50%] md:-my-1 my-2 p-5 md:ml-5">
					<h1 className="text-xl md:text-2xl font-semibold">{meal.strMeal}</h1>
					<div className="w-full text-emerald-600 flex justify-between">
						<h1 className="text-sm md:text-lg">{meal.strArea}</h1>
						<h1 className="text-sm md:text-lg">{meal.strCategory}</h1>
					</div>
					<h1 className="text-lg mt-5">Ingredients :</h1>
					<div className="w-full grid grid-cols-2 gap-2 my-3">
						{ingredientsIndex(meal).map(i=>(
							<div className="flex bg-white gap-5 my-2 items-center p-2 font-semibold rounded-full shadow-lg" key={i}>
								<img src={`${ingredientImage}/${meal['strIngredient'+i]}-small.png`} className="w-[60px] bg-white p-1 rounded-full"/>
								<div className="flex-cols">
								<p className="text-emerald-500">{meal['strIngredient'+i]}</p>
								<p className="text-[12px] text-slate-500">{meal['strMeasure'+i]}</p>								
								</div>
							</div>
						))}
					</div>
					{meal.strYoutube&&(
						<div className="w-full flex-cols">
							<h1 className="text-lg">Tutorials :</h1>
								<iframe src={`https://www.youtube.com/embed/${getEmbedId()}`} frameBorder="0" className="w-4/5 h-[250px] mt-5 md:mt-0 mx-auto md:mx-0"
									allow="accelerometer; autoplay; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
					)}
					</div>
			</div>
		</div>
		)
}
export default Recipe
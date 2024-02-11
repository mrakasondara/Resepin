import React,{useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Breadcrumbs} from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import SkeletonHero from '../Skeleton/SkeletonHero'
import SkeletonDetail from '../Skeleton/SkeletonDetail'
import SkeletonIngredients from '../Skeleton/SkeletonIngredients'
import SkeletonYoutube from '../Skeleton/SkeletonYoutube'


const RecipeDetail = ({handlerClick})=>{
	const [meal,setMeal] = useState({})
	const [ingredients,setIngredients] = useState({}) 
	const [isLoading,setIsLoading] = useState(true)
	const {idMeal} = useParams()
	const ingredientImage = 'https://themealdb.com/images/ingredients/'
	const getMeals = () =>{
		fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(response=>response.json()).then(data=>{
			setMeal(...data.meals)	
			setIsLoading(false)	
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
				{!isLoading&&(
					<Breadcrumbs max-items={2} color="white" aria-label="breadcrumb">
						<p className="text-white">{meal.strCategory}</p> 
						<p className="text-white">{meal.strMeal}</p>
					</Breadcrumbs>

				)}
				{isLoading&&(
					<Skeleton variand="rectangle" sx={{fontSize:"1rem", width: '50px'}}/>
				)}
				
			</Breadcrumbs>
				
			</div>
			<div className="w-full flex-cols md:flex my-[3rem] p-5 bg-emerald-300 rounded-lg shadow-lg gap-2 text-white">
				{!isLoading&&(
				<div className="w-full flex-cols md:w-[40%] md:ml-5 mt-5 md:my-5">
					<img src={meal.strMealThumb} className="w-1/2 md:w-full rounded-lg mx-auto md:mx-0"/>
					<h1 className="text-lg px-5 mt-5 font-bold">Instructions :</h1>
					<p className="text-justify px-5 py-1 my-2 h-[20rem] overflow-y-auto">{meal.strInstructions}</p>
				</div>
				)}
				{isLoading&&(
					<SkeletonHero/>
				)}
				<div className="w-full flex-cols md:w-[55%] md:-my-1 my-2 p-5 md:ml-5">
					{!isLoading&&(
						<>
						<h1 className="text-xl md:text-2xl font-semibold">{meal.strMeal}</h1>
						<div className="w-full text-emerald-600 flex justify-between">
						<h1 className="text-sm md:text-lg">{meal.strArea}</h1>
						<h1 className="text-sm md:text-lg">{meal.strCategory}</h1>
						</div>
						<h1 className="text-lg mt-5 font-bold">Ingredients :</h1>
						</>
					)}
					{isLoading&&(
						<SkeletonDetail/>
					)}
					<div className="w-full h-[20rem] overflow-y-auto grid grid-cols-1 md:grid-cols-2 pr-2 gap-[10px] md:gap-2 my-3">
					{!isLoading&&(
						(ingredientsIndex(meal).map(i=>(
							<div className="w-full h-[4rem] flex my-2 items-center p-2 font-semibold rounded-full border-white border-2 overflow-hidden" key={i}>
								<img src={`${ingredientImage}/${meal['strIngredient'+i]}-small.png`} className="w-[60px]  p-1 rounded-full"/>
								<div className="flex-cols w-full ml-5 md:ml-2 ">
								<p className="text-white mx-auto">{meal['strIngredient'+i]}</p>
								<p className="text-[12px] text-gray-900">{meal['strMeasure'+i]}</p>								
								</div>
							</div>
						)))
					)}
					{isLoading&&(
						<SkeletonIngredients/>
					)}	
					</div>
					{!isLoading&&(
						(meal.strYoutube&&(
							<div className="w-full flex-cols">
								<h1 className="text-lg font-bold">Tutorials :</h1>
									<iframe src={`https://www.youtube.com/embed/${getEmbedId()}`} frameBorder="0" className="w-4/5 h-[250px] m-5 md:mt-2 mx-auto "
										allow="accelerometer; autoplay; picture-in-picture"
										allowfullscreen
									></iframe>
								</div>
						))
					)}
					{isLoading&&(
						<SkeletonYoutube/>
					)}
					
					</div>
			</div>
		</div>
		)
}
export default RecipeDetail
import React,{useState,useEffect} from 'react'
import MenuItem from './MenuItem'
import RecipeItem from './RecipeItem'
import SkeletonMenu from '../Skeleton/SkeletonMenu'
import SkeletonRecipes from '../Skeleton/SkeletonRecipes'

const Home =()=>{
	const [recipes,setRecipes] = useState({})
	const [categories,setCategories] = useState({})
	const [isLoadingMenu,setIsLoadingMenu] = useState(true)
	const [isLoadingRecipe,setIsLoadingRecipe] = useState(true)

	const [active,setActive] = useState('Beef')
	useEffect(()=>{
		getCategories()
		getRecipes(active)
	},[])
	
	const getCategories = async () =>{
		const response = await fetch(`https://themealdb.com/api/json/v1/1/categories.php`).then(response=>response.json()).then(res=>{
			setCategories(res.categories)
			setIsLoadingMenu(false)
		})
		// if(response && response.data){
	    //   	setCategories(response.data.categories)
	    //   	// setIsLoading(false)

		// }	
	}

	const getRecipes = async (category)=>{
			const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(response=>response.json()).then(res=>{
				setRecipes(res.meals)
				setIsLoadingRecipe(false)
				setActive(category)
			})
	}


	
	return(
		<div className="w-full flex-col p-5  my-5 overflow-hidden">
				{!isLoadingMenu &&(
					<div className="w-full grid grid-cols-3 md:grid-cols-5 gap-3">
					{categories && categories.map(category=>(
							<MenuItem {...category} key={category.idCategory} handleClick={getRecipes}/>
					))}
					</div>
				)}
				{isLoadingMenu &&(
					<div className="w-full grid grid-rows py-2 gap-[20px]">
	          			<SkeletonMenu/>
	          			<SkeletonMenu/>
	          		</div>
				)}
			<h1 className="text-xl font-bold my-[2rem]">{active} Category</h1>
				{!isLoadingRecipe &&(
					<div className="w-full grid grid-cols-3 md:grid-cols-4 gap-[20px] lg:gap-[30px] my-[2rem]">
						{recipes && recipes.map(recipe=>(
							<RecipeItem {...recipe} key={recipe.idMeal}/>
						))}
					</div>
				)}
				{isLoadingRecipe &&(
					<div className="w-full grid grid-rows gap-[20px]">
          				<SkeletonRecipes/>
          				<SkeletonRecipes/>
          				<SkeletonRecipes/>
          				<SkeletonRecipes/>
						
					</div>
				     
				)}
		</div>
	)
}
export default Home



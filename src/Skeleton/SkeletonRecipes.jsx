import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
const SkeletonRecipes = (props)=>{
	return(
		<div className="w-full flex justify-center">
			<div className="w-full lg:w-[90%] gap-5 flex">
			<Skeleton variant="rounded" sx={{fontSize:"10rem", width: '100%'}}/>
			<Skeleton variant="rounded" sx={{fontSize:"10rem", width: '100%'}}/>
			<Skeleton variant="rounded" sx={{fontSize:"10rem", width: '100%'}}/>
			<Skeleton variant="rounded" sx={{fontSize:"10rem", width: '100%'}}/>
			
			</div>
		</div>
	)
}
export default SkeletonRecipes
import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
const SkeletonIngredients = ()=>{
	return(
		<div className="flex-cols">
			<Skeleton variant="rounded" sx={{fontSize:"2rem",marginTop:"10px"}}/>
			<Skeleton variant="rounded" sx={{fontSize:"2rem",marginTop:"10px"}}/>
			<Skeleton variant="rounded" sx={{fontSize:"2rem",marginTop:"10px"}}/>
		</div>			
	)
}
export default SkeletonIngredients
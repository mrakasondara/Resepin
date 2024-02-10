import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
const SkeletonHero = ()=>{
	return(
		<div className="w-full flex-cols md:w-[40%] md:ml-5 mt-5 md:my-5">
			<Skeleton variant="rounded" sx={{fontSize:"10rem", width:"90%", margin: "auto"}}/>
			<Skeleton variant="rectangle" sx={{fontSize:"1rem", width:"50%", margin: "2rem 0 0 1.5rem"}}/>
			<Skeleton variant="rectangle" sx={{fontSize:"10rem", width:"90%", margin: "1rem 0 0 1.5rem"}}/>			
		</div>
	)
}
export default SkeletonHero
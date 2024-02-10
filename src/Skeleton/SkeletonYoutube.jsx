import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
const SkeletonYoutube = ()=>{
	return(
		<div className="flex-cols -mt-[9rem]">
			<Skeleton variant="rectangle" sx={{fontSize:"1rem", width:"30%"}}/>
			<Skeleton variant="rectangle" sx={{fontSize:"5rem", width:"50%", margin: '1rem auto'}}/>
		</div>	
	)
}
export default SkeletonYoutube
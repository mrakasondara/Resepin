import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
const SkeletonMenu = (props)=>{
	return(
		<div className="w-full flex justify-center">
			<div className="w-full md:w-1/2 lg:w-2/5 gap-5 flex">
			<Skeleton variant="circular" sx={{fontSize:"5rem", width: '50%'}}/>
			<Skeleton variant="circular" sx={{fontSize:"5rem", width: '50%'}}/>
			<Skeleton variant="circular" sx={{fontSize:"5rem", width: '50%'}}/>
			<Skeleton variant="circular" sx={{fontSize:"5rem", width: '50%'}}/>
			
			</div>
		</div>
	)
}
export default SkeletonMenu
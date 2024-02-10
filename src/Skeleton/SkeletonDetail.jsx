import React,{useState} from 'react'
import Skeleton from '@mui/material/Skeleton'
const SkeletonDetail = ()=>{
	return(
		<>
			<Skeleton variant="rectangle" sx={{fontSize:"1rem",width:"30%"}}/>
			<Skeleton variant="rectangle" sx={{fontSize:"1rem",width:"10%",marginTop:'.5rem'}}/>
			<Skeleton variant="rectangle" sx={{fontSize:"1rem",width:"30%",marginTop:'1.5rem'}}/>
		</>
	)
}
export default SkeletonDetail
import React from 'react'
import "./UserDashbord.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AutorenewIcon from '@mui/icons-material/Autorenew';

const UserDashbord = ({review,setIndex,lengthRev}) => {

  return (
   <div style={{ width:'30%', marginTop:40}}><div className="container">
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
          <div className="picture">
            <img className="img-fluid" src={review.image} />
          </div>
          <div className="team-content">
            <h3 className="name">{review.name}</h3>
            <h4 className="title">{review.job}</h4>
          </div>
         <h6>{review.text}</h6>
          <ArrowBackIosIcon onClick={()=>setIndex((pervIndex)=>pervIndex==0?lengthRev-1:pervIndex-1)}/>
          <AutorenewIcon onClick={()=>setIndex(Math.floor(Math.random()*lengthRev))}/>
          <ArrowForwardIosIcon onClick={()=>setIndex((pervIndex)=>pervIndex==lengthRev-1?0:pervIndex+1)}/>
          </div>
        
        </div>
      
    </div>
  </div></div>

  )
}

export default UserDashbord
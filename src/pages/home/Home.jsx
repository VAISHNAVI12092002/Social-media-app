import React from 'react'
import ProfileSide from '../../components/profile/ProfileSide'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Home = () => {
  return (
    <div className="Home">
     <ProfileSide/>
      <PostSide/>
      <RightSide/>
      
</div>
  )
}

export default Home
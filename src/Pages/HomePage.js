import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"
export default function HomePage() {
    let navigate = useNavigate()
    const goToLoginPage = () => {
     navigate('/login')
    }
  const {userInfo} = useSelector((state)=> state.userReducer)
  const [info, setInfo] = useState(false)
 
    let token = userInfo
    let decoded
    if(token.length > 0){
     decoded = jwt_decode(token)
        console.log('decoded: ', decoded);
    }

    const showUserInfo = () => {
     setInfo(true)
    }
    const renderInfo = () => {
     return <div>
        <p>Full name: {decoded.data.full_name}</p>
        <p>Age: {decoded.data.age}</p>
        <p>User name: {decoded.data.user_name}</p>
        <p>User id: {decoded.data.user_id}</p>
     </div>
    }
  return (
    <div>
        {userInfo.length > 0 ? <button onClick={showUserInfo}>Show user info</button> :<button onClick={goToLoginPage}>Log In</button>}
    <div>{info && renderInfo()}</div>
    </div>
  )
}

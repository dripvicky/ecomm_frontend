import React, { useState } from 'react'
import axios from 'axios'
import './Sign.css'
import { useNavigate } from 'react-router-dom'

const Sign = ({isSignUp}) => {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const navigate = useNavigate()

  const handleSignup = async (e) =>{
    e.preventDefault()
    await axios.post('https://mywebsite-17yl.onrender.com/signup',{
       name,email,password
    })
    .then((res)=>{
      if(res.data === 'added'){
        navigate('/signin')
      }
    })
    .catch((e)=>console.log(e.message))
  }

  const handleSignin = async (e)=>{
    e.preventDefault()
    await axios.post('https://mywebsite-17yl.onrender.com/signin',{
      email,password
    })
    .then((res)=>{
      if(res.data === 'signin'){
        navigate('/')
      }
    })
    .catch((e)=>console.log(e.message))
  }

  return (
    <div className='maindiv'>
       <div className='signpage'>
          <form className='form'>
            <h5>{ isSignUp ? 'Welcome' : 'Signin for Exploring' }</h5>
            { isSignUp && <input type='text' placeholder='enter your name' name='name' onChange={(e)=>setname(e.target.value)}></input>}<br/>
            <input type='text' placeholder='enter your email' name='name' onChange={(e)=>setemail(e.target.value)}></input> <br/>
            <input type='password' placeholder='create your password' name='name' onChange={(e)=>setpassword(e.target.value)}></input><br/><br/>
            <button className='btn btn-primary' onClick={isSignUp ? handleSignup : handleSignin}>{ isSignUp ?  'singup' : 'signin'}</button><br/>
          { isSignUp ? <p>already have an account : <span onClick={()=>navigate('/signin')}>signin</span></p>
            : <p>don't have an account ? <span onClick={()=>navigate('/signup')}>signup</span></p>
        }
          </form>
        </div>
    </div>
  )
}

export default Sign

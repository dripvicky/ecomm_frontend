import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaSearch} from 'react-icons/fa'
import {FaOpencart} from 'react-icons/fa6'
import {CiShop} from 'react-icons/ci'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {BiSolidHandDown} from 'react-icons/bi'
import {RxPerson} from 'react-icons/rx'
import {useNavigate} from 'react-router-dom'

const Navbar = ({cart}) => {
    const navigate = useNavigate()
  return (
    <div className='navbar1'>

        <div className='logo bord'>
            <img src='/pics/logo.jpg' alt='logo'/>
        </div>

        <div className='box1'>
             <span><FaSearch size={30}/></span>
             <input placeholder='search for products..'/>
        </div>

        <div className='box2 bord'>
            <span><CiShop size={40} color='white'/></span>
            <span style={{fontSize:'16px', color:'white'}}>Become A Seller</span>
        </div>

        <div className='box3 bord' style={{cursor:'pointer'}} onClick={()=>navigate('/cart')}>
             <span><FaOpencart size={40} color='white'/></span>
             <sup style={{color:'white'}}>{cart.length}</sup>
             <span style={{fontSize:'16px', color:'white'}} >Cart</span>
        </div>

        <div className='box4 bord'>
            <RxPerson color='white' size={40}> <RiArrowDropDownLine/></RxPerson>
            <div className='hover'>
                <span>New User ?</span> <span>Sing up here</span><BiSolidHandDown color='blue'/><br/>
                <hr style={{margin:0,padding:0}} />
                <button style={{marginTop:'2px'}} className='btn btn-primary' onClick={()=>navigate('/signup')}>Signup</button>
                <hr style={{margin:0,padding:0}} />
                <p style={{margin:0,padding:0}}>Already have a Account ? <span className='span' onClick={()=>navigate('/signin')}>Signin</span></p>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar

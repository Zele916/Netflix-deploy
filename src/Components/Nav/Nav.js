import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflix_logo from "./Netflix-Logo.wine.png"


function Nav() {
  let [show,setShow]=useState(false)
  useEffect(()=>{
      window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
              setShow(true)
          }else{
              setShow(false)
          }
      })
      return ()=>{
          window.removeEventListener("scroll")
      }
  },[])

  return (
    <div className={`nav ${show && "is_black"}`}>
        <img 
        className= "nav_logo"
        src={netflix_logo}/>
        <img
        className='nav__avatar'
        src='https://occ-0-987-990.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
        />

        {/* <img 
        className='nav__avatar'
        src='./netflex account kids logo.png'
        alt='Avatar logo'/>         */}
        </div>
  )
}

export default Nav

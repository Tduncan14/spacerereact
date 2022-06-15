import React,{useEffect,useState} from 'react';
import {Link,useLocation,useParams} from 'react-router-dom';
import './Header.css'




const Header = () => {

    const location = useLocation()

    const [newLocation,setlocation] =useState(location.pathname)




   
    const params = useParams()


    console.log(location.pathname)


    console.log(location.pathname === '/')
    
    useEffect(()=> {


    

    })



return (
    <div className='heading'>
    

  <div className="imgs">
      <img src={'assets/shared/logo.svg'} />
  </div>

         <hr className="width" />

        <div className="blur"> </div>

    
        <ul className="header1">
            <li><Link className={location.pathname == newLocation ? 'hverwhite' : ''} to="/">00 HOME</Link></li>
            <li><Link className={location.pathname === "/destination" ? 'hverwhite' : null} to="/destination">01 DESTINATION</Link></li>
            <li><Link className={location.pathname ===  "/crew" ? 'hverwhite' : null} to="/crew">CREW</Link></li>
            <li><Link className={location.pathname === "/technology" ? 'hverwhite' : null} to="/technology">TECHNOLOGY</Link></li>
          </ul>
        
        <div className="clear">

        </div>
    </div>

)


}


export default Header ;
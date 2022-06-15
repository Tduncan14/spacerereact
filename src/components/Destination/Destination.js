import React from 'react'
import './Destination.css'
import { destinations } from '../../dummydata'
import Header from '../Home/Header/Header'




const Destination = () => {



    return(
        <div className="container">
        <div className="bgD" >
              <Header />
            
         

   <div className="subheader">
           <div className="subheaderh1"> <span className="pot"> 01 </span> PICK YOUR DESTINATION</div> 


          </div>


            <div className="flex">

            
          
                 {destinations.slice(0,1).map((des,index) => (


                  <div className="flex">

                    <div className="planetImg">
                        <img src={des.images.png} />

                   </div>


                  <div className="planetInfo">

                  <div className="moonTitles">
                     <ul className="moonList">
                 {destinations.map((des,i) => (
               <li className='list'> {des.name}</li>
                    ))}
           </ul>
        </div>

                      <h1 className="planetH"> {des.name} </h1>
                      <p className="planetP">{des.description}</p>

                    

                    <div className="line">  </div>

                      <div className='timeNspace'>

                    <div className="distance">
                        <span>AVG.DISTANCE</span>
                        <h1>{des.distance}</h1>

                    </div>


                    <div className="time"> 
                        <span>EST.TRAVEL TIME</span>
                        <h1>{des.travel}</h1>

                    </div>
                    </div>

                  </div>
                

                 </div>




                 ))}
            </div>
            



            
        </div>
        </div>




    )

}



export default Destination
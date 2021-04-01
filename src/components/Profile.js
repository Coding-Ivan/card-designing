import React from 'react'
import Design from './Design'
import './css/Profile.css'

 const Profile=()=>{
     return(
        <div>
         <h1 className="head">Profile Card Design</h1>
         {/* <div style={{background:'blue'}} className="car> */}
                {/* <img src="./images/ivano.jpg"/> */}
         <Design 
           
           name={"Laban Mogire"}
           title={"Software Developer"}
       description={"Software ,Flutter,Mobile,Frontend"}
          />
          {/* </div> */}
         
         <Design
              name={"Winnie Mandela"}
              title={"Software Engineer"}
          description={"Software,Graphic Design, Data Science"}
           
         />
      
    <Design
        name={"Ivann Mogeni"}
        title={"Computer Engineer"}
    description={"Software,Flutter,Android,Frontend,"}
    />
    
    <Design
    
    name={"Harun Mbaabu"}
           title={"Data Scientist"}
           description={"Software,Data Science ,Full Stack,Android"}/>
    <Design
    name={"Eric Mokua"}
           title={"Data Scientist"}
           description={"Data Science ,Data Analysis"}/>
    <Design
    
    name={"Ezekiel Wachira"}
           title={"Software Engineer"}
           description={"Software, ,Android, Frontend"}/>
    <Design
    
    name={"Kinanga Dennis"}
           title={"Network Engineer"}
           description={"Software,Game Developer"}/>
    <Design
    
    name={"Royford Wanyoike"}
           title={"Computer Engineer"}
           description={"Software,Graphic Design,Android,Cyber Security"}/>
    <Design
    
    name={"Kelvin Nyariki"}
           title={"Computer Sciencist"}
           description={"Software,Android , Machine Learning"}/>
    <Design
    
    name={"Wycliff Oganga"}
           title={"Network Engineer"}
           description={"Cyber Security,Backend,Android"}/>
               <Design
           name={"Cosmas Kiplangat"}
           title={"Computer Scientist"}
       description={"Software ,Flutter,Mobile,Frontend"}
          />
           <footer>My First React Project || PythonHunter<sup>TM</sup></footer>
           <hr className="hr"></hr>
           <hr className="hr"></hr>
    </div>
     )
 }
 export default Profile;
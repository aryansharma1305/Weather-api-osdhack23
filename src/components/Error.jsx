import React from 'react';
import Styles from './Error.module.css';
import image from './images/weather.png';



const Error =({data})=>(
    <div className={Styles.content} >
        <div>

     <h1>Please Enter location or something went wrong</h1>
     <img src={image} alt="" />

    
     
        </div>

    </div>
);

export default Error
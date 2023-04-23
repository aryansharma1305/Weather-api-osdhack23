import React from 'react'
import Styles from "./forecast.module.css";

function Forecast({data}) {
  return (
    <>
    <div className={Styles.container}>

      
      <div className={Styles.items} id={Styles['item1']}>
        <div className="title">
         <h1>Current Weather</h1>
        </div>
        <div className={Styles.place}>
          <p>{data.place}</p>


        </div>
        <div className="date">
        <p>{data.currdate}</p>
        <p>{data.currday}</p>

        </div>
        
          <div className={Styles.icons}>
            {/* <p>weather_icon:{data.icon}</p> */}
            <img src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} alt="" />

          </div>
          <div className="text">
            <p>{data.currweather}</p>

          </div>

        
        <div className="temp">
          <p>{data.currtemp}°C</p>

        </div>

        
      </div>
      <div className={Styles.items} id={Styles['item2']}>
        <div className="title">
       <h1>Description</h1>
        </div>

        <div className={Styles.data}>
        <div className="pressure">
          {/* <h3>Pressure:</h3> */}
          <p>
          Pressure : <span>   {data.pressure} hPa </span>
          </p>
        </div>
        <div className="humidity">
          <p>Humidity : <span> {data.humidity} %   </span></p>
        </div>
        <div className="wind">
          <p>Wind : <span>  {data.wind} m/s  </span></p>
        </div>
        <div className="maxtemp">
          <p>Maximum temperature : <span>  {data.maxtemp}°C  </span></p>
        </div>
        <div className="mintemp">
          <p>Minimun temperature : <span>  {data.mintemp}°C  </span></p>
        </div>
        </div>

       
      </div>
      < div className={Styles.items} id={Styles['item3']}>
        <div className="day">
          <h1>{data.day2date}</h1>
        </div>
        <div className={Styles.icons}>
          {/* <p>icon:{data.day2icon}</p> */}
          <img src={`https://openweathermap.org/img/wn/${data.day2icon}@2x.png`} alt="" />
        </div>
        <div className={Styles.weather}>
          <p>{data.day2weather}</p>
        </div>
        
          <p>{data.day2maxtemp}°C</p>
        
        
          <p>{data.day2mintemp}°C</p>
        

       

       
      </div>
      <div className={Styles.items} id={Styles['item4']}>
      <div className="day">
      <h1>{data.day3date}</h1>
        </div>
        <div className={Styles.icons}>
          {/* <p>icon:{data.day2icon}</p> */}
          <img src={`https://openweathermap.org/img/wn/${data.day3icon}@2x.png`} alt="" />
        </div>
        <div className={Styles.weather}>
          <p>{data.day3weather}</p>
        </div>
        <div className="maxtemp">
          <p>{data.day3maxtemp}°C</p>
        </div>
        <div className="mintemp">
          <p>{data.day3mintemp}°C</p>
        </div>
      </div>
      <div className={Styles.items} id={Styles['item5']}>
      <div className="day">
      <h1>{data.day4date}</h1>
        </div>
        <div className={Styles.icons}>
          {/* <p>icon:{data.day2icon}</p> */}
          <img src={`https://openweathermap.org/img/wn/${data.day4icon}@2x.png`} alt="" />
        </div>
        <div className={Styles.weather}>
          <p>{data.day4weather}</p>
        </div>
        <div className="maxtemp">
          <p>{data.day4maxtemp}°C</p>
        </div>
        <div className="mintemp">
          <p>{data.day4mintemp}°C</p>
        </div>
      </div>
      <div className={Styles.items} id={Styles['item6']}>
       <div className="day">
       <h1>{data.day5date}</h1>
        </div>
        <div className={Styles.icons}>
          {/* <p>icon:{data.day2icon}</p> */}
          <img src={`https://openweathermap.org/img/wn/${data.day5icon}@2x.png`} alt="" />
        </div>
        <div className={Styles.weather}>
          <p>{data.day5weather}</p>
        </div>
        <div className="maxtemp">
          <p>{data.day5maxtemp}°C</p>
        </div>
        <div className="mintemp">
          <p>{data.day5mintemp}°C</p>
        </div>
        
      </div>
      <div className={Styles.items} id={Styles['item7']}>
      <div className="day">
      <h1>{data.day6date}</h1>
        </div>
        <div className={Styles.icons}>
          {/* <p>icon:{data.day2icon}</p> */}
          <img src={`https://openweathermap.org/img/wn/${data.day6icon}@2x.png`} alt="" />
        </div>
        <div className={Styles.weather}>
          <p>{data.day6weather}</p>
        </div>
        <div className="maxtemp">
          <p>{data.day6maxtemp}°C</p>
        </div>
        <div className="mintemp">
          <p>{data.day6mintemp}°C</p>
        </div>
      </div>


      
      
      </div>
    
    </>
  )
}

export default Forecast
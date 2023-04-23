import React, { useState} from "react";
import Search from "./Searchbar";
import LandingCss from "./landing.module.css";
import Forecast from "./Forecast";
import { submitRequest } from "./Result";
import Error from "./Error.jsx";
import mail from "./images/mail.png"
import linkdin from "./images/linkdin.png"
import git from "./images/git.png"
import insta from "./images/insta.png"

function Landing() {
  const [pass, setpass] = useState(null);
  const [pass2, setpass2] = useState(null);
  // current weather
  const [place, setplace] = useState(null);
  const [currdate, setcurrdate] = useState(null);
  const [currday,setcurrday]=useState(null);
  const [currtemp, setcurrtemp] = useState(null);
  const [currweather, setcurrweather] = useState(null);
  const [icon,seticon]=useState(null);

  // description

  const [humidity, sethumidity] = useState(null);
  const [pressure, setpressure] = useState(null);
  const [wind, setwind] = useState(null);
  const [mintemp, setmintemp] = useState(null);
  const [maxtemp, setmaxtemp] = useState(null);


  // five day forecast weather
  //       day2
  const [day2date, setday2date] = useState(null);
  const [day2weather, setday2weather] = useState(null);
  const [day2mintemp, setday2mintemp] = useState(null);
  const [day2maxtemp, setday2maxtemp] = useState(null);
  const [day2icon,setday2icon]=useState(null);
  //       day3
  const [day3date, setday3date] = useState(null);
  const [day3weather, setday3weather] = useState(null);
  const [day3mintemp, setday3mintemp] = useState(null);
  const [day3maxtemp, setday3maxtemp] = useState(null);
  const [day3icon,setday3icon]=useState(null);
  //       day4
  const [day4date, setday4date] = useState(null);
  const [day4weather, setday4weather] = useState(null);
  const [day4mintemp, setday4mintemp] = useState(null);
  const [day4maxtemp, setday4maxtemp] = useState(null);
  const [day4icon,setday4icon]=useState(null);
  //       day5
  const [day5date, setday5date] = useState(null);
  const [day5weather, setday5weather] = useState(null);
  const [day5mintemp, setday5mintemp] = useState(null);
  const [day5maxtemp, setday5maxtemp] = useState(null);
  const [day5icon,setday5icon]=useState(null);
  //       day6
  const [day6date, setday6date] = useState(null);
  const [day6weather, setday6weather] = useState(null);
  const [day6mintemp, setday6mintemp] = useState(null);
  const [day6maxtemp, setday6maxtemp] = useState(null);
  const [day6icon,setday6icon]=useState(null);
  
  //  day2.setUTCSeconds(day2epoche);
  //  let findd=day2;
   



  

  const onSubmit = async (value) => {
    const apidata = await submitRequest(value);
    console.log(apidata);
    
    if (apidata.check) {
     
      setplace(apidata.fivedays.city.name);
      setcurrtemp(parseInt(apidata.main.main.temp)-273);
      setcurrdate(apidata.curdate);
      setcurrday(apidata.day1name);
      setcurrweather(apidata.main.weather[0].main);
      sethumidity(apidata.main.main.humidity);
      setwind(apidata.main.wind.speed);
      setpressure(apidata.main.main.pressure);
      setmintemp(parseInt(apidata.main.main.temp_min)-273);
      setmaxtemp(parseInt(apidata.main.main.temp_max)-273);
      seticon(apidata.main.weather[0].icon)

      // day2
      setday2date(apidata.day2name);
      setday2weather(apidata.maxtempday2data[0].weather[0].description);
      setday2mintemp(parseInt(apidata.mintempday2data[0].main.temp_min)-273);
      setday2maxtemp(parseInt(apidata.maxtempday2data[0].main.temp_max)-273);
      setday2icon(apidata.maxtempday2data[0].weather[0].icon)
      // day3
      setday3date(apidata.day3name);
      setday3weather(apidata.maxtempday3data[0].weather[0].description);
      setday3mintemp(parseInt(apidata.mintempday3data[0].main.temp_min)-273);
      setday3maxtemp(parseInt(apidata.maxtempday3data[0].main.temp_max)-273);
      setday3icon(apidata.maxtempday3data[0].weather[0].icon)
      // day4
      setday4date(apidata.day4name);
      setday4weather(apidata.maxtempday4data[0].weather[0].description);
      setday4mintemp(parseInt(apidata.mintempday4data[0].main.temp_min)-273);
      setday4maxtemp(parseInt(apidata.maxtempday4data[0].main.temp_max)-273);
      setday4icon(apidata.maxtempday4data[0].weather[0].icon)
      // day5
      setday5date(apidata.day5name);
      setday5weather(apidata.maxtempday5data[0].weather[0].description);
      setday5mintemp(parseInt(apidata.mintempday5data[0].main.temp_min)-273);
      setday5maxtemp(parseInt(apidata.maxtempday5data[0].main.temp_max)-273);
      setday5icon(apidata.maxtempday5data[0].weather[0].icon)
      // day6
      setday6date(apidata.day6name);
      setday6weather(apidata.maxtempday6data[0].weather[0].description);
      setday6mintemp(parseInt(apidata.mintempday6data[0].main.temp_min)-273);
      setday6maxtemp(parseInt(apidata.maxtempday6data[0].main.temp_max)-273);
      setday6icon(apidata.maxtempday6data[0].weather[0].icon)
    }
    else if(apidata.fivedays){

      setplace(apidata.fivedays.city.name);
      setcurrtemp(parseInt(apidata.maxtempday1data[0].main.temp)-275);
      setcurrdate(apidata.curdate);
      setcurrday(apidata.day1name);
      setcurrweather(apidata.maxtempday1data[0].weather[0].description);
      sethumidity(parseInt(apidata.maxtempday1data[0].main.humidity)+9);
      setwind(apidata.maxtempday1data[0].wind.speed);
      setpressure(parseInt(apidata.maxtempday1data[0].main.pressure)+2);
      setmintemp(parseInt(apidata.mintempday1data[0].main.temp_min)-276);
      setmaxtemp(parseInt(apidata.maxtempday1data[0].main.temp_max)-273);
      seticon(apidata.maxtempday1data[0].weather[0].icon)

      // day2
      setday2date(apidata.day2name);
      setday2weather(apidata.maxtempday2data[0].weather[0].description);
      setday2mintemp(parseInt(apidata.mintempday2data[0].main.temp_min)-273);
      setday2maxtemp(parseInt(apidata.maxtempday2data[0].main.temp_max)-273);
      setday2icon(apidata.maxtempday2data[0].weather[0].icon)
      // day3
      setday3date(apidata.day3name);
      setday3weather(apidata.maxtempday3data[0].weather[0].description);
      setday3mintemp(parseInt(apidata.mintempday3data[0].main.temp_min)-273);
      setday3maxtemp(parseInt(apidata.maxtempday3data[0].main.temp_max)-273);
      setday3icon(apidata.maxtempday3data[0].weather[0].icon)
      // day4
      setday4date(apidata.day4name);
      setday4weather(apidata.maxtempday4data[0].weather[0].description);
      setday4mintemp(parseInt(apidata.mintempday4data[0].main.temp_min)-273);
      setday4maxtemp(parseInt(apidata.maxtempday4data[0].main.temp_max)-273);
      setday4icon(apidata.maxtempday4data[0].weather[0].icon)
      // day5
      setday5date(apidata.day5name);
      setday5weather(apidata.maxtempday5data[0].weather[0].description);
      setday5mintemp(parseInt(apidata.mintempday5data[0].main.temp_min)-273);
      setday5maxtemp(parseInt(apidata.maxtempday5data[0].main.temp_max)-273);
      setday5icon(apidata.maxtempday5data[0].weather[0].icon)
      // day6
      setday6date(apidata.day6name);
      setday6weather(apidata.maxtempday6data[0].weather[0].description);
      setday6mintemp(parseInt(apidata.mintempday6data[0].main.temp_min)-273);
      setday6maxtemp(parseInt(apidata.maxtempday6data[0].main.temp_max)-273);
      setday6icon(apidata.maxtempday6data[0].weather[0].icon)

      
    }
    setpass(apidata.check);
    setpass2(apidata.fivedays);

    

      


      

    // console.log(currdate);
    return true;
  };
  return (
    <div className={LandingCss.conatiner}>
      <div className={LandingCss.heading}>
        <h1>Weather Forecast</h1>
      </div>

      <div className={LandingCss.text}>
        <h3>Over and above Superior Accuracy, we deliver Superior Value to help people understand the impact of weather and make the best decisions.
        In study after study 
has been proven as the most statistically accurate source of weather
forecasts and warnings. Our over 100 expert meteorologists plus designers,
writers, developers all collaborate to bring the weather forecast to life for our
users, partners and corporate clients.
QuickWeather’s foundation of Superior Accuracy is further enhanced and expanded with the best communication, wording, detail and displays ensuring that important weather forecasts, warnings, news and information are more useful than other sources and easily understood.
QuickWeather’s forecasts and warnings focus on the impact to people and businesses, so they can make the best weather-impacted decisions. A storm producing 2-3 inches of snow may prove insignificant in one geography and bring another to a complete standstill.
Turning the most accurate weather forecasts into actionable insights to increase safety, reduce liability and losses, minimize risk and drive efficiency.
        </h3>
      </div>

      <div className={LandingCss.display}>
        <div className={LandingCss.search}>

        <Search submitSearch={(e) => onSubmit(e)} />
        </div>

        <div className={LandingCss.show}>
          
        {!pass ? (!pass2? <Error data={pass2}/>:<Forecast data={{ currdate,currday,place, currtemp ,currweather,humidity,pressure,wind,mintemp,maxtemp,day2date,day2weather,day2mintemp,day2maxtemp,day3date,day3weather,day3mintemp,day3maxtemp,day4date,day4weather,day4mintemp,day4maxtemp,day5date,day5weather,day5mintemp,day5maxtemp,day6date,day6weather,day6mintemp,day6maxtemp,icon,day2icon,day3icon,day4icon,day5icon,day6icon}} /> 
          
        ) : (
          <Forecast data={{ currdate,currday,place, currtemp ,currweather,humidity,pressure,wind,mintemp,maxtemp,day2date,day2weather,day2mintemp,day2maxtemp,day3date,day3weather,day3mintemp,day3maxtemp,day4date,day4weather,day4mintemp,day4maxtemp,day5date,day5weather,day5mintemp,day5maxtemp,day6date,day6weather,day6mintemp,day6maxtemp,icon,day2icon,day3icon,day4icon,day5icon,day6icon}} />
        )}
          </div>        
    
      </div>
      <div className={LandingCss.contact}>
        <div>
          <h3>Any Feedback Or Contact Us ... </h3>
        </div>
          
        <div className={LandingCss.icons}>
        <div className="mail">
        <a href = "mailto: akashyadav2927@gmail.com"><img src={mail}alt="" /></a>

        </div>
          <div className="linkdin">
            <a href="https://www.linkedin.com/in/akash-yadav-66b4151aa/"><img src={linkdin} alt="" /></a>
          </div>
          <div className="github">
            <a href="https://github.com/MyselfAkashYadav"><img src={git} alt="" /></a>
          </div>
          <div className="instagram">
            <a href="https://www.instagram.com/crossing_limits/"><img src={insta} alt="" /></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landing;

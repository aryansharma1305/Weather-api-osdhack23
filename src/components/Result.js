import React, { useState } from "react";
import axios from "axios";
// import Search from './Searchbar.jsx'

export const submitRequest = async (location) => {
  let main,fivedays,check,day2data,day3data,day4data,day5data,day6data,maxtempday1data,mintempday1data,maxtempday2data,mintempday2data,maxtempday3data,mintempday3data,maxtempday4data,mintempday4data,maxtempday5data,mintempday5data,maxtempday6data,mintempday6data;
  const today=new Date();
  const curdate=new Date().toJSON().slice(0,10);
  let fday2=new Date();
  fday2.setDate(today.getDate()+1);
  const day2=fday2.toJSON().slice(0,10);
  let fday3=new Date();
  fday3.setDate(today.getDate()+2);
  const day3=fday3.toJSON().slice(0,10);
  let fday4=new Date();
  fday4.setDate(today.getDate()+3);
  const day4=fday4.toJSON().slice(0,10);
  let fday5=new Date();
  fday5.setDate(today.getDate()+4);
  const day5=fday5.toJSON().slice(0,10);
  let fday6=new Date();
  fday6.setDate(today.getDate()+5);
  const day6=fday6.toJSON().slice(0,10);
  const days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  
  const day1name=days[today.getDay()];
  const day2name=days[fday2.getDay()];
  const day3name=days[fday3.getDay()];
  const day4name=days[fday4.getDay()];
  const day5name=days[fday5.getDay()];
  const day6name=days[fday6.getDay()];
  
  
  
  
  
  const BaseUrl= `https://api.openweathermap.org/data/2.5/weather?q=${location} &appid=5ad4e16769bbb61831486dac9d145799`;
  const FivedaysUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=5ad4e16769bbb61831486dac9d145799`;
 
  await axios
  .get(BaseUrl)
  .then((res) => {
    
    
      main = res.data;

      
    })
    .catch((err) => {
      console.log(`Check Location entered /something went wrong...${err}`);
      main=false;
    });
  
    await axios.get(FivedaysUrl).then((res)=>{
      fivedays=res.data;

      let day1data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===curdate){
         return e; 
        }
        // return null;
      })
      day1data=day1data.filter(function(element){
        return element!==undefined;
      });
      let day1maxtemp=Math.max(...day1data.map(data=>data.main.temp_max));
       maxtempday1data=day1data.filter(function(e){
        return (e.main.temp_max===day1maxtemp);
      })
      let day1mintemp=Math.min(...day1data.map(data=>data.main.temp_min));
      mintempday1data=day1data.filter(function(e){
        return (e.main.temp_min===day1mintemp);
      })

      let day2data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===day2){
         return e; 
        }
        // return null;
      })
      day2data=day2data.filter(function(element){
        return element!==undefined;
      });
      let day2maxtemp=Math.max(...day2data.map(data=>data.main.temp_max));
       maxtempday2data=day2data.filter(function(e){
        return (e.main.temp_max===day2maxtemp);
      })
      let day2mintemp=Math.min(...day2data.map(data=>data.main.temp_min));
      mintempday2data=day2data.filter(function(e){
        return (e.main.temp_min===day2mintemp);
      })

      let day3data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===day3){
         return e; 
        }
        // return null;
      })


      day3data=day3data.filter(function(element){
        return element!==undefined;
      });

      let day3maxtemp=Math.max(...day3data.map(data=>data.main.temp_max));
       maxtempday3data=day3data.filter(function(e){
        return (e.main.temp_max===day3maxtemp);
      })
      let day3mintemp=Math.min(...day3data.map(data=>data.main.temp_min));
      mintempday3data=day3data.filter(function(e){
        return (e.main.temp_min===day3mintemp);
      })


      let day4data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===day4){
         return e; 
        }
        // return null;
      })
      day4data=day4data.filter(function(element){
        return element!==undefined;
      });

      let day4maxtemp=Math.max(...day4data.map(data=>data.main.temp_max));
       maxtempday4data=day4data.filter(function(e){
        return (e.main.temp_max===day4maxtemp);
      })
      let day4mintemp=Math.min(...day4data.map(data=>data.main.temp_min));
      mintempday4data=day4data.filter(function(e){
        return (e.main.temp_min===day4mintemp);
      })


      let day5data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===day5){
         return e; 
        }
        // return null;
      })
      day5data=day5data.filter(function(element){
        return element!==undefined;
      });

      let day5maxtemp=Math.max(...day5data.map(data=>data.main.temp_max));
       maxtempday5data=day5data.filter(function(e){
        return (e.main.temp_max===day5maxtemp);
      })
      let day5mintemp=Math.min(...day5data.map(data=>data.main.temp_min));
      mintempday5data=day5data.filter(function(e){
        return (e.main.temp_min===day5mintemp);
      })

      let day6data=fivedays.list.map((e)=>{
        if(e.dt_txt.split(" ")[0]===day6){
         return e; 
        }
        // return null;
      })
      day6data=day6data.filter(function(element){
        return element!==undefined;
      });

      let day6maxtemp=Math.max(...day6data.map(data=>data.main.temp_max));
       maxtempday6data=day6data.filter(function(e){
        return (e.main.temp_max===day6maxtemp);
      })
      let day6mintemp=Math.min(...day6data.map(data=>data.main.temp_min));
      mintempday6data=day6data.filter(function(e){
        return (e.main.temp_min===day6mintemp);
      })

      



      

    }).catch((err)=>{
      console.log(`Check Location entered /something went wrong...${err}`)
      fivedays=false;
    })
    if((main && fivedays)===false){
      check=false;
      // alert("location not found")
    }
    else{
      check=true;
      // alert("")
    }
    // <Search switch={check}/>
    return {main,fivedays,check,curdate,mintempday1data,maxtempday1data,maxtempday2data,mintempday2data,maxtempday3data,mintempday3data,maxtempday4data,mintempday4data,maxtempday5data,mintempday5data,maxtempday6data,mintempday6data,day1name,day2name,day3name,day4name,day5name,day6name};
    
};



import image from './images/cloud.png';
import cloudy from './images/allweather.png'
import sun from './images/sun.png';
import humidity from './images/humidity.png';
import wind from './images/wind.png'
import pressure from './images/pressure.png';
import './style.css'
import { useState } from 'react';
import axios from 'axios';
function Weather(){
const [city, setCity] = useState('');
const [desc, setDesc] = useState('');
const [weather, setWeather] = useState('');
const [temp, setTemp] = useState('');
const [humidityval, setHumidityval] = useState('');
const [windval, setWindval] = useState('');
const [pressureval, setPressureval] = useState('');

function handleCity(e){
setCity(e.target.value)
}
function getWeather(){
var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c24396ed646040b82d412d7a376a6302`)
weatherData.then((res)=>{
setCity(res.data.name)
setWeather(res.data.weather[0].main);
setDesc(res.data.weather[0].description)
setTemp(Math.floor((res.data.main.temp - 273.15)));
setHumidityval(res.data.main.humidity)
setPressureval(res.data.main.pressure)
setWindval(res.data.wind.speed)
})
}

return(
<>
<div className="wrapper p-7 flex flex-wrap">

<div className='left-layout text-white md:border-right md:border-r-2'>
<h1  className='text-3xl'>Stay Ahead of Changing Weather with <b className='text-[#DDB130]'>The Weather App!</b></h1>
<img src={image} alt='Weather' className='w-80'/>
<h2 className='text-4xl'><b>Weather</b> <span className='text-[#DDB130] border-b-2'>Report</span></h2>
</div>
<div className='right-layout pt-12 md:pt-0 flex-grow'>
<div className='form-value'>
<div className='bg-white p-2 mr-3 rounded-md'>
<input placeholder='Enter Your City Name' className='bg-transparent' style={{width: '100%'}} onChange={handleCity} value={city}/>
</div>
<button className='bg-[#DDB130] p-2 rounded-md w-40 mt-5' onClick={getWeather}>Get Report
</button>
</div>
<div className="info mt-6">
<p className='text-4xl text-white capitalize'>{city}</p>
<p className='text-xl text-gray-300 capitalize'>{desc}</p>
</div>
<div className="outer-box rounded-xl mt-10 shadow-lg p-3">

<div className="status text-center py-2">
<img src={cloudy} alt='cloudy' className='w-20 h-20 inline-block'></img>
<p className='text-white text-xl'>{weather}</p>
</div>
<div className="temp text-center py-2">
<img src={sun} alt='sun' className='w-20 h-20 inline-block'></img>
<p className='text-white text-xl'>{temp}&deg;c</p>
</div>
<div className="inner-box flex justify-around">
<div className="box">
<img src={humidity} alt='humidity' className='w-12 h-12'></img>
<p className='text-white text-xl'>{humidityval}%</p>
</div>
<div className="box">
<img src={wind} alt='wind' className='w-12 h-12'></img>
<p className='text-white text-xl'>{windval}km/H</p>
</div>
<div className="box">
<img src={pressure} alt='pressure' className='w-12 h-12'></img>
<p className='text-white text-xl'>{pressureval}</p>
</div>
</div>
</div>
</div>


</div>
</>

)
}

export default Weather;
import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


//what will it do??
//data from API
//hooks to handle state
//useEffect does something after rendering

function App() {
  const [search, setSearch] = useState('')

  const [allData, setAllData] = useState({
    city: '',
    country:'',
    temperature:'',
    humidity:'',
    temp_min:'',
    weatherIcon:''
  })

  useEffect(() => {     //render api call
       fetchData() 
  },[]) 

  const fetchData = async (city) => {
    try{
   const APIKEY = '3e2a83f881e56be636d6f7106141094e'
   const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`)
   await setAllData({
    city: result.data.name,
    country:result.data.sys.country,
    temp: result.data.main.temp,
    humidity:result.data.main.humidity,
    temp_min:result.data.main.temp_min,
    weatherIcon:result.data.weather[0].icon
      })
    } catch(e) {
    console.log('API not loaded correctly or loaded for first time')
    }
  }
  const handleSubmit = (event) => {
    console.log(search)
    event.preventDefault()  
    fetchData(search)
  }

    const handleChange = (event) => {
        setSearch(event.target.value)
        }
return (
  <main>
    <div className="form">
       <h1 >Check the Weather</h1>
       <form onSubmit={handleSubmit}>
        <input
        value={search}
        type='text'
        name='city'
        placeholder='Location'
        onChange={handleChange}
        />
        <button className='button' for='city'>Search</button>
      </form>
          <br/>
      <section>
       <div className='header-div'>
        <div>
        <div className='data'>
         <img alt='pic' src={ 'http://openweathermap.org/img/wn/'
             + allData.weatherIcon + '@2x.png' }/>
              <h1 className='title'>{allData.city}</h1>
              <h2 className='location'>{allData.country}</h2>
          <div className='weather-description'>
            <div>
              <h3>Humidity  </h3>
              <p>{allData.humidity}%</p> 
            </div>
            <div>
              <h3>Temperature  </h3>
            </div>
            <div>
              <p>{allData.temp }°C</p>
              <p>{allData.temp * 1.8 + 32}°F</p> {/*  convert  °C to °F* */}
            </div>
            <div>
              <h3> Min Temperature  </h3> 
              <p>{allData.temp_min}°C</p>
              <p>{allData.temp_min * 1.8 + 32}°F</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  );
}

export default App;

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
    temperature:''
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
    temp: result.data.main.temp
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
    <div className="App">
       <h1>Check the Weather</h1>
       <form onSubmit={handleSubmit}>
        <input
        value={search}
        type='text'
        name='city'
        placeholder='City Name'
        onChange={handleChange}
        />
        <button for='city'>Search</button>
      </form>
          
     <section>
          <h1>{allData.city}</h1>
          <h2>{allData.country}</h2>
          <h3>Temperature  </h3>
          <p>{allData.temp }°C</p>
          <p>{allData.temp * 1.8 + 32}°F</p> {/*  convert  °C to °F* */}
        </section>
      </div>
    </main>
  );
}

export default App;

import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

//what will it do??
//data from API
//hooks to handle state
//useEffect does something after rendering

function App() {

  const [allData, setAllData] = useState({
    city: '',
    country:'',
    temperature:''
  })

  useEffect(() => {     //render api call
        
  })  

  const fetchData = async (city) => {
   const APIKEY = '3e2a83f881e56be636d6f7106141094e'
   const result = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${city }&appid=${APIKEY}`)
  }


  return (
    <div className="App">
        {console.log('Hello World!!!!')}
        <h1>Weather App</h1>
    </div>
  );
}

export default App;

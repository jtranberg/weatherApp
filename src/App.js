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
       fetchData() 
  },[]) 

  const fetchData = async (city) => {
    try{
   const APIKEY = '3e2a83f881e56be636d6f7106141094e'
   const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'Milan'}&appid=${APIKEY}`)
   await setAllData({
    city: result.data.name,
    country:result.data.sys.country,
    temp: result.data.main.temp
      })
    } catch(e) {
    console.log('API not loaded correctly or loaded for first time')
    }
  }


  return (
    <div className="App">
        {console.log("test: successful deployment",
         ' 2. test for API fetch( city, country, temp)', 
         ' 3. test for temp',  
         allData.city,allData.country,  allData.temp)}
        <h1>Check the Weather</h1>
    </div>
  );
}

export default App;

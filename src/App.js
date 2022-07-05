import background from './assets/frontPage.jpg'
import Front from './components/Front'
import Under from './components/Under';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [city, setCity] = useState('')
  const [celcius, setCelcius] = useState('')
  const [windDir, setWindDir] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [cloudsPer, setCloudsPer] = useState('')
  const [sunRise, setSunRise] = useState('')
  const [sunSet, setSunSet] = useState('')


  const heyCity = (value) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=1ad92159eb08e9212c1e2b681ff4f804`)
    .then(res => res.json())
    .then(data => {
      setCity(data['name'])
      setCelcius(Math.round(data['main']['temp']-273))
      setWindDir(data['wind']['deg'])
      setWindSpeed(data['wind']['speed'])
      setCloudsPer(data['clouds']['all'])
      setSunRise(data['sys']['sunrise'])
      setSunSet(data['sys']['sunset'])
  }).catch(err => console.log(err))
}

  
  return (
    <div className="App">
       <img src={background} alt="Background"></img>
       <Header onCity={heyCity}/>
       <Front city={city} celcius={celcius}/>
       <Under windDir={windDir} windSpeed={windSpeed} cloudsPer={cloudsPer} sunRise={sunRise} sunSet={sunSet}/>
    </div>
  );
}

export default App;

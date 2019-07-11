import React from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';


const API_KEY = "dcda87aec813569f449c25a3e20cf05f";


class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <p>Hello from React!</p>
        <Titles/>
        <Forms getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;
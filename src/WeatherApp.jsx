import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Pune",
        feelslike:24.84,
        temp:35.86,
        tempMin:24.06,
        tempMax:26.00,
        humidity:47,
        weather:"haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);

    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
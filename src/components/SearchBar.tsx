import React, { Component } from "react";
import "../components/SearchBar.css"

import InputForm from "../components/InputForm";

interface FetchinStates {
  city: string;
  data: number | undefined;
  temperature: number | undefined;
  humidity: number | undefined;
  country: string | undefined
  feelslike: string | undefined
  error: string | undefined
}

export default class SearchBar extends Component<{}, FetchinStates> {
  state = {
    city: "",
    data: undefined,
    temperature: undefined,
    humidity: undefined,
    country: undefined,
    feelslike: undefined,
    error: undefined
  };

   getWeather=async(e: any)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const fetchWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7455b647c283cf033bf6c77821d011ee&units=metric`
    );
    const data = await fetchWeather.json();
    console.log(data);
    if(data.message !== "Nothing to geocode"){
    this.setState({
      temperature: data.main.temp,
      humidity: data.main.humidity,
      country: data.sys.country,
      feelslike: data.main.feels_like,
      error:""
     
   
    });
} else{
    this.setState({
        temperature: undefined,
        country: undefined,
        humidity: undefined,
        feelslike: undefined,
        error: "Please enter city without any mistake!"
    });
}
   
  }

  render() {
    return (
      <div>
        <InputForm getWeather={this.getWeather} />
        <div style={{paddingTop:"60px", fontWeight:500, fontSize:"30px", display:"display-flex justify-content-between", justifyContent:"space-evenly"}}>
        {<p>Country: {this.state.country}</p>}
        {<p>Temperature: {this.state.temperature} °C</p>}
        {<p>Feels like: {this.state.feelslike}</p>}
        {<p>Humidity: {this.state.humidity}</p>}
        </div>
        {this.state.error}
     
      </div>
    );
  }
}

let weather = {
    apiKey: "31c243bca38e6b6a2b78ce59559d780f",
   
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ 
            city + ",norway&units=metric&appid=" + 
            this.apiKey
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // do something with the data
              })
              .catch(error => {
                console.error(error);
                // handle the error
              }));
   
},
displayWeather: function(data){
    const{name} = data;
    const {icon, description} = data.weather;
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name,icon, description, temp,humidity,speed);
}

};
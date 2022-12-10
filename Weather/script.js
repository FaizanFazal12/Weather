const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52bb76ea52msh30c598d4aadb1aep11c87djsn69f77478ee78',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const weather = (city) => {
	cityName.innerHTML = city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= ' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	weather(city.value)
	e.preventDefault()
})
weather("Faisalabad");


const Faisalabad = () => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Faisalabad ', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pctfa.innerHTML = response.cloud_pct
			tempfa.innerHTML = response.temp
			feels_likefa.innerHTML = response.feels_like
			humidityfa.innerHTML = response.humidity
			min_tempfa.innerHTML = response.min_temp
			max_tempfa.innerHTML = response.max_temp
			sunrisefa.innerHTML = response.sunrise
		

		})
}
const Islamabad = () => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad ', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pctla.innerHTML = response.cloud_pct
			templa.innerHTML = response.temp
			feels_likela.innerHTML = response.feels_like
			humidityla.innerHTML = response.humidity
			min_templa.innerHTML = response.min_temp
			max_templa.innerHTML = response.max_temp
			sunrisela.innerHTML = response.sunrise
			
		})
}
const Karachi = () => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi ', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pctka.innerHTML = response.cloud_pct
			tempka.innerHTML = response.temp
			feels_likeka.innerHTML = response.feels_like
			humidityka.innerHTML = response.humidity
			min_tempka.innerHTML = response.min_temp
			max_tempka.innerHTML = response.max_temp
			sunriseka.innerHTML = response.sunrise
		})
}
const Lahore = () => {


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore ', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)

			cloud_pctlaa.innerHTML = response.cloud_pct
			templaa.innerHTML = response.temp
			feels_likelaa.innerHTML = response.feels_like
			humiditylaa.innerHTML = response.humidity
			min_templaa.innerHTML = response.min_temp
			max_templaa.innerHTML = response.max_temp
			sunriselaa.innerHTML = response.sunrise

		})
}
Faisalabad()
Islamabad()
Karachi()
Lahore()
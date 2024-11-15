const API_KEY = '15e5b5d3fbdc3a011ff11395b100a0e7' ;

// ADD listener ( botão de busca )
document.getElementById('search-button').addEventListener('click', fetchWeather);

function fetchWeather() {
    const cityName = document.getElementById('city-input').value.trim();

    if (!cityName) {
        changeWeatherError('Por favor insira o nome de uma cidade');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=pt_br`
 
    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não localizada');
            }
            return response.json();  //converte para JSON type
        }) 
        .then(data => {
            changeWeather(data); //Trás os dados da função localizada pelo id do HTML
            console.log(data)
        })
        .catch( error => {
            changeWeatherError(error); 
        });
}

//função para elementos que mudarão a partir da cidade declarada no input
function changeWeather(data) {
    body.classList.remove('hot-weather', 'cold-weather', 'rainy-weather', 'foggy-weather');

    const weatherMain = data.weather[0].main.toLowerCase();

    if (weatherMain.includes('clear')) {
        body.classList.add('hot-weather');
    } else if (weatherMain.includes('rain')) {
        body.classList.add('rainy-weather');
    } else if (weatherMain.includes('snow') || data.main.temp < 15) {
        body.classList.add('cold-weather');
    } else if (weatherMain.includes('fog') || weatherMain.includes('mist')) {
        body.classList.add('foggy-weather');
    }

    document.getElementById('temperature').textContent = `${Math.floor(data.main.temp)}°`;

    document.getElementById('city-name').textContent = data.name ;

    document.getElementById('icon-weather').src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    document.getElementById('description').textContent = data.weather[0]?.description

    document.getElementById('temp-max').textContent = `${data.main.temp_max} °` ;

    document.getElementById('temp-min').textContent = `${data.main.temp_min} °` ;

    document.getElementById('humidity').textContent =`${data.main.humidity} %`;

}

function changeWeatherError() {
    document.getElementById('city-input').textContent = 'Error' ;

    document.getElementById('icon-weather').src = '';

    document.getElementById('temperature').textContent = 

    document.getElementById('date-current').textContent = '';

    document.getElementById('description').textContent = '';

    document.getElementById('temp-max').textContent = 0 ;

    document.getElementById('temp-min').textContent = 0 ;

    document.getElementById('humidity').textContent = 0 ;
}
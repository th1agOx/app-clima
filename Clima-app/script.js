const API_KEY = '15e5b5d3fbdc3a011ff11395b100a0e7' ;

// ADD listener ( botão de busca )
document.getElementById('search-button').addEventListener('click', fetchWeather);

// ADD busca a partir do click no botão ENTER
document.getElementById('city-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada foi Enter
        fetchWeather();
    }
});

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
                throw new Error();
            }
            return response.json();  //converte para JSON type
        }) 
        .then(data => {
            changeWeather(data); //Trás os dados da função localizada pelo id do HTML
            console.log(data)    // consulta os dados da API
        })
        .catch( error => {
            changeWeatherError(error); 
        });
}

//função para elementos que mudarão a partir da cidade declarada no input
function changeWeather(data) {
    document.getElementById('temperature').textContent = `${Math.floor(data.main.temp)}°`;

    document.getElementById('city-name').textContent = data.name ;

    document.getElementById('icon-weather').src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    document.getElementById('description').textContent = data.weather[0]?.description

    document.getElementById('temp-max').textContent = `${data.main.temp_max} °` ;

    document.getElementById('temp-min').textContent = `${data.main.temp_min} °` ;

    document.getElementById('humidity').textContent =`${data.main.humidity} %`;

}

function changeWeatherError() {  
    document.getElementById('city-input').focus();  //retorna o foco ao input

    document.getElementById('city-input').textContent = 'Cidade não encontrada' ;

    document.getElementById('icon-weather').src = 'Icone Error';

    document.getElementById('temperature').textContent = 0

    document.getElementById('description').textContent = 'Description error';

    document.getElementById('temp-max').textContent = 0 ;

    document.getElementById('temp-min').textContent = 0 ;

    document.getElementById('humidity').textContent = 0 ;
}
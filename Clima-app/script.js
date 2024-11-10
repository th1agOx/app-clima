const key = '16bc9c872b39aa4c55ebcb113cdae1af';
const searchCity = document.getElementById('input-city');
const searchButton = document.getElementById('search-button');
const cityInfo = document.getElementById('city-info');
const detailsInfo = document.getElementById('details-info');
const errorMessage = document.getElementById('error')

searchButton.addEventListener('click', () => fetchWeatheData());
cityInfo.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchWeatheData();
    }
});

async function  fetchWeatheData() {
    const city = cityInput.value.trim();
    if (!city) {
        showerror('Cidade invalida, por favor tente novamente');
        return;
    }
}
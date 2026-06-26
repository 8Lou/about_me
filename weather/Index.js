const api = {
    endpoint: 'https://api.openweathermap.org/data/2.5/',
    key: '010b9a62e54347e26275e34a9e196a34'
}
const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

getOurDate();

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value)
    }
}
getDefaultData();

async function getDefaultData() {
    let city = 'Obninsk';
    try {
        const res = await fetch(`${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const result = await res.json();
        let cityDisplay = document.querySelector('#city');
        cityDisplay.textContent = "Obninsk, RU";
        displayResult(result);
    } catch (error) {
        showError('Could not load default weather data. Please try again later.');
        console.error('getDefaultData error:', error);
    }
}

async function getInfo(data) {
    if (!data.trim()) {
        showError('Please enter a city name.');
        return;
    }
    try {
        const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
        if (!res.ok) {
            if (res.status === 404) {
                showError(`City "${data}" not found. Please check the spelling.`);
            } else {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return;
        }
        const result = await res.json();
        displayResult(result);
    } catch (error) {
        showError('Could not fetch weather data. Please check your connection.');
        console.error('getInfo error:', error);
    }
}

function displayResult(result) {
    let city = document.querySelector('#city');
    city.textContent = `${result.name}, ${result.sys.country}`;
    
    let temperature = document.querySelector('#temperature');
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;
    
    let feelsLike = document.querySelector('#feelsLike');
    feelsLike.innerHTML = "Feel like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;
    
    let conditions = document.querySelector('#conditions');
    conditions.textContent = `${result.weather[0].main}`;
    
    let variation = document.querySelector('#variation');
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}<span>°</span>` + " Max: " + `${Math.round(result.main.temp_max)}<span>°</span>`;
    
    // Clear any error message
    clearError();
}

function showError(message) {
    let errorEl = document.querySelector('#error-message');
    if (!errorEl) {
        errorEl = document.createElement('p');
        errorEl.id = 'error-message';
        errorEl.style.cssText = 'color: #FF6B6B; font-size: 18px; text-align: center; font-weight: bold; text-shadow: 1px 1px #263A29; font-family: "Roboto", sans-serif; margin-top: 20px;';
        document.querySelector('#container').appendChild(errorEl);
    }
    errorEl.textContent = message;
    
    // Clear city/temperature display
    document.querySelector('#city').textContent = '';
    document.querySelector('#temperature').innerHTML = '';
    document.querySelector('#feelsLike').innerHTML = '';
    document.querySelector('#conditions').textContent = '';
    document.querySelector('#variation').innerHTML = '';
}

function clearError() {
    const errorEl = document.querySelector('#error-message');
    if (errorEl) {
        errorEl.remove();
    }
}

function getOurDate() {
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    let showDate = document.querySelector('#date');
    showDate.textContent = `${day}`+ " "+`${todayDate}`+ " "+`${month}` + " " + `${year}`
}

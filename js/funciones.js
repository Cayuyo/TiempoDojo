function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function actualizarTemperaturas() {
    const medida = document.getElementById('medida');
    const temperaturaMax = document.querySelectorAll('.maxima h3');
    const temperaturaMin = document.querySelectorAll('.minima h3');

    medida.addEventListener('change', function() {
        const medidaSeleccionada = medida.value;

        if (medidaSeleccionada === '1') {
            // Convertir de °F a °C
            temperaturaMax.forEach((maxima) => {
                const valorMaximaFahrenheit = parseFloat(maxima.textContent);
                const valorMaximaCelsius = parseInt(fahrenheitToCelsius(valorMaximaFahrenheit));
                maxima.textContent = valorMaximaCelsius + '°';
            });

            temperaturaMin.forEach((minima) => {
                const valorMinimaFahrenheit = parseFloat(minima.textContent);
                const valorMinimaCelsius = parseInt(fahrenheitToCelsius(valorMinimaFahrenheit));
                minima.textContent = valorMinimaCelsius + '°';
            });
        } else {
            // Convertir de °C a °F
            temperaturaMax.forEach((maxima) => {
                const valorMaximaCelsius = parseFloat(maxima.textContent);
                const valorMaximaFahrenheit = parseInt(celsiusToFahrenheit(valorMaximaCelsius));
                maxima.textContent = valorMaximaFahrenheit + '°';
            });

            temperaturaMin.forEach((minima) => {
                const valorMinimaCelsius = parseFloat(minima.textContent);
                const valorMinimaFahrenheit = parseInt(celsiusToFahrenheit(valorMinimaCelsius));
                minima.textContent = valorMinimaFahrenheit + '°';
            });
        }
    });
}

actualizarTemperaturas();

function ocultarCookies() {
    const cookies = document.querySelector('.cookies');
    //console.log(cookies);
    cookies.style.display = 'none';
}

const btnCookies = document.getElementById('btn-cookies');
btnCookies.addEventListener('click', ocultarCookies);

function alertaMeteorologica(element) {
    console.log(element);
    alert(`Cargando informe meteorológico de ${element.textContent}`);
}

const ciudadesLista = document.querySelectorAll('.ciudades li');

for (let i = 0; i < ciudadesLista.length; i++) {
    const li = ciudadesLista[i];
    
    li.addEventListener('click', function() {
        alertaMeteorologica(this);
    });
}
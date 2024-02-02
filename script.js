let urlbase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '5bd75c8cea07edec2084ba15f8472210'
// let para cambiar los grados kelvin a grados celsius
let difKelvin = '273.15'
//Para hacer el escuchador click desde el html ingresar la cuidad
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClimas(ciudad)
    }
})
function fetchDatosClimas(ciudad) {
    fetch(`${urlbase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        //para escribir el dato cambiamos el console de response y pasamos a mostrar datos climas
        .then(data => mostrardatosClima(data))
}
function mostrardatosClima(data) {
    console.log(data);
    // hacer constante para jalar el ID del div de datos climas y hacer el element para mostrar el element(el const jala todo el div entero)
    const divDatosClima = document.getElementById('datosClima')
    // Para poner el datos climas en vacio, siempre que toques el botom buscar va a vaciar la informacion
    divDatosClima.innerHTML = ''

    //crear 3 divs vacios
    const cuidadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const ciudadp = data.sys.country
    const icono = data.weather[0].icon
    // para crear elementos en el html esto es nuevo tema 
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadp} - ${cuidadNombre}`
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es de ${Math.floor(temperatura - difKelvin)}ºC`
    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/10d@2x.png`
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `la descripcion meteorologica es: ${descripcion}`
   

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
   

}









// function mostrasDatosDelClima(data) {
//     console.log(data);
//     const divDatosClima = document.getElementById('datosClima');
//     divDatosClima.innerHTML = ''

//     const ciudadNombre = data.name
//     const temperatura = data.main.temp
//     const descripcion = data.weather[0].description



// }
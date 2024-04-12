// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Enero", "Diciembre", "Noviembre", "Octubre", "Septiembre","Agosto","Julio","Junio","Mayo","Abril","Marzo","Febrero"]
// Podemos tener varios conjuntos de datos
const datosVentas2019 = {
    label: "2019",
    data: [800, 880, 900, 900, 650, 650, 620, 620, 680, 900, 650, 600], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(182, 40, 125,0.2)', // Color de fondo
    borderColor: 'rgba(182, 40, 125, 1)', // Color del borde
    borderWidth: 0.5,// Ancho del borde
};
const datosVentas2020 = {
    label: "2020",
    data: [6000, 5000, 5500, 5500, 3000, 3000, 3000, 3500, 3500, 5500, 6000, 6500], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(216, 200, 225,0.2)', // Color de fondo
    borderColor: 'rgba(93, 14, 139, 1)', // Color del borde
    borderWidth: 0.5,// Ancho del borde
};
const datosVentas2021 = {
    label: "2021",
    data: [3500, 3200, 3200, 2500, 950, 950, 900, 900, 950, 1000, 2500, 2500], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
    backgroundColor: 'rgba(244, 166, 11, 0.2)',// Color de fondo
    borderColor: 'rgba(244, 166, 11, 1)',// Color del borde
    borderWidth: 0.5,// Ancho del borde
};

new Chart($grafica, {
    type: 'line',// Tipo de gráfica
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2019,
            datosVentas2020,
            datosVentas2021,
            
            // Aquí más datos...
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});
const camiones = [

    {
        id: 1,
        marca: "Chevrolet",
        color: "Negro",
        precio: 1500,
    },

    {
        id: 2,
        marca: "Chevrolet",
        color: "Rojo",
        precio: 1800,
    },

    {
        id: 3,
        marca: "Chevrolet",
        color: "Azul",
        precio: 1500,
    },

    {
        id: 4,
        marca: "Ford",
        color: "Gris",
        precio: 1300,
    },

    {
        id: 5,
        marca: "Ford",
        color: "Rojo",
        precio: 1500,
    },

    {
        id: 6,
        marca: "Ford",
        color: "Naranja",
        precio: 1200,
    },

    {
        id: 7,
        marca: "Toyota",
        color: "Naranja",
        precio: 1900,
    },

    {
        id: 8,
        marca: "Toyota",
        color: "Negro",
        precio: 1800,
    },

    {
        id: 9,
        marca: "Toyota",
        color: "Verde",
        precio: 3500,
    },

    {
        id: 10,
        marca: "Renault",
        color: "Verde",
        precio: 2000,
    },

    {
        id: 11,
        marca: "Renault",
        color: "Negro",
        precio: 1600,
    },

    {
        id: 12,
        marca: "Renault",
        color: "Rojo",
        precio: 1900,
    },

    {
        id: 13,
        marca: "Ford",
        color: "Azul",
        precio: 1900,
    },

    {
        id: 14,
        marca: "Toyota",
        color: "Gris",
        precio: 1900,
    },

    {
        id: 15,
        marca: "Renault",
        color: "Azul",
        precio: 3500,
    },

    {
        id: 16,
        marca: "Chevrolet",
        color: "Naranja",
        precio: 2200,
    },

    {
        id: 17,
        marca: "Ford",
        color: "Verde",
        precio: 1500,
    },

    {
        id: 18,
        marca: "Chevrolet",
        color: "Gris",
        precio: 1900,
    },
    
];
    
const marcaCamion = document.getElementById("selectMarca");
const colorCamion = document.getElementById("selectColor");
const marcaButton = document.querySelector(".marca-btn");
const colorButton = document.querySelector(".color-btn");
const ambosButton = document.querySelector(".ambos-btn");
const cardContainer = document.querySelector(".cardContainer");
const cards = document.querySelectorAll(".cardAuto");

//Pisa lo que existe en el LS con la nueva información, en caso de que se agreguen nuevos estilos de Camiones
const saveToLocalStorage = () => {
    localStorage.setItem("Camiones", JSON.stringify(camiones));
};

//Se ejecuta antes de guardar la variable de listaCamiones, así usa el listado completo
saveToLocalStorage();

//Obtiene el listado actualizado de los Camiones
let listaCamiones = localStorage.getItem("Camiones")

//Acá, lo que hago es mostrar toda la lista de cards en la pagina 
const renderListaCamiones = (arrayCamiones) => {

    let cardsCode = ""

    arrayCamiones.forEach(camion => {
        cardsCode = cardsCode + renderCamion(camion)
    });

    return cardContainer.innerHTML = cardsCode; 
}

const renderCamion = (camion) => {
    const {id, marca, color, precio, } = camion;

    return ` <div class="cardAuto  ${color}">
                <h2 class="nombreAuto">${marca} ${color}</h2>
                <div class="precioAuto">
                    <h2>Precio: $${precio}</h2>
                </div>
            </div>
        `
}

const filtrarSeleccion = (marca, color) => {

    let arrayFiltrado = ""

    if (!marca) {
        arrayFiltrado = camiones.filter(camion => camion.color === colorCamion.value)
    } else if (!color) {
        arrayFiltrado = camiones.filter(camion => camion.marca === marcaCamion.value)
    } else {
        arrayFiltrado = camiones.filter(camion => camion.color === colorCamion.value && camion.marca === marcaCamion.value)
    } 

    return arrayFiltrado;
}


//TODO:
const filtrarMarca = (e) => {
    e.preventDefault();

    const marcaElegida = marcaCamion.value;
    const marcaElegidaArray = filtrarSeleccion(marcaElegida);
    
    cardContainer.innerHTML = renderListaCamiones(marcaElegidaArray);
}

//TODO:
const filtrarColor = (e) => {

    e.preventDefault();

    const colorElegido = colorCamion.value;
    const colorElegidoArray = filtrarSeleccion(null, colorElegido);

    cardContainer.innerHTML = renderListaCamiones(colorElegidoArray);
}

//TODO:
const filtrarAmbos = (e) => {
    e.preventDefault();

    const marcaElegida = marcaCamion.value;
    const colorElegido = colorCamion.value;
    const ambosArray = filtrarSeleccion(marcaElegida, colorCamion.value);

    if (ambosArray.length === 0) {
        showError(cardContainer, "El modelo deseado no se encuentra disponible en ese color. Por favor, seleccione otro color u otro modelo.")
    } else {
        cardContainer.innerHTML = renderListaCamiones(ambosArray);
    }

}

const init = () => {
    renderListaCamiones(camiones);
    marcaButton.addEventListener("click", filtrarMarca);
    colorButton.addEventListener("click", filtrarColor);
    ambosButton.addEventListener("click", filtrarAmbos);
};

init();

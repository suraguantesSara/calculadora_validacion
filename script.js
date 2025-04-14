let numerosIngresados = []; // Guarda los números originales
let numerosVerificados = []; // Guarda la versión reescrita

// Captura números con Enter
document.getElementById("inputNumero").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let numero = parseFloat(this.value);
        if (!isNaN(numero)) {
            numerosIngresados.push(numero);
            actualizarLista("listaNumeros", numerosIngresados);
            this.value = ""; // Limpia el campo
        }
    }
});

// Función para mostrar números en pantalla
function actualizarLista(idLista, arrayNumeros) {
    let lista = document.getElementById(idLista);
    lista.innerHTML = "";
    arrayNumeros.forEach((num, index) => {
        let item = document.createElement("li");
        item.textContent = `#${index + 1}: ${num}`;
        lista.appendChild(item);
    });
}

// Función para calcular la suma
function finalizarCaptura() {
    let suma = numerosIngresados.reduce((total, num) => total + num, 0);
    document.getElementById("sumaTotal").textContent = `Total: ${suma}`;
}

// Captura la segunda entrada para comparación
document.getElementById("inputVerificacion").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let numero = parseFloat(this.value);
        if (!isNaN(numero)) {
            numerosVerificados.push(numero);
            actualizarLista("listaVerificacion", numerosVerificados);
            this.value = ""; // Limpia el campo
        }
    }
});

// Función para comparar las listas
function verificarNumeros() {
    let diferencias = [];
    numerosIngresados.forEach((num, index) => {
        if (num !== numerosVerificados[index]) {
            diferencias.push(`❌ Error en posición ${index + 1}: Ingresaste ${numerosVerificados[index]} en lugar de ${num}`);
        }
    });

    document.getElementById("resultado").innerHTML = diferencias.length > 0 ? diferencias.join("<br>") : "✅ ¡Todo coincide!";
}

function reiniciarCalculadora() {
    // Limpiar arrays
    numerosIngresados = [];
    numerosVerificados = [];

    // Limpiar visualización en pantalla
    document.getElementById("listaNumeros").innerHTML = "";
    document.getElementById("listaVerificacion").innerHTML = "";
    document.getElementById("sumaTotal").textContent = "0";
    document.getElementById("resultado").innerHTML = "";

    // Vaciar los campos de entrada
    document.getElementById("inputNumero").value = "";
    document.getElementById("inputVerificacion").value = "";
}

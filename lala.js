alert("Este es el trivial responder con 1 2 3 dependiendo la respuesta a jugar !!!!");

let pregunta = Number(prompt("¿En qué año se disolvió la Unión Soviética?\n1)1991 \n2)1837 \n3)1920"));

let pregunta2 = Number(prompt(" ¿Cuál fue el primer país en aprobar el sufragio femenino?\n1)Argentina \n2)Nueva Zelanda \n3)España"));

let pregunta3 = Number(prompt("¿En qué año llegó el hombre a la Luna?\n1)1991 \n2)1969 \n3) 1920"));

let pregunta4 = Number(prompt("¿Cuál es el río más caudaloso del mundo?\n1)El Nilo \n2)El Amazonas \n3)El Danubio"));

let pregunta5 = Number(prompt("¿En qué país se encuentra el río Po?\n1)Italia \n2)Brazil \n3)Chile"));

let pregunta6 = Number(prompt(" ¿Qué país está entre Perú y Colombia?\n1)Argentina \n2)Brazil \n3)Ecuador"));

let pregunta7 = Number(prompt("¿Qué océano baña las aguas de Sri Lanka?\n1)Índico \n2)Pasifico \n3)No tengo ni idea"));

let pregunta8 = Number(prompt("¿En qué país se encuentra el pico Aconcagua?\n1)Argentina \n2)China \n3)EEUU"));

let pregunta9 = Number(prompt("¿Cuántos elementos tiene la tabla periódica?\n1)118 \n2)115 \n3)98"));

let pregunta10 = Number(prompt("¿Qué famoso youtuber español tiene su propia serie de animación?\n1)El Rubius \n2)Vegeta \n3)Alex el capo"));

let correcta = (10);


const suma = (a, b) => { return a + b }
const resta = (a, b) => { return a - b }

let puntoMas = suma(correcta, 10)
let punoMenos = resta(correcta, 5)

// pregunta 1
console.log("------------------------------------------------------\npregunta 1")
if (pregunta == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 2
console.log("------------------------------------------------------\npregunta 2")
if (pregunta2 == 2) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 3
console.log("------------------------------------------------------\npregunta 3")
if (pregunta3 == 2) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 4
console.log("------------------------------------------------------\npregunta 4")
if (pregunta4 == 2) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 5
console.log("------------------------------------------------------\npregunta 5")
if (pregunta5 == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 6
console.log("------------------------------------------------------\npregunta 6")
if (pregunta6 == 3) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 7
console.log("------------------------------------------------------\npregunta 7")
if (pregunta7 == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 8
console.log("------------------------------------------------------\npregunta 8")
if (pregunta8 == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 9
console.log("------------------------------------------------------\npregunta 9")
if (pregunta9 == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}
// pregunta 10
console.log("------------------------------------------------------\npregunta 10 ")
if (pregunta10 == 1) {
    correcta = (correcta + 10)
    console.log("felisitaciones sumas 10 puntos tu puntuacion es de " + correcta + " puntos")

    suma
} else {
    correcta = (correcta - 5)
    console.log("pregunta erronea pierdes 5 puntos" + "puntuacion es de " + correcta + " puntos")
    resta
}


// resultado final

if (correcta >= 1) {
    alert("felisitaciones tu puntuacion es de " + correcta + " puntos")
} else {
    alert("Hermano/a sos un desastre terminaste con  " + correcta + " puntos")

}



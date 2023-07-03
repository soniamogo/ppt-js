var jug1 = "piedra";
var jug2;
var jugada = 1;
var opciones = ["piedra", "papel", "tijera"]
var imagenes={
    piedra:"images/piedra.png",
    papel:"images/papel.png",
    tijera:"images/tijera.png",
}
var ganador;

function jugador2(){
    var rand = Math.floor(Math.random()*opciones.length);
    jug2 = opciones[rand];
    document.getElementById("dos").style.opacity="1";
    document.getElementById("imgJug2").src=imagenes[jug2];
}

function cambiarSeleccion(jugador, opcion){
    if(jugador === 1){
        jug1 = opcion;
        document.getElementById("imgJug1").src=imagenes[opcion];

    }else{
        jug2 = opcion;
        document.getElementById("imgJug2").src=imagenes[opcion];
    }
    jugador2()
    jugar()
}

function jugar(){
    if(jug1 === "tijera" && jug2 === "papel" ||
    jug1 === "piedra" && jug2 === "tijera" ||
    jug1 === "papel" && jug2 === "piedra"){
        ganador = "Jugador 1";
    }else if (jug2 === "tijera" && jug1 === "papel" ||
            jug2 === "piedra" && jug1 === "tijera" ||
            jug2 === "papel" && jug1 === "piedra"){
                ganador = "Jugador 2"
    }else{
        ganador = "Empate"
    }
    document.getElementById("resultado").innerHTML="Gana " + ganador;
    document.getElementById("jugar").innerHTML="Jugada " + jugada;
    jugada++;
}
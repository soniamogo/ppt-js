var jug1 = "piedra";
var jug2 = "papel";
var imagenes={
    piedra:"images/piedra.png",
    papel:"images/papel.png",
    tijera:"images/tijera.png",
}
var ganador;
var nomJug1 = 'Jugador 1';
var nomJug2 = 'Jugador 2';

function nombreJugador(){
    var nom1 = prompt('Introduzca el nombre del jugador 1');
    if(nom1 != null){
        nomJug1 = nom1;
    }
    var nom2= prompt('Introduzca el nombre del jugador 2');
    if(nom2 != null){
        nomJug2 = nom2;
    }
    document.getElementById("nombre").innerHTML=nomJug1;
    document.getElementById("nombre2").innerHTML=nomJug2;

}

function cambiarSeleccion(jugador, opcion){
    if(jugador === 1){
        jug1 = opcion;
        document.getElementById("imgJug1").src=imagenes[opcion];

    }else{
        jug2 = opcion;
        document.getElementById("imgJug2").src=imagenes[opcion];
    }
}

function jugar(){
    if(jug1 === "tijera" && jug2 === "papel" ||
    jug1 === "piedra" && jug2 === "tijera" ||
    jug1 === "papel" && jug2 === "piedra"){
        ganador = nomJug1;
    }else if (jug2 === "tijera" && jug1 === "papel" ||
        jug2 === "piedra" && jug1 === "tijera" ||
        jug2 === "papel" && jug1 === "piedra"){
            ganador = nomJug2;
        }else{
            ganador = "Empate"
        }
    document.getElementById("resultado").innerHTML="Gana " + ganador;
}
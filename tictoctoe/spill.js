//@ts-check

let liste = [" "," "," "," "," "," "," "," "," "]
let liste2 = ["rute1","rute2","rute3","rute4","rute5","rute6","rute7","rute8","rute9"]

function setup() {
    let btnRute1 = document.getElementById("rute1");
    let btnRute2 = document.getElementById("rute2");
    let btnRute3 = document.getElementById("rute3");
    let btnRute4 = document.getElementById("rute4");
    let btnRute5 = document.getElementById("rute5");
    let btnRute6 = document.getElementById("rute6");
    let btnRute7 = document.getElementById("rute7");
    let btnRute8 = document.getElementById("rute8");
    let btnRute9 = document.getElementById("rute9");

    btnRute1.addEventListener("click", rute1);
    btnRute2.addEventListener("click", rute2);
    btnRute3.addEventListener("click", rute3);
    btnRute4.addEventListener("click", rute4);
    btnRute5.addEventListener("click", rute5);
    btnRute6.addEventListener("click", rute6);
    btnRute7.addEventListener("click", rute7);
    btnRute8.addEventListener("click", rute8);
    btnRute9.addEventListener("click", rute9);
    document.getElementById("rute1").innerHTML = ""
    document.getElementById("rute2").innerHTML = ""
    document.getElementById("rute3").innerHTML = ""
    document.getElementById("rute4").innerHTML = ""
    document.getElementById("rute5").innerHTML = ""
    document.getElementById("rute6").innerHTML = ""
    document.getElementById("rute7").innerHTML = ""
    document.getElementById("rute8").innerHTML = ""
    document.getElementById("rute9").innerHTML = ""
}



function rute1() {
    game_mechanics(0)
}

function rute2() {
    game_mechanics(1)
}

function rute3() {
    game_mechanics(2)
}

function rute4() {
    game_mechanics(3)
}

function rute5() {
    game_mechanics(4)
}
function rute6() {
    game_mechanics(5)
}
function rute7() {
    game_mechanics(6)
}
function rute8() {
    game_mechanics(7)
}
function rute9() {
    game_mechanics(8)
}

let player_turn = "X";
let player_turns = 0;
let resetvar = false;
function game_mechanics(rutenr) {
    if (player_turns < 8){
        if (liste[rutenr] == " "){
            liste[rutenr] = player_turn
            if (player_turn == "X"){
                player_turn = "O"
            }
            else{
                player_turn = "X"
            }
            player_turns += 1;
        }
    }
    else{
        resetvar = true
        if (player_turn == "X"){
            player_turn = "O"
        }
        else{
            player_turn = "X"
        }
    }
    if (player_turn == "X"){
        document.getElementById(liste2[rutenr]).innerHTML = "O"
        document.getElementById(liste2[rutenr]).style.color = "red";
    }
    else{
        document.getElementById(liste2[rutenr]).innerHTML = "X"
        document.getElementById(liste2[rutenr]).style.color = "black";
    }
    if (player_turn == "X"){
        
    }
    check_win()
    if (resetvar == true){
        alert("TIE")
        reset()
    }
    
}
function check_win(){
    let mhm = 0;
    for (let i=0; i<3; i++){
        if (liste[mhm] == liste[mhm+1] 
            && liste[mhm] == liste[mhm+2] 
            && liste[mhm] != " "){
            if (liste[mhm+1]== "O" 
                && (liste[mhm+1]!=" ")) {
                document.getElementById("o-scoreboard").innerHTML += "I"
                alert("O won")
            }
            else {
                document.getElementById("x-scoreboard").innerHTML += "I"
                alert("X won")
            }
            reset()
        }
        mhm += 3
    }
    for (let i=0; i<3; i++){
        if (liste[i] == liste[i+3] 
            && liste[i] == liste[i+6] 
            && liste[i] != " "){
            if (liste[i] == "O" 
                && (liste[i] != " ")){
                document.getElementById("o-scoreboard").innerHTML += "I"
                alert("O won")
            }
            else {
                document.getElementById("x-scoreboard").innerHTML += "I"
                alert("X won")
            }
            reset()
        }
    }
    if (liste[0] == liste[4]
        && liste[0] == liste[8] 
        && liste[0] != " "){
            if (liste[0] == "O" 
            && (liste[0] != " ")){
            document.getElementById("o-scoreboard").innerHTML += "I"
            alert("O won")
        }
            else {
            document.getElementById("x-scoreboard").innerHTML += "I"
            alert("X won")
        }
        reset()
    }
    if (liste[2] == liste[4] 
        && liste[2] == liste[6] 
        && liste[2] != " "){
            if (liste[0] == "O" 
            && (liste[0] != " ")){
            document.getElementById("o-scoreboard").innerHTML += "I"
            alert("O won")
        }
        else {
            document.getElementById("x-scoreboard").innerHTML += "I"
            alert("X won")
        }
        reset()
    }
}
function reset(){
    liste = [" "," "," "," "," "," "," "," "," "]
    player_turns = 0
    resetvar=false
    for (let i=0; i<9; i++){
        document.getElementById(liste2[i]).innerHTML = ""
    }
}
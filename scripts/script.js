let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container buttons");
let movePlayer = document.querySelector("#turn-player");
let winnerMessage = document.querySelector("#winner-message");
let messageText = document.querySelector("#winner-message p");

//Contador de jogadas
let player1 = 0;
let player2 = 0;

//clique nas boxes
for(let i = 0; i < boxes.length; i++) {

    //add evento - item na tela
    boxes[i].addEventListener("click", function() {

        let move = checkPlayer(player1, player2);

        //um símbolo por box
        if (this.childNodes.length == 0) {
            let cloneMove = move.cloneNode(move);

            this.appendChild(cloneMove);

            //alterar símbolo
            if(player1 == player2) {
                player1++;
            }else {
                player2++;
            }

        }

    });

}

//checar vez de jogar
function checkPlayer(player1, player2) {

    if(player1 == player2) {
        //x
        move = x;
        movePlayer.innerHTML = "Vez do jogador 2";
    }else {
        //o
        move = o;
        movePlayer.innerHTML = "Vez do jogador 1";
    }

    return move;

}


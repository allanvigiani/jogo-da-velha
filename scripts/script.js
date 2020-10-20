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
for (let i = 0; i < boxes.length; i++) {

    //add evento - item na tela
    boxes[i].addEventListener("click", function () {

        let move = checkPlayer(player1, player2);

        //um símbolo por box
        if (this.childNodes.length == 0) {
            let cloneMove = move.cloneNode(move);

            this.appendChild(cloneMove);

            //alterar símbolo
            if (player1 == player2) {
                player1++;
            } else {
                player2++;
            }

            //checar quem venceu
            checkWinner()

        }

    });

}

//checar vez de jogar
function checkPlayer(player1, player2) {

    if (player1 == player2) {
        //x
        move = x;
        movePlayer.innerHTML = "Vez do jogador 2";
    } else {
        //o
        move = o;
        movePlayer.innerHTML = "Vez do jogador 1";
    }

    return move;

}

//checar quem venceu
function checkWinner() {

    let b1 = document.getElementById("box-1");
    let b2 = document.getElementById("box-2");
    let b3 = document.getElementById("box-3");
    let b4 = document.getElementById("box-4");
    let b5 = document.getElementById("box-5");
    let b6 = document.getElementById("box-6");
    let b7 = document.getElementById("box-7");
    let b8 = document.getElementById("box-8");
    let b9 = document.getElementById("box-9");

    //horizontal

    //linha 1
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o venceu
            console.log("o")
        }

    }
    //linha 2
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o venceu
            console.log("o")
        }

    }
    //linha 3
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o venceu
            console.log("o")
        }

    }

    //vertical

    //coluna 1 
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o venceu
            console.log("o")
        }

    }
    //coluna 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o venceu
            console.log("o")
        }

    }
    //coluna 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o venceu
            console.log("o")
        }

    }

    //diagonal

    //esquerda -> direita
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o venceu
            console.log("o")
        }

    }
    //direita -> esquerda
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x venceu
            console.log("x")
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o venceu
            console.log("o")
        }

    }

    //velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if(counter == 9){
        //velha
        console.log("velha")
    }
}

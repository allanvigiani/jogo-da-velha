let x = document.querySelector(".x");
let o = document.querySelector(".o");
let board = document.querySelector("#container")
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let container = document.querySelector("#container")
//let movePlayer = document.querySelector("#turn-player");
let winnerMessage = document.querySelector("#winner-message");
let messageText = document.querySelector("#winner-message p");
let secondPlayer;


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

                if(secondPlayer == "ai-players") {
                    
                    //executar jogada
                    aiTurn();
                    player2++;                   

                }

            } else {
                player2++;
            }

            //checar quem venceu
            checkWinner();

        }

    });

}

//clique dos botões
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        
        secondPlayer = this.getAttribute("id");

        //esconder botões
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        //mostrar tabuleiro
        setTimeout(function() {
            container.classList.remove("show");
        }, 500)

    });

}

//checar vez de jogar
function checkPlayer(player1, player2) {

    //movePlayer.classList.remove("Show");

    if (player1 == player2) {
        //x
        move = x;
        //movePlayer.innerHTML = "Vez do jogador 2";
    } else {
        //o
        move = o;
        //movePlayer.innerHTML = "Vez do jogador 1";
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
            showWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //o venceu
            showWinner('o');
        }

    }
    //linha 2
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x venceu
            showWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            //o venceu
            showWinner('o')
        }

    }
    //linha 3
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x venceu
            showWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //o venceu
            showWinner('o');
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
            showWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //o venceu
            showWinner('o');
        }

    }
    //coluna 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x venceu
            showWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //o venceu
            showWinner('o');
        }

    }
    //coluna 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x venceu
            showWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //o venceu
            showWinner('o');
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
            showWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //o venceu
            showWinner('o');
        }

    }
    //direita -> esquerda
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x venceu
            showWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //o venceu
            showWinner('o');
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
        showWinner("velha");
    }
}

//mostrar mensagem de vencedor
function showWinner(winner) {

    //alterar placar
    let scoreX = document.querySelector(".score-1");
    let scoreO = document.querySelector(".score-2");
    let msg = 'Jogador 2 venceu!';

    if(winner == "x") {
        scoreX.textContent = parseInt(scoreX.textContent) + 1;
        msg = "Jogador 1 venceu!";
    }else if(winner == "o") {
        scoreO.textContent = parseInt(scoreO.textContent) + 1;
        msg = "Jogador 2 venceu!";
    }else {
        msg = "Velha!";
    }

    //mostrar mensagem
    winnerMessage.classList.remove("show");
    messageText.innerHTML = msg;

    //esconder mensagem
    setTimeout(function () {
        winnerMessage.classList.add("show");
    }, 2000);

    //zerar jogadas
    player1 = 0;
    player2 = 0;

    //remover símbolos
    let boxesToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }       
}

//jogada da AI
function aiTurn() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i  = 0; i < boxes.length; i++) {
        
        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined) {

            if(randomNumber <= 1) {

                boxes[i].appendChild(cloneO);
                counter++;
                break;

            }
        }else {
            filled++;
        }

    }

    if(counter == 0 && filled < 9) {
        aiTurn();
    }

}
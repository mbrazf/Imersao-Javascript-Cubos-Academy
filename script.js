
//declara as variaveis const
    const nomeTimeA = prompt('Digite o nome do time A');
    const nomeTimeB = prompt('Digite o nome do time B');

//seleciona os elementos pelo ID
    const nomeA_HTML = document.getElementById('nomeTimeA');
    const nomeB_HTML = document.getElementById('nomeTimeB');
    const pontoA_HTML = document.getElementById('pontuacaoA');
    const pontoB_HTML = document.getElementById('pontuacaoB');
    const setA_HTML = document.getElementById('setA');
    const setB_HTML = document.getElementById('setB');
    
    nomeA_HTML.innerText = nomeTimeA;
    nomeB_HTML.innerText = nomeTimeB;
    
    let pontoA = 0;
    let pontoB = 0;
    let setA = 0;
    let setB = 0;
    let arrayDePontosA = [];
    let arrayDePontosB = [];
    let totalDePontosA = 0;
    let totalDePontosB = 0;

    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener ('click', function () {
    // que estiver aqqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet(); //chamando a função de verificar o fim do set
});

pontoB_HTML.addEventListener ('click', function () {
    // que estiver aqqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();  //chamando a função de verificar o fim do set
    
});


function verificarFimDoSet() {
    if (pontoA >= 21 && pontoA - pontoB >= 2) {  
        alert(`${nomeTimeA} venceu o set!`);
        setA = setA + 1;  //soma um ao valor anterior do set
        setA_HTML.innerText = setA; //exibe na tela 
        salvarEZerarPlacarDoSetAnterior();  //chamando a função de zerar o placar
        verificarFimDoJogo();
    } 
    if (pontoB >= 21 && pontoB - pontoA >= 2) { 
        alert(`${nomeTimeB} venceu o set!`);
        setB = setB + 1;  //soma um ao valor anterior do set
        setB_HTML.innerText = setB;  //exibe na tela 
        salvarEZerarPlacarDoSetAnterior(); //chamando a função de zerar o placar
        verificarFimDoJogo();
    }
}

function verificarFimDoJogo () {
    if (setA == 2) {
        //timeA ganhou o jogo
        for (let item of arrayDePontosA) {
            totalDePontosA = totalDePontosA + item;
        }
        alert(`${nomeTimeA} venceu o jogo fazendo ${totalDePontosA} pontos!`);
    }
    if (setB == 2) {
        //timeB ganhou o jogo
        for (let item of arrayDePontosB) {
            totalDePontosB = totalDePontosB + item;
        }
        alert(`${nomeTimeB} venceu o jogo fazendo ${totalDePontosB} pontos!`);
    }
}

function salvarEZerarPlacarDoSetAnterior (){
    //salvar a pontuação dos Sets nos arrays
    arrayDePontosA.push(pontoA);
    arrayDePontosB.push(pontoB);
    //zerar placar
    pontoA = 0;
    pontoB = 0;
    //atualizar na tela
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;
}

//-----------TESTANDO ARRAYS----------------//














//--------------------------//

//declarando a função
//function darOiParaAlguem (nome){
//    alert(`Oi , ${nome}`);
//}

//chamando a função
//darOiParaAlguem('Marcelo !')

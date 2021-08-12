
//declara as variaveis const
    const nomeTimeA = prompt('Digite o nome do time A');
    const nomeTimeB = prompt('Digite o nome do time B');

//seleciona os elementos pelo ID
    const nomeA_HTML = document.getElementById('nomeTimeA');
    const nomeB_HTML = document.getElementById('nomeTimeB');
    const pontoA_HTML = document.getElementById('pontuacaoA');
    const pontoB_HTML = document.getElementById('pontuacaoB');
    
    

    nomeA_HTML.innerText = nomeTimeA;
    nomeB_HTML.innerText = nomeTimeB;

    let pontoA = 0;
    let pontoB = 0;
    pontoA_HTML.innerText = pontoA;
    pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener ('click', function () {
    // que estiver aqqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoA = pontoA + 1;
    pontoA_HTML.innerText = pontoA;
    verificarFimDoSet();
    zerarPlacar ();
});

pontoB_HTML.addEventListener ('click', function () {
    // que estiver aqqui dentro será executado
    //quando o pontoA_HTML for clicado
    pontoB = pontoB + 1;
    pontoB_HTML.innerText = pontoB;
    verificarFimDoSet();
    zerarPlacar ();
});


function verificarFimDoSet() {
    if (pontoA >= 21) {
        alert(`O  ${nomeTimeA} venceu o set!`);
    } 
    if (pontoB >= 21) {
        alert(`O  ${nomeTimeB} venceu o set!`);
    }
}

function zerarPlacar (){
    if (pontoA >= 21) {
      pontoA = 0;
    }
}








//--------------------------//

//declarando a função
//function darOiParaAlguem (nome){
//    alert(`Oi , ${nome}`);
//}

//chamando a função
//darOiParaAlguem('Marcelo !')

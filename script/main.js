//---------TODOS ELEMENTOS DO DOM

const botao = document.querySelector(".botao");
const orcamento = document.querySelector(".orcamento_lista");
const inputTextos = document.querySelectorAll("input[type=text]")
const orcamentoItens = document.querySelector('.orcamento_tabela');
const linhasDoOrcamento = window.document.querySelectorAll('.tabela_ballons_imperial_cabecalho')
const tableOrcamento = window.document.querySelector('.orcamento_tabela_2')
 $('.orcamento').hide();
let trOrcamento;
let orcamentoLista = [];
let valorUnico = 0;
let total = 0;
let totalOrcamento = 0;
let totalOrcamentoAVista = 0;

//-----------------------------------------------------------------------------//

// EVENTOS ----------------------

botao.addEventListener("click", gerarItem);
const limpaEntradas = () => {
    inputTextos.forEach(e => {
    e.value = ''
})};

//------------------------------

//FUNÇÕES DO PROGRAMA ------------------------------------------------------------

function verificaInputs(descricao, quantidades) {
    if (descricao.length === 0 || quantidades.length === 0) {
        window.alert("Preencha as informações necessárias!")
        return false
    }
    else if (((!isNaN(descricao)) || (isNaN(quantidades)))) {
        window.alert("Cores permitem apenas palavras e quantidades apenas números.")
        return false
    }
    else {
        $('.orcamento').show()
        return true
    }
   
}
inputTextos.forEach(elemento => {
    elemento.addEventListener("keyup" , function (e){
        if(e.keyCode === 13){
            gerarItem()
            
        }
    })
});

function gerarItem() {
    const tipoBalao = document.querySelector("#tipo").value;
    const numeracao = document.querySelector("#numeracao").value;
    const descricao = window.document.querySelector("#corTexto").value
    const quantidades = document.querySelector("#quantidadeTexto").value
    if (!verificaInputs(descricao, quantidades) ){
        return;
    }

        const valoresBaloes = {
            Imperial: {
                N5: 9.50,
                N7: 8.50,
                N9: 15.50,
                N11: 19.50,
                N16: 20.50,
            },
            Candy: {
                N5: 5.50,
                N7: 6.50,
                N9: 8.50,
                N11: 9.50,
                N16: 19.50,
            },
            Metalizado: {
                N5: 17.50,
                N9: 24.50,
                N11: 29.50,
                N16: 35.50
            },
            Cintilante: {
                N7: 12.50,
            },
            Canudo: {
                N7: 8.50
            },
            Bubble: {
                N18: 5.00
            }
        }

    valorUnico = valoresBaloes[tipoBalao][numeracao]

    if (valoresBaloes[tipoBalao][numeracao] == null){
        window.alert('Não existe esse número')
        limpaEntradas()
        return 
    }
        total = valorUnico*quantidades;
        geraItemOrcamento(tipoBalao, numeracao, descricao, quantidades, total)
   
}


function geraItemOrcamento(tipoBalao, numeracao, descricao, quantidades, total) {
    
orcamentoLista.push({
        tipoBalao,
        numeracao,
        descricao,
        quantidades,
        total,
      });

// const emojiDelete = document.createElement('span')
// emojiDelete.classList.add('emoji')
// emojiDelete.innerHTML = `&#128465`


const tableOrcamento = window.document.querySelector('.orcamento_tabela_2')
const linhaOrcamento = window.document.createElement('tr')


let propriedadeString = total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const propriedades = [tipoBalao, numeracao, descricao, quantidades, propriedadeString]

const valorTotal = window.document.querySelector('#totalR')

let paragrafoTotal = document.querySelector('h4')


for (let i=0; i<5; i++){
    const celulaOrcamento = window.document.createElement('td')
    celulaOrcamento.innerHTML = `<p><strong>${propriedades[i]}</strong></p>`
    linhaOrcamento.appendChild(celulaOrcamento)
    // linhaOrcamento.appendChild(emojiDelete)
}

valorTotal.appendChild(paragrafoTotal);
tableOrcamento.appendChild(linhaOrcamento)


totalOrcamento += total;
totalOrcamentoAVista += total - (quantidades * 0.50);


let totalOrcamentoString = totalOrcamento.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

let totalOrcamentoAVistaString = totalOrcamentoAVista.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

paragrafoTotal.innerHTML = `<strong>Cartão: </strong>${totalOrcamentoString} <br>
<strong>À vista: ${totalOrcamentoAVistaString}</strong>`



limpaEntradas()
}




//---------------------------------------------

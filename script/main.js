botao.addEventListener('click',gerar)

let r = window.document.getElementById('r');

const precos = {
    balaon5: 9.50,
    balaon7: 8.50,
    balaon9: 15.50,
    balaon11: 19.50,
    balaon16: 20.50,
    balaometn5: 17.50,
    balaometn9: 24.50,
    balaometn11: 29.50,
    balaometn16: 35.50,
    balaocandy5: 5.50,
    balaocandy7: 6.50,
    balaocandy9: 8.50,
    balaocandy11: 9.50,
    balaocandy16: 11.50,
    bubble: 5.00,
};


function gerar(){
    let total = 0;
        for (balaoId in precos){
            let quantidade = Number(document.getElementById(balaoId).value)
            total += quantidade * precos[balaoId]
            console.log(quantidade)
        }
    r.innerHTML = `Total é ${total}`
};

var btComecar = document.getElementById("btComecar")
var divComecarOJogo = document.getElementById("divComecarOJogo")
var divAconteceOJogo = document.getElementById("divAconteceOJogo")

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
var listaEsquerda = [], listaCentro = [], listaDireita = []

function embaralhoInicial(){
    for(var i = 0; i < 7; i++){
        listaEsquerda[i] = numeros[Math.floor(Math.random() * numeros.length)]
        numeros.splice(numeros.indexOf(listaEsquerda[i] ), 1)

        listaCentro[i] =  numeros[Math.floor(Math.random() * numeros.length)]
        numeros.splice(numeros.indexOf(listaCentro[i]), 1) 

        listaDireita[i]  =  numeros[Math.floor(Math.random() * numeros.length)]
        numeros.splice(numeros.indexOf(listaDireita[i]), 1) 
    }
    
}
var p1 = document.getElementById("p1"),p2 = document.getElementById("p2"),p3 = document.getElementById("p3"),
p4 = document.getElementById("p4"), p5 = document.getElementById("p5"), p6 = document.getElementById("p6"),
p7 = document.getElementById("p7"), p8 = document.getElementById("p8"), p9 = document.getElementById("p9"),
p10 = document.getElementById("p10"), p11 = document.getElementById("p11"), p12 = document.getElementById("p12"),
p13 = document.getElementById("p13"), p14 = document.getElementById("p14"), p15 = document.getElementById("p15"),
p16 = document.getElementById("p16"), p17 = document.getElementById("p17"), p18 = document.getElementById("p18"),
p19 = document.getElementById("p19"), p20 = document.getElementById("p20"), p21 = document.getElementById("p21")

/*embaralhoInicial()
console.log(listaEsquerda);
console.log(listaCentro);
console.log(listaDireita);*/
var rodada = 0

function mostra(){
    p1.textContent = listaEsquerda[0], p8.textContent = listaCentro[0], p15.textContent = listaDireita[0]
    p2.textContent = listaEsquerda[1], p9.textContent = listaCentro[1], p16.textContent = listaDireita[1]
    p3.textContent = listaEsquerda[2], p10.textContent = listaCentro[2], p17.textContent = listaDireita[2]
    p4.textContent = listaEsquerda[3], p11.textContent = listaCentro[3], p18.textContent = listaDireita[3]
    p5.textContent = listaEsquerda[4], p12.textContent = listaCentro[4], p19.textContent = listaDireita[4]
    p6.textContent = listaEsquerda[5], p13.textContent = listaCentro[5], p20.textContent = listaDireita[5]
    p7.textContent = listaEsquerda[6], p14.textContent = listaCentro[6], p21.textContent = listaDireita[6]
}


btComecar.addEventListener("click", function(){
    divComecarOJogo.style.display = "none"
    divAconteceOJogo.style.display = "block"
    /*if (rodada == 0){
        embaralhoInicial()
        mostra()
    }*/
    embaralhoInicial()
    mostra()
})

function redistribui(/*LEsquerda, LCentro, LDireita*/){
    console.log("LISTA DE NUMEROS = " + numeros);
    for(var i = 0, j = 0; i < 7; i++){
        listaEsquerda[i] = numeros[j] // 1 4 7 10 13 16 19
        j ++
        listaCentro[i] = numeros[j] // 2 5 8 11 14 17 20 
        j ++
        listaDireita[i] = numeros[j] // 3 6 9 12 15 18 11
        j ++
    }
    mostra()
    rodada++
    result()
}

function embaralha (LEsquerda, LCentro, LDireita){
    for(var i = 0, j = 7, k = 14; i < 7, j < 14, k < 21; i++, j++, k++){
        numeros[i] = LEsquerda[i]
        numeros[j] = LCentro[i]
        numeros[k] = LDireita[i]
    }
    redistribui()
}

function result (){
    var result = document.getElementById("result")
    var divResultado = document.getElementById("divResultado")
    var DivDesfoca = document.getElementById("DivDesfoca")
    if (rodada >= 3){
        divResultado.style.display = "block"
        divResultado.style.position = "absolute"
        DivDesfoca.style.display = "block"
        result.textContent = listaCentro[3]
    }
}

var btConfirmar = document.getElementById("btConfirmar")
var radioL1 = document.getElementById("l1")
var radioL2 = document.getElementById("l2")
var radioL3 = document.getElementById("l3")
btConfirmar.addEventListener("click", function(){
    if(! radioL1.checked && ! radioL2.checked && ! radioL3.checked){
        alert("Selecione uma das opções de qual lista seu número ficou!")
    }else if(radioL1.checked){
        embaralha(listaCentro, listaEsquerda, listaDireita)
        radioL1.checked = false
    }else if (radioL2.checked){
        embaralha(listaEsquerda, listaCentro, listaDireita)
        radioL2.checked = false
    }else if(radioL3.checked){
        embaralha(listaEsquerda, listaDireita, listaCentro)
        radioL3.checked = false
    }
})




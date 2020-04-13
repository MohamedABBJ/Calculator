document.getElementById("n7").addEventListener("click", n7)
document.getElementById("n6").addEventListener("click", n6)
document.getElementById("n5").addEventListener("click", n5)
document.getElementById("n4").addEventListener("click", n4)
document.getElementById("n3").addEventListener("click", n3)
document.getElementById("n2").addEventListener("click", n2)
document.getElementById("n1").addEventListener("click", n1)
document.getElementById("n9").addEventListener("click", n9)
document.getElementById("n8").addEventListener("click", n8)
document.getElementById("n0").addEventListener("click", n0)
document.getElementById("mas").addEventListener("click", mas)
document.getElementById("resta").addEventListener("click", resta)
document.getElementById("multiplicar").addEventListener("click", multiplicar)
document.getElementById("dividir").addEventListener("click", dividir)
document.getElementById("raiz").addEventListener("click", raiz)
document.getElementById("igual").addEventListener("click", igual)
function n1(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n1").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n2(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n2").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n3(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n3").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n4(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n4").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n5(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n5").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n6(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n6").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n7(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n7").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n8(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n8").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n9(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n9").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function n0(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("n0").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function mas(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("mas").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function resta(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("resta").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function multiplicar(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("multiplicar").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function dividir(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("dividir").innerHTML
    document.getElementById("resultado").innerHTML = actual + sumado
}
function raiz(){
    var actual = document.getElementById("resultado").innerText
    var sumado = document.getElementById("raiz").innerHTML
    document.getElementById("resultado").innerHTML = sumado
}


function igual(){
var actual = document.getElementById("resultado").innerHTML,
    suma = actual.indexOf("+"),
    resta = actual.indexOf("-"),
    division = actual.indexOf("÷")
    multiplicacion = actual.indexOf("x"),
    raices = actual.indexOf("√")
    
        if (suma !== -1){
            r = actual.split("+",2)
            result = parseFloat(r[0]) + parseFloat(r[1])
            document.getElementById("resultado").innerHTML = result
    
    }   else if (resta !== -1){
            r = actual.split("-",2)
            result = parseFloat(r[0]) - parseFloat(r[1])
            document.getElementById("resultado").innerHTML = result
    }
        else if (division !== -1){
        r = actual.split("÷",2)
        result = parseFloat(r[0]) / parseFloat(r[1])
        resultpr = result.toFixed(4)
        document.getElementById("resultado").innerHTML = result
    }
    
        else if (multiplicacion !== -1){
            r = actual.split("x",2)
            result = parseFloat(r[0]) * parseFloat(r[1])
            document.getElementById("resultado").innerHTML = result
    }
        else if (raices !== -1){
        r = actual.split("√",2)
        result = Math.sqrt(parseFloat(r[1])) 
        resultpr = result.toFixed(12)
        document.getElementById("resultado").innerHTML = resultpr
    }
    }



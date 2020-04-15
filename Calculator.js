let a = ""
let maxsign
function input(button, signo, raiz) {
    if (signo) {
        if (maxsign) {
            a = a.substring(0, a.length - 1)
            a = a + button.value
            document.getElementById("resultado").innerHTML = a
            console.log (a)
        }
        else {
            document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + button.value
            a = document.getElementById("resultado").innerHTML
            maxsign = true
        }
    }
    else {
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + button.value
        a = document.getElementById("resultado").innerHTML
        maxsign = false
    }
    a = a.replace(/x/g, "*")   
}
function equal() {
    if (document.getElementById("resultado").innerHTML == ("0/0")) {
        document.getElementById("resultado").innerHTML = "You can't divide in cero"
    } else {
        document.getElementById("resultado").innerHTML = eval(a)
    }
}

function elim() {
    a = a.substring(0, a.length - 1)
    document.getElementById("resultado").innerHTML = a
}

function elimt() {
    document.getElementById("resultado").innerHTML = ""
}

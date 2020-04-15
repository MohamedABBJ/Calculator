let a = ""
let maxsign
let maxsign2
function input(button, signo) {
    
    if (signo) {
        if (maxsign) {
            a = a.substring(0, a.length - 1)
            a = a + button.value
            document.getElementById("resultado").innerHTML = a
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
    a = a.replace(/√/g, "Math.sqrt")
    if (a == "Math.sqrt("){
        a = a.substring(0, a.length -11)
        a = a + button.value
    }
    console.log(a)
}


function equal() {
    if (document.getElementById("resultado").innerHTML == ("0/0")) {
        document.getElementById("resultado").innerHTML = "You can't divide in cero"
    }
    else{
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

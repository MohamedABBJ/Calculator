let storage = "";
let signtemp

function input(button,sign) {
    if(sign){
        if(signtemp){
            storage = storage.substring(0, storage.length - 1)
            storage = storage+button.value
            document.getElementById("resultado").innerHTML = storage
        }
        else{
            document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + button.value
            storage = document.getElementById("resultado").innerHTML
            storage = fixchar(storage)
            signtemp = true
        }
    }else{
        document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + button.value
        storage = document.getElementById("resultado").innerHTML
        storage = fixchar(storage)
        signtemp = false
    }

}

function fixchar(i){
    i = i.replace(/x/g, "*")
    i = i.replace(/÷/g, "/")
    return i
}

function result() {
    document.getElementById("resultado").innerHTML = eval(storage);
}

function del() {
    storage = storage.substring(0, storage.length - 1)
    document.getElementById("resultado").innerHTML = storage
}
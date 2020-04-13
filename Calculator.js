let storage = "";

function input(button) {
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + button.value
    storage = document.getElementById("resultado").innerHTML
    storage = storage.replace(/x/g, "*")
    console.log(storage)
}

function result() {
    document.getElementById("resultado").innerHTML = eval(storage);
}

function del() {
    storage = storage.substring(0, storage.length - 1)
    document.getElementById("resultado").innerHTML = storage
}


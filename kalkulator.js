function Round(n, k) {
    var factor = Math.pow(10, k + 1);
    n = Math.round(Math.round(n * factor) / 10);
    return n / (factor / 10);
}

function nine() {

    document.getElementById("pole").innerHTML += 9;
}

function eight() {
    document.getElementById("pole").innerHTML += 8;
}

function seven() {
    document.getElementById("pole").innerHTML += 7;
}

function six() {
    document.getElementById("pole").innerHTML += 6;
}

function five() {
    document.getElementById("pole").innerHTML += 5;
}

function four() {
    document.getElementById("pole").innerHTML += 4;
}

function three() {
    document.getElementById("pole").innerHTML += 3;
}

function two() {
    document.getElementById("pole").innerHTML += 2;
}

function one() {
    document.getElementById("pole").innerHTML += 1;
}

function zero() {
    document.getElementById("pole").innerHTML += 0;
}

function prz() {
    document.getElementById("pole").innerHTML += ".";
}
var wynik;
var dzialanie = 0;
var zmienna = 0;

function dod() {
    zmienna = parseFloat(document.getElementById("pole").innerHTML);
    document.getElementById("pole").innerHTML = "";
    dzialanie = 1;
}

function minus() {
    zmienna = parseFloat(document.getElementById("pole").innerHTML);
    document.getElementById("pole").innerHTML = "";
    dzialanie = 2;
}

function mno() {
    zmienna = parseFloat(document.getElementById("pole").innerHTML);
    document.getElementById("pole").innerHTML = "";
    dzialanie = 3;
}

function dziel() {
    zmienna = parseFloat(document.getElementById("pole").innerHTML);
    document.getElementById("pole").innerHTML = "";
    dzialanie = 4;
}

function equal() {

    if (dzialanie == 1) {
        wynik = zmienna + parseFloat(document.getElementById("pole").innerHTML);
        document.getElementById("pole").innerHTML =  Round(wynik, 6);
    }
    if (dzialanie == 2) {
        wynik = zmienna - parseFloat(document.getElementById("pole").innerHTML);
        document.getElementById("pole").innerHTML =  Round(wynik, 6);
    }
    if (dzialanie == 3) {
        wynik = zmienna * parseFloat(document.getElementById("pole").innerHTML);
        document.getElementById("pole").innerHTML =  Round(wynik, 6);
    }
    if (dzialanie == 4) {
        if (document.getElementById("pole").innerHTML == 0)
            document.getElementById("pod").innerHTML = "NIE DZIEL PRZEZ 0";
        else {
            wynik = zmienna / parseFloat(document.getElementById("pole").innerHTML);
            document.getElementById("pole").innerHTML = Round(wynik, 6);
        }
    }


    zmienna = 0;
}

function kas() {
    document.getElementById("pole").innerHTML = "";
}

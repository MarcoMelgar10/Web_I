let userDiv = document.getElementById("user");
let labelInfo = document.getElementById("labeluser");

const selectInformation = document.getElementById("buttonChange");
const selectedTheme = document.getElementById("themeSelect");

let name = "";
let age = 0;

let presiono = false;

function setTheme() {
    selectedTheme.addEventListener("click", function () {
        presiono = !presiono;
        changeTheme();
    });
}

function setInformation() {
    selectInformation.addEventListener("click", function () {
        presiono = !presiono;

        if (presiono) {
            name = "Marquinho";
            age = 21;
        } else {
            name = "Antonio";
            age = 12;
        }

        labelInfo.innerText = "Hello " + name + ", you are " + age;
    });
}

function changeTheme() {
    if (presiono) {
        document.body.style.backgroundColor = "lightblue";
        document.body.style.color = "#333";
    } else {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "lightblue";
    }
}

window.onload = function () {
    setInformation();
    setTheme();
};

class auto {
    constructor(placa, modelo){
        placa = placa;
        modelo = modelo;
        autos = [];
    }
     acelerar (params) {
        if (empty(params)){
            return;
        }else{
            "Isn't null"
        }
        
    }

}
    // Obtenemos el Campo de Entrada
let input = document.querySelector(".caps");

// Texto de Advertencia
let text = document.getElementById("text");

// Cuando Presionamos cualquier tecla se ejecuta la función
input.addEventListener("keyup", function (event) {

    // Al presionar "Bloq Mayusculas" se muestra la advertencia
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }
});
const phone = document.querySelector('.validation');
const name = document.querySelector('.name');
const error = document.querySelector('.error');  

function validar() {
        let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (regex.test(phone.value)) {
            console.log(phone.value);
            return true;
        } else {
        const txt = document.querySelector('.text'); 
        txt.style.display='block';      
        }
        let rgx =/[a-zA-Z]+/g;
        if (rgx.test(name.value)) {
            console.log(name.value);
            return true;
        } else {
          err.style.display='block';     
        }
}

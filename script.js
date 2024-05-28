document.getElementById("kate").addEventListener("click", function () {
    showMessage("¡Kate, eres una mujer increíblemente fuerte y capaz! ¡Tú puedes con todo!");
});

document.getElementById("lau").addEventListener("click", function () {
    showMessage("¡Lau, nunca subestimes tu propia fuerza! ¡Eres más valiente de lo que crees!");
});

document.getElementById("ash").addEventListener("click", function () {
    showMessage("¡Ash, tu determinación y coraje son admirables! ¡Sigue luchando!");
});

document.getElementById("vale").addEventListener("click", function () {
    showMessage("¡Vale, eres una guerrera inquebrantable! ¡No hay obstáculo que no puedas superar!");
});

document.getElementById("any").addEventListener("click", function () {
    showMessage("¡Any, tu valentía y persistencia son inspiradoras! ¡Sigue adelante con fuerza!");
});

function showMessage(message) {
    document.getElementById("message").innerText = message;
    document.getElementById("message").style.display = "block";
}

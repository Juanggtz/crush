function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let botonSi = document.getElementById("btn_si");
let botonNo = document.getElementById("btn_no");
let modoRomantico = document.getElementsByClassName("modo_romantico")[0];

botonNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) })

botonSi.addEventListener('click', function(e) {
    alert("Sabía que dirias que sí: Te amo");

    modoRomantico.style.display = 'block';
    const cancion = new Audio('assets\\modo_hot.mp3')
    cancion.play();
})
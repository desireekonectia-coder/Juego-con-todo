let puntosYo = 0;
let puntosPC = 0;

function jugar(eleccion) {
    const opciones = ['piedra', 'papel', 'tijera'];
    const pc = opciones[Math.floor(Math.random() * 3)];
    const resDiv = document.getElementById('resultado');

    if (eleccion === pc) {
        resDiv.innerText = `Empate con ${pc}`;
    } else if (
        (eleccion === 'piedra' && pc === 'tijera') ||
        (eleccion === 'papel' && pc === 'piedra') ||
        (eleccion === 'tijera' && pc === 'papel')
    ) {
        resDiv.innerText = `¡Punto para ti! ${eleccion} > ${pc}`;
        puntosYo++;
    } else {
        resDiv.innerText = `Punto para PC... ${pc} > ${eleccion}`;
        puntosPC++;
    }

    document.getElementById('p-usuario').innerText = puntosYo;
    document.getElementById('p-maquina').innerText = puntosPC;
}
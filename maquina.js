console.log('Maquina de doces');

const sprites = new Image();
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

sprites.src = './vending-machine-sprites.png';




function loop(){
    contexto.drawImage(
        sprites,
        15, 39, // X, Y
        229, 349, // Recorte na sprite
        50, 50, // local no canvas
        129, 249  // tamanho no canvas
    );

    requestAnimationFrame(loop);
}
loop();
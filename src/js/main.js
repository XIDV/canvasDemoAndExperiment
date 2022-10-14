document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    let bspl1aCanvas = document.querySelector('#bspl1aCanvas');
    if (bspl1aCanvas.getContext) drawBspl1a(bspl1aCanvas);

});


function drawBspl1a(canvas) {
    let context = canvas.getContext('2d');
    

    // Rechtecke zeichnen
    context.fillStyle = "hsla(120, 100%, 70%, 1)";
    context.fillRect(20, 20, 360, 80);
    
    context.fillStyle = "hsla(220, 100%, 50%, .5)";
    context.fillRect(10, 10, 180, 180);

    
    // Linie zeichnen (Pfad)
    context.strokeStyle = "hsla(320, 100%, 25%, 1)";
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(20, 150);
    context.lineTo(50, 100);
    context.lineTo(80, 150);
    context.lineTo(110, 100);
    context.lineTo(350, 100);
    context.stroke();
    context.closePath();
}
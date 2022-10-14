document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    let bspl1aCanvas = document.querySelector('#bspl1aCanvas');
    if (bspl1aCanvas.getContext) drawBspl1a(bspl1aCanvas);

});


function drawBspl1a(canvas) {
    let context = canvas.getContext('2d');
    

    // Rechtecke zeichnen
    context.fillStyle = 'hsla(120, 100%, 70%, 1)';
    context.fillRect(20, 20, 360, 80);
    
    context.fillStyle = 'hsla(220, 100%, 50%, .5)';
    context.fillRect(10, 10, 180, 180);

    
    // Linie zeichnen (Pfad) 1
    context.strokeStyle = 'hsla(320, 100%, 25%, 1)';    // Definiere Linienfarbe
    context.lineWidth = 3;                              // Definiere Linienbreite
    context.beginPath();                                // Beginne mit einem Pfad...
    context.moveTo(20, 150);                            // ... bei den Koordinaten 20, 150 ...
    context.lineTo(50, 100);                            // ... erstelle eine Linie nach 50, 100 ...
    context.lineTo(80, 150);
    context.lineTo(110, 100);
    context.lineTo(350, 100);
    context.stroke();                                   // Zeichne den Pfad auf den Canvas
    context.closePath();                                // Ende der Pfaderstellung


    // Linie zeichnen (Pfad) 2
    context.strokeStyle = 'hsla(20, 100%, 50%, 1)';
    context.beginPath();
    context.moveTo(350, 100);
    context.lineTo(390, 20);
    context.lineTo(390, 180);
    context.stroke();
    context.closePath();
}
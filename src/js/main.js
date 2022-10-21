document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');

    const bspl1aCanvas = document.querySelector('#bspl1aCanvas');
    const bspl1bCanvas = document.querySelector('#bspl1bCanvas');
    if (bspl1aCanvas.getContext) {
        drawBspl1a(bspl1aCanvas);
        drawBspl1b(bspl1bCanvas);
    }

});


// Zeichenen von bspl1aCanvas -------------------------------------------------
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


// Zeichnen von bspl1bCanvas --------------------------------------------------
function drawBspl1b(canvas) {
    let context = canvas.getContext('2d');


    // schreibe Text
    context.fillStyle = 'hsla(320, 100%, 25%, 1)';      // Definition d. Füllfarbe
    context.font = 'bold 2.5rem sans-serif';            // Defintion d. Schrift
    context.textBaseline = 'top';                       // Definiton d. Grundlinie
    context.fillText('XIDV', 110, 3);                   // Schreibe den Text


    // Linien (Pfad) zeichnen
    context.strokeStyle = 'hsla(20, 100%, 50%, 1)';
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(20, 60);
    context.lineTo(50, 40);
    context.lineTo(80, 70);
    context.lineTo(110, 40);
    context.lineTo(200, 40);
    context.stroke();
    context.closePath();

    
    // zeichne Rechteck
    context.save();
    context.translate(20, 4);
    context.fillRect(0, 0, 88, 30);


    // zeichne Dreieck
    context.fillStyle = 'hsla(220, 100%, 50%, .5)';
    context.lineWidth = 1;                              // überflüssig !?
    context.save();
    context.translate(45, 0);
    context.beginPath();
    context.moveTo(0, 0);                               // überflüssig !?
    context.lineTo(30, 0);
    context.lineTo(15, 30);
    context.lineTo(0, 0);                               // überflüssig !?
    context.fill();
    context.closePath();
    context.restore();
}
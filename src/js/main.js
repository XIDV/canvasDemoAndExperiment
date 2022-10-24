document.addEventListener('DOMContentLoaded', dcl => {
    console.log('Document is ready ...');
    initContent();
});


function initContent() {
    const bspl1aCanvas = document.querySelector('#bspl1aCanvas');
    const bspl1bCanvas = document.querySelector('#bspl1bCanvas');
    const bspl1cCanvas = document.querySelector('#bspl1cCanvas');
    const bspl1dCanvas = document.querySelector('#bspl1dCanvas');
    let requestID = undefined;
    const bspl1eCanvas = document.querySelector('#bspl1eCanvas');

    const bspl1fCanvas = document.querySelector('#bspl1fCanvas');

    if (bspl1aCanvas.getContext) {
        drawBspl1a(bspl1aCanvas);
        drawBspl1b(bspl1bCanvas);
        drawBspl1c();
        requestID = window.requestAnimationFrame(redrawBspl1d);
        drawBspl1e(bspl1eCanvas);

        drawBspl1fDrawGraph(bspl1fCanvas);
    }

    document.querySelector('#stopBspl1dAnim').addEventListener('click', stopAnimBspl1d);


    document.querySelector('#freqSlider').addEventListener('input', e => {
        document.querySelector('#freqDisp').value = `${e.target.value} Hz`;
        drawBspl1fDrawGraph(bspl1fCanvas, 150, parseFloat(e.target.value));
    });



    function stopAnimBspl1d() {
        if(requestID) {
            window.cancelAnimationFrame(requestID);
        }
    }

    function drawBspl1c() {
        let deltaXY = 0;
        let change = false;

        setInterval(() => {
            let context = bspl1cCanvas.getContext('2d')
            const hue = getRandomInt(360);
            const sat = getRandomInt(100);
            const lum = getRandomInt(50);
    
            context.fillStyle = `hsl(${hue}, ${sat}%, ${lum}%)`;
            context.clearRect(20, 20, deltaXY, deltaXY,);
            if(deltaXY == 0) {
                change = false;
            } else if(deltaXY == 280) {
                change = true;
            }

            if(!change) {
                deltaXY += 1;
            } else {
                deltaXY -= 1;
            }
            context.fillRect(20, 20, deltaXY, deltaXY,);
        }, 100);
    }


    function redrawBspl1d(timestamp) {
        // console.log(timestamp);
        const time = new Date();
        // const lineLength = time.getSeconds() * 10 / 2;
        const lineLength = time.getMilliseconds() / 5;
        const lineHeight = time.getSeconds() + 10;

        const hue = getRandomInt(90);
        const sat = 100;
        const lum = 50;
        
        const context = bspl1dCanvas.getContext('2d');
        context.clearRect(0, 0, 400, 300);

        context.strokeStyle = `black`;
        context.fillStyle = `black`;
        
        context.save();
        
        context.lineWidth = 20;
        context.strokeStyle = `hsl(${hue}, ${sat}%, ${lum}%)`;
        context.fillStyle = `hsl(${hue}, ${sat}%, ${lum}%)`;
        context.beginPath();
        context.moveTo(0, lineHeight * 2);
        context.lineTo(lineLength, lineHeight * 2);
        context.stroke();
        context.closePath();
        
        context.restore();

        context.font = 'bold 2.5rem sans-serif';            // Defintion d. Schrift
        context.textBaseline = 'top';                       // Definiton d. Grundlinie
        context.fillText(`${time.getSeconds()}`, lineLength + 20, lineHeight * 2 - 10);
        
        context.restore()
        
        context.save();
        
        context.translate(20, 250);
        context.font = 'bold 2rem sans-serif';            // Defintion d. Schrift
        context.textBaseline = 'top';                       // Definiton d. Grundlinie
        context.fillText(`The Time is: ${time.getHours()}:${time.getMinutes()}`, 0, 0);

        context.restore();

        /* 
            Achtung!!! requestID muss bei jedem Aufruf von requestAnimationFrame()
            aktualisiert werden. Ansonsten kann cancelAnimationFrame(requestID) die
            Animation nicht beendet werden.
        */
        requestID = window.requestAnimationFrame(redrawBspl1d);
    }
}


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
    context.strokeStyle = 'hsla(220, 100%, 50%, 1)';
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
    // context.strokeStyle = 'hsla(20, 50%, 50%, 1)'
    context.lineWidth = 1;                              // überflüssig !?
    context.save();
    context.translate(45, 0);
    context.beginPath();
    context.moveTo(0, 0);                               // überflüssig !?  entweder ...
    context.lineTo(30, 0);
    context.lineTo(15, 30);
    context.lineTo(0, 0);                               // überflüssig !?  ... oder
    context.fill();
    // context.stroke();
    context.closePath();
    context.restore();
}


// Zeichnen von bspl1eCanvas --------------------------------------------------
function drawBspl1e(canvas) {
    const context = canvas.getContext('2d');

    context.strokeStyle = 'hsl(220, 100%, 50%)';
    context.fillStyle = 'hsl(20, 100%, 50%)';
    context.lineWidth = 2;

    // Zeichene vollen Kreis
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();

    // Zeichne halben Kreis
    context.beginPath();
    context.arc(100, 100, 60, 0, 1 * Math.PI);
    context.stroke();
    context.closePath();

    // Zeichen viertel Kreis (im Uhrzeigersinn)
    context.beginPath();
    context.arc(100, 100, 70, 0, .5 * Math.PI);
    context.stroke();
    context.closePath();

    // Zeichen viertel Kreis (entgegen Uhrzeigersinn)
    context.beginPath();
    context.arc(100, 100, 80, 1 * Math.PI, .5 * Math.PI, true);
    context.stroke();
    context.closePath();

    // Zeichen achtel Kreis (im Uhrzeigersinn)
    context.beginPath();
    context.arc(100, 100, 90, .375 * Math.PI, .625 * Math.PI);
    context.stroke();
    context.closePath();

    // Zeichne Fläche mit Rundungen
    context.beginPath();
    context.moveTo(100, 25);
    context.lineTo(250, 25);
    context.arc(250, 75, 50, 1.5 * Math.PI, 2 * Math.PI);
    context.lineTo(300, 250);
    context.lineTo(275, 250);
    context.lineTo(275, 75);
    context.arc(250, 75, 25, 0, 3.5 * Math.PI, true);
    context.lineTo(100, 50);
    context.fill();
    context.closePath();
    context.save();

    // Zeichne Bézier-Kurve
    context.strokeStyle = 'hsl(20, 100%, 50%)';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(25, 275);
    context.lineTo(75, 275);
    // context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
    context.bezierCurveTo(250, 275, 25, 225, 200, 225);
    //  - - - - -    
    context.lineTo(250, 225);
    context.stroke();
    context.closePath();

    // Zeichne quadratische Kurve
    context.strokeStyle = 'hsl(120, 100%, 50%)';
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(375, 25);
    context.lineTo(375, 50);
    // context.quadraticCurveTo(cpx, cpy, endX, endY);
    context.quadraticCurveTo(375, 400, 300, 275);
    context.quadraticCurveTo(200, 100, 100, 100);
    context.stroke();
    context.closePath();
}


// Zeichnen des Koordiantensystems von bspl1fCanvas ---------------------------
function drawBspl1fKoordSystem(canvas) {
    let ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    // Zeichne y-Achse
    ctx.moveTo(30, 25);
    ctx.lineTo(30, 275);
    ctx.stroke();
    // Zeichne x-Achse
    ctx.moveTo(5, 150);
    ctx.lineTo(495, 150)
    ctx.stroke();
    // zeichne Achsenmarkierungen
    // y
    for(let i = 30; i <= 270; i += 10) {
        ctx.moveTo(25, i);
        ctx.lineTo(30, i);
        ctx.stroke();
    }
    // x
    for(let i = 40; i <= 475; i += 10) {
        ctx.moveTo(i, 150);
        if(i == 130 || i == 230 || i == 330 || i == 430) {
            ctx.lineTo(i, 160);    
        } else {
            ctx.lineTo(i, 155);
        }
        ctx.stroke();
    }
    ctx.closePath();
    // Zeichne Achsenbeschriftungen
    ctx.font = '1rem sans-serif';
    ctx.textBaseline = 'top';
    ctx.fillText('V', 5, 15);
    ctx.fillText('s', 477, 155);
    ctx.fillText('0,5', 220, 165);
    ctx.fillText('1', 425, 165);
}

// Graph Zeichnen
let endFreqPoint = 0;
function drawBspl1fDrawGraph(canvas, amp=150, freq=1) {
    let step = 100 / freq;
    
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 300);
    drawBspl1fKoordSystem(canvas);
    ctx.save()
    ctx.translate(30 , 150);
    
    const interval = 1 | Math.floor (400 / endFreqPoint);

    for(let i = 0; i < interval+1; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 2;
        ctx.moveTo(0, 0);
        // ctx.quadraticCurveTo(cpx, cpy, endX, endY);
        ctx.quadraticCurveTo(step, -(amp * 1.5), step * 2, 0);
        ctx.quadraticCurveTo(step * 3, amp * 1.5, step * 4, 0);
        // ctx.quadraticCurveTo()
        ctx.stroke();
        ctx.closePath();
        endFreqPoint = step * 4;
        ctx.translate(endFreqPoint, 0);
    }
    
    ctx.restore();
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
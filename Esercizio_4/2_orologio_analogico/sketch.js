function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	
	translate(width/2, height/2)

	let h = hour()
	let m = minute()
	let s = second()
	let ms = new Date ().getMilliseconds()

	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m
	let angolo_m = TWO_PI / 60 * m
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000
	//x secondi a scatti cancella dal +TWO_PI in poi nella riga sopra

	background(0)	

	//spostiamo l'origine del centro
	scale(0.8)
	
	//bordo esterno
	fill(50)
	ellipse (0,0,420,420)
	fill(245)
	ellipse (0,0,400,400)

	//lineette sui bordi
	fill(205)
	push()
	for (let i=0; i<60; i++) {
		rect(-1,-185,2,20)
		rotate (TWO_PI / 60)
	}
	pop()

	
	fill(195)
	push()
	for (let i=0; i<60; i++) {
		if (i % 5 == 0) {
			rect(-1.5,-185,3,35)
		} else {
			rect(-1,-185,2,5)
		}
		rotate (TWO_PI / 60)
	}
	pop()

	
	//ruotiamo per le ore
	push()
	fill(50)
	noStroke()
	rotate(angolo_h)
	rect(-4, 0, 8, -120)
	pop()
	
	
	//ruotiamo per i minuti
	push()
	fill(50)
	noStroke()
	rotate(angolo_m)
	rect(-2.5, 0, 5, -180)
	pop()
	
	
	//ruotiamo per i secondi
	push()
	fill(255,0,0)
	noStroke()
	rotate(angolo_s)
	rect(-1.5, 0, 3, -180)
	pop()
	

	//centro
	fill(50)
	noStroke()
	ellipse(0,0,15,15)
}


function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	
	
}
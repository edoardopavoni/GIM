function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220)

	point(30, 50)
	point(31, 50)
	point(32, 50)
	point(33, 50)

	// funzione che disegna un segmento
	line(50, 60, 200, 280)

	// funzione che disegna un quadrato
	stroke (0, 0, 0) // funzione per cambiare colore traccia
	strokeWeight (2) // spessore traccia
	fill(0,200,200)	// funzione riempimento colore
	rect(120, 120, 90, 90)
	fill(0,150,0)
	rect(150, 150, 90, 90)

	// funzione che disegna un cerchio o ellisse
	fill(0,0,200, 128) // il quarto colore è l'opacità
	ellipse(230, 270, 80, 80)

	// funzione che disegna un triangolo
	noFill()
	triangle(310, 90, 390, 160, 210, 180,)

}
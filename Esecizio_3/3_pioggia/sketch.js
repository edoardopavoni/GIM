function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	
	background(0,0,0)

	rotateX(mouseY*0.01)

	let lato = 500

	for(let i=0; i<50; i=i+1)
{

	let spessore = random (1, 3)
	let lunghezza = random (50, 150)
	let posX = random (-lato, lato)
	let posY = random (-lato, lato)
	let posZ = random (-lato, lato)

	stroke(255)
	strokeWeight(spessore)
	
	line(posX, posY, posZ, posX, posY + lunghezza, posZ)

}

}
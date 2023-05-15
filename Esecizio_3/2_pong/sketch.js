let posizioneX
let posizioneY
let velX
let velY


function setup(){
	createCanvas(800, 600)
	posizioneX = width/2
	posizioneY = height/2
	velX = random (-4, 4)
	velY = random (-4, 4)

	background(0, 200, 200)

}
function draw(){

	noStroke()
	fill (random(0, 100), random(175, 255), random(200, 255))

	ellipse(posizioneX, posizioneY, 20, 20)

	posizioneX = posizioneX +velX
	posizioneY = posizioneY +velY

	if (posizioneX >= width) velX = -velX // per unire le due funzioni posso usare ||
	if (posizioneX <= 0) velX = -velX

	if (posizioneY >= height) velY = -velY // per unire le due funzioni posso usare ||
	if (posizioneY <= 0) velY = -velY

}
 
function KeyPressed(){

	save("pong.png")

}

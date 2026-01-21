let image = document.getElementById('image')
let images = ['hue1.png', 'hue1.jpg']
setInterval(function(){
	let random = Math.floor(Math.random() * images.length)
	image.src = images[random]	
	}, 800)

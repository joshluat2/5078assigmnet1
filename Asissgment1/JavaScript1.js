let image = document.getElementById('image')
let images = ['hue1.png', 'hue2.jpg']
setInterval(function(){
	let random = Math.floor(Math.random() * 2)
	image.src = images[random]	
	}, 800)

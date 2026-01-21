let image = document.getElementByID('image')
let image = ['hue1.png', 'hue1.jpg']
setInterval(function(){
	let random = Math.floor(Math.random() * 2)
	image.src = image[random]	
	}, 800)
}
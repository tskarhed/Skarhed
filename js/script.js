window.onload = function() {
	console.log(anime);
	var lineDrawing = anime({
	  targets: '#svg_text path',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  easing: 'easeInOutSine',
	  duration: 1500,
	  delay: function(el, i) { return i * 250 }
	});
};
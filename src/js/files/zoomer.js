import ImageZoom from "js-image-zoom";

new ImageZoom(document.getElementById('img-zoom'), {
	width: 510,
	height: 460,
	scale: 0.1,
	zoomWidth: 510,
	zoomStyle: 'width: 510px; height: 460px',
	offset: { vertical: 0, horizontal: 20} 
})


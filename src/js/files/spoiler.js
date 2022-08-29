const headers = document.querySelectorAll("[data-name='spoiler']");

headers.forEach(function(item) {
	item.addEventListener("click", headerClick);
});

function headerClick() {
	this.classList.toggle("spoiler-title");
	this.nextElementSibling.classList.toggle("spoiler-body");
}
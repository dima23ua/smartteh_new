let intervalId;
const button = document.querySelectorAll('.click-title');
const body = document.querySelector('body');

button.forEach(e => {
	e.addEventListener('click', e => {
		const menu = e.currentTarget.dataset.path;
		document.querySelectorAll('.click-content').forEach(e => {

			if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
				e.classList.remove('active');
				e.classList.remove('open');

				document.querySelector(`[data-target=${menu}]`).classList.add('active');
				intervalId = setTimeout(() => {
					document.querySelector(`[data-target=${menu}]`).classList.add('open');
				}, 0);
			}

			if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
				clearTimeout(intervalId);
				document.querySelector(`[data-target=${menu}]`).classList.remove('active');
				intervalId = setTimeout(() => {
					document.querySelector(`[data-target=${menu}]`).classList.remove('open');
				}, 0);
			}
		});
	});
});

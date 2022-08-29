import * as noUiSlider from 'nouislider';

var productSlider = document.getElementById('filter');

if (productSlider) {
	noUiSlider.create(productSlider, {
		start: [0, 100000],
		// behaviour: 'drag',
		connect: true,
		range: {
			'min': 0,
			'max': 100000
		}
	});

	const inputMin = document.getElementById('ui-value-min');
	const inputMax = document.getElementById('ui-value-max');
	const inputs = [inputMin, inputMax];

	productSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle])
	});

	const setProductSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		productSlider.noUiSlider.set(arr)
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setProductSlider(index, e.currentTarget.value);
		});
	});
}



const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');

runAnimation();


function runAnimation() {
	nums.forEach((num, idx) => {
		const penultimate = nums.length - 1;
		num.addEventListener('animationend', (e) => {
			if (e.animationName === 'goIn' && idx !== penultimate) {
				num.classList.remove('in');
				num.classList.add('out');
			} else if (e.animationName === 'goOut' && num.nextElementSibling) {
				num.nextElementSibling.classList.add('in');
			} else {
				window.location.href = 'candles.html'
			}
		});
	});
}
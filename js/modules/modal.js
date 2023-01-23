function closeModal(modalSerector) {
	const modal = document.querySelector(modalSerector);

	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

function openModal(modalSerector, modalTimerId) {
	const modal = document.querySelector(modalSerector);

	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';

	console.log(modalTimerId);
	if (modalTimerId) {
		clearInterval(modalTimerId);
	}
}

function modal(triggerSelector, modalSerector, modalTimerId) {
	// Modal

	const modalTrigger = document.querySelectorAll(triggerSelector),
		modal = document.querySelector(modalSerector);

	modalTrigger.forEach(btn => {
		btn.addEventListener('click', () => openModal(modalSerector, modalTimerId));
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal(modalSerector);
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === "Escape" && modal.classList.contains('show')) {
			closeModal(modalSerector);
		}
	});

	function showModalByScroll() {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			openModal(modalSerector, modalTimerId);
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);
}
export default modal;
export { closeModal };
export { openModal };
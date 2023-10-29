document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.price__type');
	const tabsBtn = document.querySelectorAll('.price__type-name');
	const tabsContent = document.querySelectorAll('.price__wrap');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('price__type-name')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('price__type-name-active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('price__type-name-active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('price__wrap-active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('price__wrap-active');
	};
});
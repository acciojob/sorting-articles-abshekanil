//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function customSort(a,b){
	
	const removeIgnoredWords = (str) => str.replace(/(^|\s)(a|an|the)(\s|$)/ig, '').toLowerCase();

	const titleA = removeIgnoredWords(a);
	const titleB = removeIgnoredWords(b);

	if(titleA < titleB)
	{
		return -1;
	}else if(titleA > titleB)
	{
		return 1;
	}else{
		return 0;
	}

}

	const sortedBands = bands.sort(customSort);

    const ulElement = document.createElement('ul');
	ulElement.id = 'bands';

	sortedBands.forEach(band => {

		const liElement = document.createElement('li');
		liElement.textContent = band;
		ulElement.appendChild(liElement);
	});
ulElement.style.margin = 'auto';
ulElement.style.width = '50%';

document.body.appendChild(ulElement);

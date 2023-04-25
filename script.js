const input = document.querySelector('#fruit');
const suggestions = document.querySelector('#suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/**
 * Searches for input string within fruits, and returns an array of fruits that contian the search string
 * @param {string} str string to search for within fruits
 * @returns {Array<string>} Array of fruits that contain the search string
 */
function search(str) {
	let lowerStr = str.toLowerCase()
	const lowercaseFruit = fruit.map(f => f.toLowerCase())
	const results = lowercaseFruit.filter(f => f.includes(lowerStr));
	const ret = []
	//recapitalize the fruits
	for(const r of results){
		const words = r.split(" ");
		const wordsRet = []
		for(const word of words){
			wordsRet.push(word[0].toUpperCase() + word.substring(1))
		}
		ret.push(wordsRet.join(" "))
	}
	return ret;
}

function searchHandler(e) {
	const inputVal = e.srcElement.value
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = ""
	if(inputVal){
		const els = []
		for(const res of results){
			const el = document.createElement("li");
			el.innerText = res
			el.addEventListener("mouseover", hover)
			el.addEventListener("mouseout", unhover)
			els.push(el)
		}
		suggestions.append(...els.slice(0,5))
	}	
}

function useSuggestion(e) {
	const inputVal = e.srcElement.textContent;
	input.value = inputVal;
	suggestions.innerHTML = ""
}
function hover(e){
	e.target.classList.toggle("hovered")
}
function unhover(e){
	e.target.classList.remove("hovered")
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// Napin tyylin muutos

let button = document.getElementById("button");

button.addEventListener("click", add);
button.addEventListener("mouseover", change);
button.addEventListener("mouseleave", change);

function change() {
    button.classList.toggle("strong");
}

let hTeksti = document.getElementById("teksti");
let hKuvat = document.getElementById("kuvat");

hTeksti.addEventListener("mouseenter", changeColor);
hKuvat.addEventListener("mouseleave", changeColor);

/**
 * 
 * @param {Event} event 
 */
function changeColor(event) {
    let elem = event.currentTarget;
    elem.classList.toggle("textcolor");
}

function add() {

    // Sisällön manipulointi

    let textAuston = document.querySelector("#wiki1");
    textAuston.textContent = "https://fi.wikipedia.org/wiki/Auston_Matthews";

    let textSource = document.querySelector("#teksti");
    textSource.textContent = "Tekstit";

    let photoSource = document.querySelector("#kuvat");
    photoSource.textContent = "Kuvat";

    let videoSource = document.querySelector("#videot");
    videoSource.textContent = "Videot";

    let pallomeri = document.querySelector(".pallomeri");
    pallomeri.textContent = "www.pallomeri.net";

    // Nodejen kautta sisällön muokkaus

    let jatkoaika = pallomeri.nextElementSibling;
    jatkoaika.textContent = "www.jatkoaika.com";

    let textMcdavid = document.createElement("ul");
    textMcdavid.textContent = "https://fi.wikipedia.org/wiki/Connor_McDavid";
    let textList = document.querySelector("#textList");
    textList.appendChild(textMcdavid);

    let photos = document.querySelector("#photoList");
    let wikipedia = photos.querySelector(".suomikiekko");
    let textWiki = document.createElement("ul");
    textWiki.textContent = "https://fi.wikipedia.org/wiki/Connor_McDavid";
    photos.insertBefore(textWiki, wikipedia);
    
}

// RESTin lisäys

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
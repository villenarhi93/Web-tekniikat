let button = document.getElementById("button");

button.addEventListener("click", change);
button.addEventListener("mouseover", change);
button.addEventListener("mouseleave", change);

function change() {

    // Napin tyylin muutos

    button.classList.toggle("strong");

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
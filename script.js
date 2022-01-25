const getButtonBigFive = document.getElementsByClassName("big-five-button")
const getButtonRemoveFirst = document.getElementById("remove-first-item-button")
const getButtonRemoveAll = document.getElementById("remove-all-button")
const parent = document.getElementById("spotted-animals-list");
const child = document.getElementById("spotted-animals-list").getElementsByTagName("li")[0]

//Functie om je gespotte dier uit de lijst van 'The Big Five' in de lijst van 'Animals spotted' te plaatsen
const changeText = (event) => {
    const spottedAnimal = event.target.textContent;
    const newLi = document.createElement("li");
    const menu = document.getElementById("spotted-animals-list");
    menu.appendChild(newLi);
    newLi.appendChild(document.createTextNode(spottedAnimal));
    }

Array.from(getButtonBigFive).forEach((getButton) => {
    getButton.addEventListener("click", changeText);
 });


 //Functie om het eerste element te verwijderen uit de lijst van 'Animals spotted' als je klikt op 'Remove the first'
const removeChild=() => { 
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
}

getButtonRemoveFirst.addEventListener("click", removeChild) 

 //Functie om alle elementen te verwijderen uit de lijst van 'Animals spotted' als je klikt op 'Remove all animals'
const removeAll = () => {
    parent.innerHTML = " "
}

getButtonRemoveAll.addEventListener("click", removeAll)


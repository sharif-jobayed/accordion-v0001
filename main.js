

const accordion=document.querySelector(`.accordion`);
const accordionItem=document.querySelectorAll(`.accordionItem`);
const accordionTitle=document.querySelectorAll(`.accordionTitle`);
const accordionDetails=document.querySelectorAll(`.accordionDetail`);

function hideAllDetails(){
	for(let a of accordionDetails){
		a.classList.add(`hidden`);
	}
}
hideAllDetails();

for(let b of accordionTitle){
	b.addEventListener(`click`,expandDetails);
}

function expandDetails(c){
	const parentElement=c.target.parentElement;
	parentElement.children[1].classList.toggle(`hidden`);
	parentElement.children[1].classList.toggle(`shown`);
}
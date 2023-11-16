

var home = () => {

    const licaoDinheiro = document.getElementById('licao-dinheiro');
    const logoInsta = document.getElementById('insta-logo');
    const primoRicoImg = document.getElementById('primo-rico-img');
    
    licaoDinheiro.addEventListener("mouseover", (event) => {
        logoInsta.dataset.opacity = "1";
    });
    
    licaoDinheiro.addEventListener("mouseout", (event) => {
        logoInsta.dataset.opacity = "0";
    });
    
    primoRicoImg.addEventListener("click", (event) => {
        window.open("https://youtu.be/in0XbfQEm2A", '_blank')
    })
}
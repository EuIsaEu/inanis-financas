
const licaoDinheiro = document.getElementById('licao-dinheiro');
const logoInsta = document.getElementById('insta-logo');

licaoDinheiro.addEventListener("mouseover", (event) => {
    logoInsta.dataset.opacity = "1";
});

licaoDinheiro.addEventListener("mouseout", (event) => {
    logoInsta.dataset.opacity = "0";
});

licaoDinheiro.addEventListener("click", (event) => {
    window.open("https://www.instagram.com/projetomilhao/", '_blank')
})
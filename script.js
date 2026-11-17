const ig = document.querySelector('#instagram');
const mail = document.querySelector('#mail');
const github = document.querySelector('#github');
const anime = document.getElementById('#myanime')


mail.addEventListener("mouseenter", () => {
  mail.src= './img/mail/mail-open.png';
}); 
mail.addEventListener("mouseleave", () => {
  mail.src= './img/mail/mail.png';
}); 
mail.addEventListener("click", () => {
  window.location.href = "mailto:contact@9zahub.com";
}); 
ig.addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/superninelol/";
}); 
github.addEventListener("click", () => {
  window.location.href = "https://github.com/ChavaphonBoonchan";
}); 


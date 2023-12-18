const hover1 = document.querySelector('.hover1')
const hover2 = document.querySelector(".hover2");
const hover3 = document.querySelector('.hover3')
const hover4 = document.querySelector(".hover4");
const img = document.querySelector(".imgSrc");

hover1.addEventListener('mouseover', function() {
  img.src = "./images/06_donate/donate_1.png";
})

hover2.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_2.png";
});

hover3.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_3.png";
});

hover4.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_4.png";
});
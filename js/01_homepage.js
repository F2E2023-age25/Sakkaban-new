// 選到要操作的節點
const demandTitle = document.querySelector(".demand-title");
const demandContainer = document.querySelector(".demand-container");

const newsTitle = document.querySelector(".news-title");
const newsContainer = document.querySelector(".main001");
const vector = document.querySelector(".card");

const mailboxTitle = document.querySelector(".mailbox-title");
const mailboxContainer = document.querySelector(".mailbox-container");
var plane = document.querySelector(".plane");
// 設置意見信箱監聽器
const mailbox = document.querySelector(".form-background");

// 設置捲動監聽器
window.addEventListener("scroll", animation);

function animation() {
  // 視窗80%
  const triggerBottom = (window.innerHeight / 5) * 4;

  // 元素的底部
  const demandBottom = demandTitle.getBoundingClientRect().bottom;
  const mailboxBottom = mailboxTitle.getBoundingClientRect().bottom;
  const newsboxBottom = newsTitle.getBoundingClientRect().bottom;

  function demandDelay() {
    demandContainer.classList.add("container-anima");
  }

  function mailboxDelay() {
    mailboxContainer.classList.add("container-anima");
  }
  function newsboxDelay() {
    newsContainer.classList.add("container-anima");
  }
  function planefly() {
    plane.classList.add("planefly");
  }

  // 加入動畫
  if (demandBottom < triggerBottom) {
    demandTitle.classList.add("title-anima");
    setTimeout(demandDelay, 400);
  }

  if (mailboxBottom < triggerBottom) {
    mailboxTitle.classList.add("title-anima");
    setTimeout(mailboxDelay, 400);
    setTimeout(planefly, 400);
  }
  if (newsboxBottom < triggerBottom) {
    newsTitle.classList.add("title-anima");
    setTimeout(newsboxDelay, 400);
  }
}

plane.addEventListener("mouseover", function () {
  plane.src = "./images/01_homepage/airplane2.png";
});

plane.addEventListener("mouseout", function () {
  plane.src = "./images/01_homepage/airplane1.png";
});

plane.addEventListener("click", function () {
  // plane.classList.add("plane2");
  mailbox.style.display = "flex";
});

// 小額捐款監聽器
const test = document.querySelector(".donate-background");
const btnClose = document.querySelector(".btn-close");
const btnDonate = document.querySelector(".btn-donate");

btnDonate.addEventListener("mouseover", () => {
  btnDonate.src = "./images/01_homepage/donate2.png";
});

btnDonate.addEventListener("mouseout", () => {
  btnDonate.src = "./images/01_homepage/donate1.png";
});

btnDonate.addEventListener("click", () => {
  
  test.style.display = "flex";
  stopScroll();
});

btnClose.addEventListener("click", () => {
  console.log("AAA");
  test.style.display = "none";
  mailbox.style.display = "none";
});
function Close() {
  test.style.display = "none";
  mailbox.style.display = "none";
}

// 捐款表單監聽器
const hover1 = document.querySelector(".hover1");
const hover2 = document.querySelector(".hover2");
const hover3 = document.querySelector(".hover3");
const hover4 = document.querySelector(".hover4");
const img = document.querySelector(".imgSrc");

hover1.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_1.png";
});

hover2.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_2.png";
});

hover3.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_3.png";
});

hover4.addEventListener("mouseover", function () {
  img.src = "./images/06_donate/donate_4.png";
});

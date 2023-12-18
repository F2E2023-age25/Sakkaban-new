// 可調整參數
// 輪播內容物的顯示數量
const contentToShow = 6;
// 輪播切換時的速度，單位為ms
const moveSpeed = 1000;

// 選取會使用的element
const carouselDiv = document.querySelector(".carouse_div");
const carousel = document.querySelector(".carousel");
const container = document.querySelector(".carousel_container");
const allContent = document.querySelectorAll(".content");
const allPhoto = document.querySelectorAll(".Photo");
const firstContent = allContent[0];
const lastContent = allContent[allContent.length - 1];
const content = document.querySelector(".content");
const contentComputeStyle = getComputedStyle(content);
var Time_start = setInterval("move(1)", "3000");

// 取得輪播內容物個數
const contentAmount = document.querySelectorAll(".content").length;

let distanceBetweenContent;

// 輪播容器之位置
let position = 0;

// 全域變數，管理輪播是否可以切換
let disableMove;
let RunStart = "";

// 設定輪播所需的style，也可以在css中直接新增
// carousel.style.overflow = "hidden";
// carousel.style.position = "relative";
// container.style.display = "flex";
// container.style.position = "absolute";

// 設定輪播切換的動畫時間
// container.style.transition = `transform ${moveSpeed}ms`;

//設定輪播顯示的寬
const setContentWidth = function () {
  // const carouselWidth = carousel.offsetWidth;
  const carouselWidth = carouselDiv.offsetWidth;

  // 可藉由給予輪播內容物margin-right屬性來設定內容物間的間隔
  const gap = parseInt(contentComputeStyle["margin-right"]);

  // 基於內容物的顯示數量，計算各內容物所需的大小
  const contentWidth =
    (carouselWidth - gap * Math.ceil(contentToShow - 1)) / contentToShow;

  allContent.forEach((el) => (el.style.width = `${contentWidth}px`));

  // 設定完內容物寬度後
  // 設定內容物間x軸之差，此為容器移動1單位之距離
  // 推算物件移動的距離
  distanceBetweenContent =
    content.nextElementSibling.offsetLeft - content.offsetLeft;
};
// const setContentHeight = function () {
//   // 基於內容物的高度來設定容器高度
//   carousel.style.height = contentComputeStyle.height;
// };
const insertClonedSlider = function () {
  // 複製前方再插入後方
  Array.from(allContent)
    //提取東西到哪裡
    .slice(0, Math.ceil(contentToShow))
    .reverse()
    .forEach((el) =>
      lastContent.insertAdjacentElement("afterend", el.cloneNode(true))
    );

  // 複製後方再插入前方
  Array.from(allContent)
    .slice(-Math.ceil(contentToShow))
    .forEach((el) =>
      firstContent.insertAdjacentElement("beforebegin", el.cloneNode(true))
    );
  // Array.from(allcontent)
  //   //提取東西到哪裡
  //   .slice(-Math.ceil(contentToShow))
  //   .reverse()
  //   .forEach((el) => LastContent.appendChild(el));

  // // 複製後方再插入前方
  // Array.from(allContent)
  //   .slice(0, Math.ceil(contentToShow))
  //   .reverse()
  //   .forEach((el) => firstContent.insertAdjacentElement("beforebegin", el));
};

// const move = function (step) {
//   // 由於不斷切換輪播時會產生動畫不平均的現象，因此設定在動畫完成後，才可以繼續切換輪播
//   if (disableMove) return;
//   // 避免超出範圍的guard clauses
//   // contentAmount - contentToShow : 可允許可視範圍的最大值
//   if (-(position - step) > contentAmount - contentToShow || position - step > 0)
//     return;

//   // 更新位置
//   position -= step;

//   // 移動
//   container.style.transform = `translateX(${
//     distanceBetweenContent * position
//   }px`;
// };
const move = function (step) {
  // 由於不斷切換輪播時會產生動畫不平均的現象，因此設定在動畫完成後，才可以繼續切換輪播
  if (disableMove) return;
  // 更新位置
  position -= step;
  // 移動
  // 設定輪播切換的動畫時間
  container.style.transition = `transform ${moveSpeed}ms`;
  container.style.transform = `translateX(${
    distanceBetweenContent * (position - Math.ceil(contentToShow))
  }px`;

  if (position <= -contentAmount || position >= Math.ceil(contentToShow)) {
    position =
      position >= Math.ceil(contentToShow)
        ? -contentAmount + Math.ceil(contentToShow)
        : 0;
    container.addEventListener("transitionend", () => {
      // 取消動畫
      container.style.transition = "transform 0s";
      // 移動
      container.style.transform = `translateX(${
        distanceBetweenContent * (position - Math.ceil(contentToShow))
      }px`;
    });
  }
};

// 動畫開始時，禁止移動，直到動畫結束
container.addEventListener("transitionstart", () => {
  disableMove = true;
});
container.addEventListener("transitionend", () => {
  disableMove = false;
});

carouselDiv.addEventListener("mouseover", () => {
  RunStart = false;
  clearInterval(Time_start);
  // HOVER();
});
carouselDiv.addEventListener("mouseout", () => {
  Time_start = setInterval("move(1)", "3000");
});

function init() {
  setContentWidth();
  // setContentHeight();
  insertClonedSlider();
  // 最初的移動
  container.style.transform = `translateX(${
    //.ceil限制整數
    -distanceBetweenContent * Math.ceil(contentToShow)
  }px)`;
}

const card = document.querySelector(".card");

// function HOVER() {
//   for (let i = 0; i < theme.length; i++) {
//     let text = theme[i];
//     allContent[i].addEventListener("mouseover", (event) => {
//       card.innerHTML = "";
//       card.innerHTML += `<h2>${text}</h2>`;
//     });
//   }
// }
function HOVER(i) {
  // for (i = 0; i < theme.length; i++) {
  const theme = [
    "台北寵物論壇",
    "掃街推廣貓咪友善環境",
    "喵喵減肥班，成果發表會",
    "寵物友善咖啡市集",
    "全台中途贈糧活動",
    "長泳訓練營",
  ];
  let text = theme[i];
  // allContent[i].addEventListener("mouseover", function () {
  card.innerHTML = "";
  card.innerHTML += `<h2>${text}</h2>`;
  // });
  // }
}
// const init = () => {
//   setContentWidth();
//   setContentHeight();
//   insertClonedSlider();
//   // 最初的移動
//   container.style.transform = `translateX(${
//     //.ceil限制整數
//     -distanceBetweenContent * Math.ceil(contentToShow)
//   }px)`;
// };
window.onload = init();

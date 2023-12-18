function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);

  // let a = document.querySelectorAll(selector);
  // let b = document.querySelector(selector);

  // return all ? console.log(a) : console.log(b);
  // console.log('b是'+ b);
}

const sections = qs(".section", true);
const timeline = qs(".timeline");
const line = qs(".line");

// 線
line.style.bottom = `calc(100% - 20px)`;

let prevScrollY = window.scrollY;
let up, down;
let full = false; // 不動
let set = 0;
const targetY = window.innerHeight * 0.6;

function scrollHandler(event) {
  const { scrollY } = window;
  // const scrollY = window.scrollY;

  up = scrollY < prevScrollY;
  down = !up;
  const timelineRect = timeline.getBoundingClientRect();
  const lineRect = line.getBoundingClientRect(); //CONST LINEHEIGHT = lineRect.bottom - lineRect.top

  const dist = window.innerHeight * 0.75 - timelineRect.top;
  console.log(targetY);
  console.log(timelineRect.top);
  // console.log(dist);

  // 往下滑中間軸變化
  if (down && !full) {
    set = Math.max(set, dist); // Math.max選取參數內最大值
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  // 往上滑中間軸變化
  if (up && !full) {
    set = Math.min(set, dist); // Math.max選取參數內最大值
    line.style.bottom = `calc(100% - ${set}px)`;
  }

  if (dist > timeline.offsetHeight + 50 && !full) {
    full = true;
    line.style.bottom = `-50px`;
  }

  sections.forEach((item) => {
    //console.log(items);
    const rect = item.getBoundingClientRect();

    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

scrollHandler();
line.style.display = "block";
window.addEventListener("scroll", scrollHandler);

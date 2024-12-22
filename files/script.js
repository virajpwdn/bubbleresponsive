let time = document.querySelector(".time-box p");
let score = document.querySelector(".score-box p");
let target = document.querySelector(".target p");
let bottomDesk = document.querySelector(".bottom-desktop");
let mobileBottom = document.querySelector(".bottom");

let randomTarget;
let countScore = 0;
let intialTime = 60;
let intialScore = 0;

function makeBubbles() {
  let bottomDesktop = document.querySelector(".bottom-desktop");
  let clutter = "";
  for (let i = 1; i <= 56; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="circle">
        <p>${random}</p>
    </div>`;
  }
  bottomDesktop.innerHTML = clutter;
}

function mobileBubbles(){
    let bottom = document.querySelector(".bottom");
    let added = "";
    for (let i = 1; i <= 20; i++) {
      let random = Math.floor(Math.random() * 10);
      added += `<div class="circle">
          <p>${random}</p>
      </div>`;
    }
    bottom.innerHTML = added;
}

function randomGol() {
  randomTarget = Math.floor(Math.random() * 10);
  target.innerText = randomTarget;
}

function incScore() {
  intialScore += 10;
  countScore = intialScore;
  score.innerText = countScore;
}

function timeCC() {
  let timecount = setInterval(() => {
    if (intialTime > 0) {
      intialTime--;
      time.innerText = intialTime;
    } else {
      clearInterval(timecount);
      bottomDesk.innerHTML = `Game Over`
    }
  }, 1000);
}
function check() {
  bottomDesk.addEventListener("click", function (dets) {
    let checking = Number(dets.target.innerText);
    if (checking === randomTarget) {
      console.log("hello");
      incScore();
    }
    randomGol();
    makeBubbles();
  });
}

function mobile(){
    mobileBottom.addEventListener("click", function (dets) {
        let checking = Number(dets.target.innerText);
        if (checking === randomTarget) {
          incScore();
        }
        randomGol();
        mobileBubbles();
      });
}

makeBubbles();
randomGol();
timeCC();
check();
mobile();
mobileBubbles();
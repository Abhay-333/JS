const body = document.querySelector("body");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let Interval;

function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const startChangingColor = () => {
  body.style.backgroundColor = randomColor();
};

start.addEventListener("click", () => {
  if (!Interval || Interval == null) {
    Interval = setInterval(() => {
      startChangingColor();
    }, 1000);
  }
});

stop.addEventListener("click", function () {
  clearInterval(Interval);
  Interval = null;
});

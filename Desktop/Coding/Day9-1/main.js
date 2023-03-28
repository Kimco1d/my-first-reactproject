const root = document.querySelector("#root");

const mainElFrist = `<div class="main">`;
const mainElLast = `</div>`;

const titleElFirst = `<div class="title">`;
const titleElLast = `</div>`;

const ulElFirst = `<ul>`;
const ulElLast = `</ul>`;

const liElFirst = `<li>`;
const liElLast = `</li>`;

const titleContent = `리액트를 잘하려면?`;
const howToMasterReact = [
  `자바스크립트를 잘해야 한다`,
  `CSS를 잘해야 한다`,
  `HTML을 잘해야 한다`,
];

howToMasterReact.map((v, i) => {
  return `${i + 1}.${v}`;
});

console.log(liArray);

root.innerHTML =
  mainElFrist +
  titleElFirst +
  titleContent +
  titleElLast +
  ulElFirst +
  liElFirst +
  howToMasterReact[0] +
  liElLast +
  liElFirst +
  howToMasterReact[1] +
  liElLast +
  liElFirst +
  howToMasterReact[2] +
  liElLast +
  ulElLast +
  mainElLast;

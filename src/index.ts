import "./css/main.css";

const divOptions: HTMLDivElement = document.querySelector("#divOptions");
const tbOption: HTMLInputElement = document.querySelector("#tbOption");
const btnAdd: HTMLButtonElement = document.querySelector("#btnAdd");
const btnStart: HTMLButtonElement = document.querySelector("#btnStart");

let optionsCount = 0;
let arr: number[][] = [];

btnAdd.addEventListener("click", () => {
  let div = document.createElement("div");
  div.id = `O${optionsCount++}`;
  div.innerText = tbOption.value;
  divOptions.appendChild(div);
});

btnStart.addEventListener("click", () => {
  for(let y = 0; y < optionsCount; y++) {
    let line: number[] = [];
    for(let x = 0; x < optionsCount; x++) {
      line.push(0);
    }
    arr.push(line);
  }
  
  for(let y = 0; y < optionsCount; y++) {
    for(let x = 0; x < optionsCount; x++) {
      if (x>y) {
        console.log(`O${y} <-> O${x}`);
      }



    }
  }





  console.log(arr);








});

btnStart
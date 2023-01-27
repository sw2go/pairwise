import "./css/main.css";
import "./css/slider.css";

const divOptions: HTMLDivElement = document.querySelector("#divOptions");
const tbOption: HTMLInputElement = document.querySelector("#tbOption");
const btnAdd: HTMLButtonElement = document.querySelector("#btnAdd");
const btnStart: HTMLButtonElement = document.querySelector("#btnStart");
const divSliders: HTMLDivElement = document.querySelector("#divSliders");
const inpRange: HTMLInputElement = document.querySelector("#inpRange");
const divNames: HTMLDivElement = document.querySelector("#div-names");
const divValues: HTMLDivElement = document.querySelector("#div-values");

let options: string[] = [];
let arr: number[][] = [];
let max: number = 100;  // default

inpRange.value = max.toString();

inpRange.onchange = () => {
  max = parseInt(inpRange.value);
}

btnAdd.addEventListener("click", () => addOption());
tbOption.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addOption();
  }
});



function addOption() {
  let optionName = tbOption.value;
  tbOption.value = "";

  let name = document.createElement("div");
  name.id = `O${options.length}`;
  name.innerText = optionName;
  divNames.appendChild(name);
  
  let value = document.createElement("div");
  value.classList.add("value-container")
  value.innerHTML = `
    <label class="valuelabel" id="V${options.length}"></label>
    <meter class="valuemeter" id="M${options.length}" min=0 ></meter>
  `
  divValues.appendChild(value);
  options.push(optionName);
}



function initArray(size: number, value: number): number[][]  {
  let array: number[][] = [];
  for(let y = 0; y < size; y++) {
    let line: number[] = [];
    for(let x = 0; x < size; x++) {
      line.push((x===y) ? 0 : value);
    }
    line.push(0); // additional field for sum
    sumLine(line);
    array.push(line); 
    
    updateDisplay(y, line[line.length-1], max * (line.length-2) / (line.length-1));
  }
  return array;  
}













btnStart.addEventListener("click", () => {

  arr = initArray(options.length, max/2);


  
  for(let y = 0; y < options.length; y++) {
    for(let x = 0; x < options.length; x++) {
      if (x>y) {
        console.log(`O${y} <-> O${x}`);
        let div = document.createElement("div");
        div.classList.add("slidecontainer");
        div.innerHTML =
        `
          <div style="float: left;">${options[y]}</div><div style="float: right;">${options[x]}</div>
          <input type="range" min="0" max="${max}" value=${max/2} class="slider" id="Y${y}X${x}">
        `
        divSliders.appendChild(div);
        let slider: HTMLInputElement = document.querySelector(`#Y${y}X${x}`);
        slider.oninput = () => {
          arr[y][x] = max - parseInt(slider.value);
          arr[x][y] = parseInt(slider.value);
          sumLine(arr[y]);
          sumLine(arr[x]);
          let maxValue = max * (arr[y].length-2) / (arr[y].length-1);
          updateDisplay(y, arr[y][arr[y].length-1], maxValue);
          updateDisplay(x, arr[x][arr[x].length-1], maxValue);

          console.log(arr);
        }
      }
    }
  } 
});

function sumLine(line: number[]) {
  line[line.length-1] = 0; //clear sum
  for(let i=0; i < line.length-1; i++) {
    line[line.length-1] += line[i]/(line.length-1);
  }
  let value = max * (options.length -1) / options.length;
}


function sum(option: number) {
  arr[option][options.length] = 0;  //clear sum
  for(let i=0; i< options.length; i++) {
    arr[option][options.length] += arr[option][i]/options.length;
  }
}

function updateDisplay(option: number, value: number, max: number) {
  let label = document.querySelector(`#V${option}`);
  label.innerHTML = value.toString();

  let meter = document.querySelector(`#M${option}`) as HTMLMeterElement;
  meter.max = max;
  meter.value = value;

}



function display() {
  for(let i=0; i< options.length; i++) {
    document.querySelector(`#V${i}`).innerHTML = arr[i][options.length].toString();
  }
}


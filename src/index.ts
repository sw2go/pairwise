import "./css/main.css";
import "./css/slider.css";
import "./css/checkbox.css";

const inpOption: HTMLInputElement = document.querySelector("#inpOption");
const btnAdd: HTMLButtonElement = document.querySelector("#btnAdd");
const btnStart: HTMLButtonElement = document.querySelector("#btnStart");
const divSliders: HTMLDivElement = document.querySelector("#divSliders");
const inpRange: HTMLInputElement = document.querySelector("#inpRange");
const divNames: HTMLDivElement = document.querySelector("#div-names");
const divValues: HTMLDivElement = document.querySelector("#div-values");
const in1: HTMLDivElement = document.querySelector("#in1");
const in2: HTMLDivElement = document.querySelector("#in2");
const in3: HTMLDivElement = document.querySelector("#in3");
const inpSort: HTMLInputElement = document.querySelector("#inpSort");

let options: Option[] = [];
let arr: number[][] = [];
let max: number = 100;  // default

inpRange.value = max.toString();

divValues.classList.add("hide");
divSliders.classList.add("hide");

inpRange.onchange = () => {
  max = parseInt(inpRange.value);
}

btnAdd.addEventListener("click", () => addOption());
inpOption.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addOption();
  }
});

inpSort.addEventListener("change", () => {
  sortDisplay(inpSort.checked);
});

function addOption() {
  let optionName = inpOption.value;
  inpOption.value = "";

  let name = document.createElement("div");
  name.classList.add("value-container")
  name.id = `O${options.length}`;
  name.innerText = optionName;
  divNames.appendChild(name);
  
  let value = document.createElement("div");
  value.classList.add("value-container");
  value.id = `W${options.length}`;
  value.innerHTML = `
    <label class="value-label" id="V${options.length}">0</label>
    <meter class="value-meter" id="M${options.length}" min=0 ></meter>
  `
  divValues.appendChild(value);

  options.push({ id: options.length, name: optionName, value: 0 });
}

function initArray(size: number, value: number): number[][]  {
  let array: number[][] = [];
  for(let y = 0; y < size; y++) {
    let line: number[] = [];
    for(let x = 0; x < size; x++) {
      line.push((x===y) ? 0 : value);
    }
    array.push(line);      
    updateDisplay(y, sumLine(line), size, max)
  }
  return array;  
}

btnStart.addEventListener("click", () => {

  in1.classList.add("hide");
  in2.classList.add("hide");
  divValues.classList.remove("hide");
  divSliders.classList.remove("hide");
  in3.classList.remove("hide");

  arr = initArray(options.length, max/2);

  for(let y = 0; y < options.length; y++) {
    options[y].value =  max * (options.length-1)/2;
    for(let x = 0; x < options.length; x++) {
      if (x>y) {
        //console.log(`O${y} <-> O${x}`);
        let div = document.createElement("div");
        div.classList.add("slidecontainer");
        div.innerHTML =
        `<div style="float: left;">${options[y].name}</div><div style="float: right;">${options[x].name}</div>
         <input type="range" min="0" max="${max}" value=${max/2} class="slider" id="Y${y}X${x}">`
        divSliders.appendChild(div);
        let slider: HTMLInputElement = document.querySelector(`#Y${y}X${x}`);
        slider.oninput = () => {
          
          arr[y][x] = max - parseInt(slider.value);
          arr[x][y] = parseInt(slider.value);

          options[y].value = sumLine(arr[y]);
          options[x].value = sumLine(arr[x]);

          updateDisplay(y, options[y].value, options.length, max);
          updateDisplay(x, options[x].value, options.length, max);

          

          sortDisplay(inpSort.checked);



          //console.log(arr);
        }
      }
    }
  } 
});

function sumLine(line: number[]) {
  let sum = 0;
  for(let i=0; i < line.length; i++) {
    sum += line[i];
  }
  return sum;
}

function updateDisplay(option: number, sum: number, size: number, max: number) {

  let displayValue = sum / (size * max/2 * (size -1));
  let meterVal = sum;
  let meterMax = max * (size-1); 

  let label = document.querySelector(`#V${option}`);  
   
  label.innerHTML = formatAsPercentage(displayValue);

  let meter = document.querySelector(`#M${option}`) as HTMLMeterElement;
  meter.max = meterMax;
  meter.value = meterVal;
}

function formatAsPercentage(num: number): string {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function sortDisplay(sort: boolean) {

  const sorted =  sort ? [...options].sort((a, b) => b.value - a.value) : options;

  sorted.forEach((item) => {
    divNames.appendChild(document.querySelector(`#O${item.id}`));
    divValues.appendChild(document.querySelector(`#W${item.id}`));
  });

}




class Option {
  id: number;
  name: string;
  value: number;
}





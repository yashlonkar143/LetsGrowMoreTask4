let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

// For Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
let allInputs = resultBox.innerHTML;

resultBox.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
})

// Clear all Inputs
clearBtn.addEventListener('click', ()=> {
    resultBox.innerHTML = "0";
})
 
delete Inputs
deleteBtn.addEventListener('click', ()=> {
//resultBox.innerHTML = "0,-1";
  resultBox.innerHTML = resultBox.innerHTML.substr(0, resultBox.innerHTML.length - 1);
 //function DEL() {
   // screen.value = screen.value.substr(0, screen.value.length - 1);
})
const nums = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".oper");
const showBtn = document.querySelector(".show");
const resultBtn = document.querySelector(".result");
const resetBtn = document.querySelector(".reset");
let numStrA = "";
let numStrB = "";
let operationType = "";

// input number
for (let num of nums){
    num.addEventListener("click", function(){
        // show the second number
        if (operationType!="" && operationType!="="){
            numStrB += num.textContent;
            showBtn.innerHTML += num.textContent;
            console.log("Current Second Number", numStrB);
        }
        // show the first number
        else if (operationType!="="){
            numStrA += num.textContent;
            showBtn.innerHTML += num.textContent;
            console.log("Current First Number", numStrA);
        }
    }
    )}

// input operation type
for (let i = 0; i<operations.length; i++){
    operations[i].addEventListener("click", function(){
        //calculate 
        if (operationType!= "" && numStrB != ""){
            let num1 = numStrA;
            let num2 = numStrB;
            numStrA = calcOperation(num1, num2, operationType);
            numStrB = "";
            resultBtn.innerHTML = numStrA;
            if (numStrA === "Can't divide by 0"){
                operationType = "=";
                console.log("Operation type1", operationType);
            }
        }
        //Show the opration type and not for adding the operation types twice
        const operArray =["/", "*", "-", "+", "="];
        const fontAwesomeArray = [
            '<i class="fas fa-divide"></i>', 
            '<i class="fas fa-times"></i>',
            '<i class="fas fa-minus"></i>',
            '<i class="fas fa-plus"></i>',
            '<i class="fas fa-equals"></i>'
            ]
        const condition1 = showBtn.innerHTML.slice(-1) != ">";
        const condition2 = resultBtn.textContent != "Can't divide by 0";
        if (condition1 && condition2){
            showBtn.innerHTML += fontAwesomeArray[i];
            operationType = operArray[i];
            console.log("Operation Type2", operationType);
        }
    })
}
// reset button
resetBtn.addEventListener("click", function(){
    showBtn.textContent = "";
    resultBtn.textContent="0";
    numStrA = "";
    numStrB = "";
    operationType = "";
})

// calculation function
function calcOperation(num1, num2, oper){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    switch (oper) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if(num2 === 0){
                result = "Can't divide by 0";
            } else {
                result = num1 / num2;
            }
            break;
    }
    return result;
}






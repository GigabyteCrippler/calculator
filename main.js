var result = document.querySelector('#result');
var smallResult = document.querySelector('#smallResult');
var val_1;
var val_2;
var oper = "+";
var operPressed = false;
var calc_done = false;

// function for number
function number(val) {
    val = val.toString();
    if (!operPressed) {
        // setting default value to empty string or val_1 if it already exists
        val_1 = val_1 || "";
        if (val === "." && !val_1.includes("."))
            val_1 = val_1 + val;
        else if (val !== ".")
            val_1 = val_1 + val;
        result.innerHTML = val_1;
        smallResult.innerHTML = val_1;

    }
    if (operPressed) {
        val_2 = val_2 || "";
        if (val === "." && !val_2.includes("."))
            val_2 = val_2 + val;
        else if (val !== ".")
            val_2 = val_2 + val;
        result.innerHTML = `${val_1} ${oper} ${val_2}`;
        let res;
        switch (oper) {
            case "+":
                res = parseFloat(val_1) + parseFloat(val_2);
                break
            case "-":
                res = parseFloat(val_1) - parseFloat(val_2);
                break
            case "÷":
                res = parseFloat(val_1) / parseFloat(val_2);
                break
            case "*":
                res = parseFloat(val_1) * parseFloat(val_2);
                break
        }
        smallResult.innerHTML = res;
    }
}


//function for operations/operator
function operator(operator) {
    if (!val_1) {
        return;
    }

    if (val_1 && !val_2) {
        result.innerHTML = val_1 + operator;
        oper = operator;
        calc_done = false;
        operPressed = true;
        calc_done = false;
    }

    if (val_1 && val_2) {
        oper = operator;
        operPressed = true;
        engine();
        calc_done = true;
    }

    if (calc_done) {
        operPressed = true;
        var x = total = val_1;
        smallResult.innerHTML = x;
        result.innerHTML = x + operator;
        oper = operator;
    }

}


//function for total 
function engine() {
    switch (oper) {
        case "+":
            total = parseFloat(val_1) + parseFloat(val_2);
            calc_done = true;
            break;
        case "-":
            total = parseFloat(val_1) - parseFloat(val_2);
            calc_done = true;
            break;
        case "*":
            total = parseFloat(val_1) * parseFloat(val_2)
            calc_done = true;
            break;
        case "÷":
            total = parseFloat(val_1) / parseFloat(val_2);
            calc_done = true;
            break;
        default:
            return;
    }
    smallResult.innerHTML = "";
    result.innerHTML = total;
    return total;
}


// function for  AC( All Clear )
function AC() {
    // sets all variables to default / empty strings
    result.innerHTML = "";
    smallResult.innerHTML = "";
    oper = false;
    operPressed = false;
    val_1 = "";
    val_2 = "";
}


// function for delete

function del() {
    // if the operator is pressed and value 2 is empty,
    // then delete the operator,
    // then change the operator var to false,
    // then start deleting val_1
    if (operPressed && !val_2) {
        operPressed = false;
        result.innerHTML = val_1;
        return;
    }

    // we're dealing with val_2
    if (operPressed) {
        val_2 = val_2.slice(0, -1);
        result.innerHTML = `${val_1} ${oper} ${val_2}`;

    } else {
        // we're dealing with val_1
        val_1 = val_1.slice(0, -1);
        result.innerHTML = val_1;
    }
}

function calc() {
    //grap the value of the first input parseInt to convert the data to int 
    var a = parseInt(document.querySelector("#value1").value);
    //grap the value of the second input 
    var b = parseInt(document.querySelector("#value2").value);
    //grap the value of the operator  input 
    var op = document.querySelector("#operator").value;
    var calculate;

    //calculate
    if (op == "add"){
        calculate = a + b;
    }else if (op == "min"){
        calculate = a - b;
    }else if (op == "div"){
        calculate = a / b;
    }else if (op == "mul"){
        calculate = a * b;
    }
    
    document.querySelector("#result").innerHTML = calculate;


}
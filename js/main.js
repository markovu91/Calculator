
let arr =[];
let operand = [];
arr = document.querySelectorAll('.num');
operand = document.querySelectorAll(".oper");
let output = document.getElementById('output');
let calc = document.getElementById('calc');
let clear = document.getElementById('clear');
let point = document.getElementById('point');

arr.forEach(element => {
    element.addEventListener("click",function(){
        output.append(element.value);
    });

});

operand.forEach(element => {
    element.addEventListener("click", function(){
        output.append(element.value);
    });
});


point.addEventListener("click",function(){
    output.append(".");
});



calc.addEventListener('click', function(){
    try{let res = eval(output.value);
    output.textContent=res}catch(err){
        output.textContent="error";
    };
});

clear.addEventListener("click", function(){
    output.textContent="";
});
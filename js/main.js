console.log("hello");


//varaibles 
var feet = document.getElementById('feet');
var Inches = document.getElementById('Inches');
var feet = document.getElementById('feet');

// addEventlistener for input 


//feet into inches
feet.addEventListener('input', function (){
    let f = this.value;  //f store value
    let i = f*12;  //value of f*2 and store in i
    Inches.value = i;
});


//inches into feet
Inches.addEventListener('input', function (){
    let i = this.value;  //f store value
    let f = i/12;  //value of i/2 and store in f
 
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    }
    feet.value = f;
});



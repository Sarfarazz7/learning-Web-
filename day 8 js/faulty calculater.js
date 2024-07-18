let ram= Math.random();

let a = prompt('enter first value');
let c = prompt('enter operater');
let b = prompt('enter second value');

let obj= {
    "+":"-",
    "-":"*",
    "*":"/",
    "/":"+",
}

if (ram>0.1){
    // here i'm gonna write result
    alert(`here is your result ${eval(`${a} ${c} ${b}`)}`);
}
else{
    // here i'm gonna write wrong result
    c=obj[c];
    console.log(`here is your result ${eval(`${a} ${c} ${b}`)}`)
    alert(`here is your result ${eval(`${a} ${c} ${b}`)}`)
}
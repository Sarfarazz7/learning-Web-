function lovecalculator() {
    let male = prompt('Please enter male name ');
    let female = prompt('Please enter female name ');
    let love = Math.round(Math.random()*100);

    alert(`male : ${male} and female : ${female} your love persentage. is ${love} %`);
    lovecalculator();

};
lovecalculator();
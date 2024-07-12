// let NoOfDrumps= document.body.querySelectorAll(".drum").length;
// for (let i = 0; i < NoOfDrumps; i++) {
//     document.body.querySelectorAll(".drum")[i].addEventListener("click" , function fuck() {
//         alert("bosdk maderchod bahan ki lavde")
//     })
    
// }

// function add(num1 , num2) {
//     return num1 + num2
// }
// function substract(num1 , num2) {
//     return num1 - num2
// }
// function divide(num1 , num2) {
//     return num1 / num2
// }
// function mutiply(num1 , num2) {
//     return num1 * num2
// }

// function calculator (num1 , num2 , operator ){
//     return  operator(num1 ,num2)
// }
// calculator(45  ,76 , add);
//////////////////////////////////////////////////////////
// playing sound in website

// let NoOfDrumps= document.body.querySelectorAll(".drum").length;
// for (let i = 0; i < NoOfDrumps; i++) {
//     document.body.querySelectorAll(".drum")[i].addEventListener("click" , fuck )
    
// }
// function fuck() {
//     this.style.backgroundColor="black";
//     console.log(this)
// }

// let audio = new Audio("sounds/tom-1.mp3")
// audio.play()
///////////////////////////////////////////
let allDrum = document.body.querySelectorAll(".drum").length
console.log(allDrum)
for (let i = 0; i < allDrum; i++) {
    document.body.querySelectorAll(".drum")[i].addEventListener("click" , colorchanger )
    
}
function colorchanger() {
 let selecter = this.innerHTML;
    switch (selecter) {
        case "w":
            this.style.color="black"
            var w = new Audio("sounds/tom-1.mp3")
            w.play()
            break;
        case "a":
            this.style.color="black"
            var a = new Audio("sounds/tom-2.mp3")
            a.play()
            break;
        case "s":
            this.style.color="black"
            var s = new Audio("sounds/tom-3.mp3")
            s.play()
            break;
        case "d":
            this.style.color="black"
            var d = new Audio("sounds/tom-4.mp3")
            d.play()
            break;
        case "j":
            this.style.color="black"
            var j = new Audio("sounds/crash.mp3")
            j.play()
            break;
        case "k":
            this.style.color="black"
            var k = new Audio("sounds/kick-bass.mp3")
            k.play()
            break;
        case "l":
            this.style.color="black"
            var l = new Audio("sounds/snare.mp3")
            l.play()
            break;
    
        default:
            break;
    }
}
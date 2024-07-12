let NumOfDrum = document.body.querySelectorAll(".drum").length;

for (let i = 0; i < NumOfDrum; i++) {
    document.body.querySelectorAll(".drum")[i].addEventListener("click", theaudio)


 
};
function theaudio() {
    let select = this.innerHTML;
    switch (select) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3")
            w.play()
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3")
            a.play()
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3")
            s.play()
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3")
            d.play()
            break;
        case "f":
            var f = new Audio("sounds/snare.mp3")
            f.play()
            break;
        case "j":
            var j = new Audio("sounds/kick-bass.mp3")
            j.play()
            break;
            default:
            var  k= new Audio("sounds/crash.mp3")
            k.play()
            break;
    }
    Animation(select)
}

// document.addEventListener("keyp" , function (keys) {
//     var ket = keys.key ;
//    console.log(ket)
//    switch (ket){
//     case "w" :
//         var w = new Audio("sounds/tom-1.mp3")
//         w.play()
//         break;
//         case "a":
//             var a = new Audio("sounds/tom-2.mp3")
//             a.play()
//             break;
//         case "s":
//             var s = new Audio("sounds/tom-3.mp3")
//             s.play()
//             break;
//         case "d":
//             var d = new Audio("sounds/tom-4.mp3")
//             d.play()
//             break;
//         case "f":
//             var f = new Audio("sounds/snare.mp3")
//             f.play()
//             break;
//         case "j":
//             var j = new Audio("sounds/kick-bass.mp3")
//             j.play()
//             break;
//         case "k":
//             var k = new Audio("sounds/crash.mp3")
//             k.play()
//             break;
//             default:
//             console.log("bochili ki ")
//             break;
//    }
// })

let a = document.body.querySelectorAll(".drum").length
console.log(a)
for (let i = 0; i < a; i++) {
    let b = document.body.querySelectorAll(".drum")[i].addEventListener("keypress", munna)

}
function munna(keyp) {
    var key = keyp.key;
    switch (key){
            case "w" :
                var w = new Audio("sounds/tom-1.mp3")
                w.play()
                break;
                case "a":
                    var a = new Audio("sounds/tom-2.mp3")
                    a.play()
                    break;
                case "s":
                    var s = new Audio("sounds/tom-3.mp3")
                    s.play()
                    break;
                case "d":
                    var d = new Audio("sounds/tom-4.mp3")
                    d.play()
                    break;
                case "f":
                    var f = new Audio("sounds/snare.mp3")
                    f.play()
                    break;
                case "j":
                    var j = new Audio("sounds/kick-bass.mp3")
                    j.play()
                    break;
                case "k":
                    var k = new Audio("sounds/crash.mp3")
                    k.play()
                    break;
                    default:
                    console.log("bochili ki ")
                    break;
           }
Animation(key)
console.log(key)
}


function Animation(clas) {
        let a = document.querySelector("." + clas)
        a.classList.add("pis")
        
        setTimeout(function () {
            a.classList.remove("pis")
        } , 0.3000)
}

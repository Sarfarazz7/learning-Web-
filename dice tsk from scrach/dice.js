// let play=prompt("enter 1st player name");
// let play2=prompt("enter 2nd player name");

// document.body.querySelectorAll("p")[0].innerHTML=play ;
// document.body.querySelectorAll("p")[1].innerHTML=play2 ;


let player1 = Math.round((Math.random()*5)+1); 
let player2  = Math.round((Math.random()*5)+1);

// playeer 1nd statements
if (player1===1){
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/t1wpMZhr/dice1.png[/img][/url")
    }
    else if (player1===2){
        
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/XG54SjLn/dice2.png[/img][/url")
    }
    else if (player1===3){
        
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/gLPdGCt8/dice3.png[/img][/url")
    }
    else if (player1===4){
        
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/T5qx1tBS/dice4.png[/img][/url")
    }
    else if (player1===5){
        
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/WtMT54tn/dice5.png[/img][/url")
    }
    else if (player1===6){
        
    document.body.querySelectorAll("img")[0].setAttribute("src" , "https://i.postimg.cc/yksBtzZz/dice6.png[/img][/url")
    }

    // playeer 2nd statements
if (player2===1){
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/t1wpMZhr/dice1.png[/img][/url")
    }
    else if (player2===2){
        
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/XG54SjLn/dice2.png[/img][/url")
    }
    else if (player2===3){
        
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/XG54SjLn/dice2.png[/img][/url")
    }
    else if (player2===4){
        
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/T5qx1tBS/dice4.png[/img][/url")
    }
    else if (player2===5){
        
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/WtMT54tn/dice5.png[/img][/url")
    }
    else if (player2===6){
        
    document.body.querySelectorAll("img")[1].setAttribute("src" , "https://i.postimg.cc/yksBtzZz/dice6.png[/img][/url")
    }


    if (player1 < player2){
        document.body.querySelectorAll("h1")[0].innerHTML="player2 "
    }
    else if (player1 > player2){
        document.body.querySelectorAll("h1")[0].innerHTML="player1"
    }
    else {
        document.body.querySelectorAll("h1")[0].innerHTML="Draw"
    }

// first statement
// let random1 = Math.floor((Math.random()*6)+1)

// let selectimg = "dice"+ random1 + ".png";
// let path = "Images/" + selectimg

// let doc = document.body.querySelectorAll("img")[0]

// doc.setAttribute("src" , path)

// // second statement
// let random2 = Math.floor((Math.random()*6)+1) ;
// console.log(random2) 
// console.log(random1) 
// let selec = "dice"+ random2 + ".png" ;
// let path2 = "Images/" + selec
// let docu = document.body.querySelectorAll("img")[1]

// docu.setAttribute("src" , path2 )

// // statement three
// if (random1 < random2){
//             document.body.querySelectorAll("h1")[0].innerHTML= "player2"
//         }
//         else if (random1 > random2){
//             document.body.querySelectorAll("h1")[0].innerHTML="player1"
//         }
//         else {
//             document.body.querySelectorAll("h1")[0].innerHTML="Draw"
//         }


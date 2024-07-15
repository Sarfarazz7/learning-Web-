function leepy(){
    let year = prompt("enter year to find leep year")
    let st1 =  4 ; 
    let st2 = 100; 
    let st3 = 400; 
    if(year%st1==0){
        year/st2
        if(year%st2!=0){
            alert(year+" is leep year")
        }
         else {
        year/st3 
        if (year%st3==0){
            alert(year+" is leep year")
        }   
        else {
            alert(year +" is not leep year")
        }    
    }
}
else{
        alert(" is not leep year ")

    }
};
leepy()

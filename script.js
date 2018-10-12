const intervals = [1500000,300000,600000,4001]
var currentInterval = intervals[0];
var escape=0;

ulListItems = document.querySelector(".timer-nav").children[0].children;

const func1 = function (event){
    var parentIndexParam = event.target.parentIndexParam;

    //---setear el current interval
    currentInterval = intervals[parentIndexParam];
    console.log("timer "+currentInterval);

    //---borrar los demas active class con el index 
    (function(){
        for(let i=0;i<ulListItems.length;i++){
            ulListItems[i].className="";
        }
        ulListItems[parentIndexParam].className="active";
        
        //--- cambio el HTML para que muestre la cuenta correcta
        let calcCount = currentInterval/60/1000;
        document.getElementsByClassName("time")[0].innerText = calcCount+':00';

    })();
    tickClock(); 
    // setTimer();
    // console.log(this);
    // console.log("inside "+this.innerText+" class: "+this.className);
    // console.log("")
}

const setTimer = function(){
    //obtengo la cuenta
    var counter = document.getElementsByClassName("time")[0].innerText;
    
    console.log("Function setTimer ,counter: "+counter);
    console.log("Current interval "+currentInterval)
}

const tickClock = function(){
    let counter = document.getElementsByClassName("time")[0].innerText;
    var array = counter.split("");

    if (array.length!=5){
        array.unshift(0);
    }
    

    const subtract2 = function(index){
        console.log(array);

        if(array[index]==0){

            if(array[index-1]==0){

                array[index] = 9;
                array[index-1] = 5;
                subtract2(1);
            }
            else{
                array[index-1]--;
                array[index]=9;
            }
        }
        else{
            array[index]--;
        }
        document.getElementsByClassName("time")[0].innerText = array.join("");
        document.querySelector("title").innerText = "("+array.join("")+") TomatoTimer";
    }

    setTimeout(function(){
        clearInterval(tick);
    },currentInterval);
    
    
    var tick = setInterval( function (){
        subtract2(4);   
        
    },1000);
}

for(let i=0;i<ulListItems.length;i++){
    item = ulListItems[i];
    item.addEventListener("click",func1,false);
    item.parentIndexParam = i; // agrego un parametro al item
    console.log("hola")
}




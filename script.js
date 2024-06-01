/*

let second=document.getElementById("chrono_d")
let minute=document.getElementById("chrono_g")
let commencer=document.getElementById("star")
let arrete=document.getElementById("block")
let reboot=document.getElementById("boot")
let sec=0
let min=0
function start(){
 boucle=setInterval(function(){
    sec++;
    second.innerHTML=sec
    if(sec===60 ){
        boucle=-1
        sec=boucle
        min=min+1
        minute.innerHTML=min
    }
},1000)
console.log(boucle)
}
commencer.addEventListener("click",start)
*/
//Repis voir 

window.onload = function (){

    let seconde = 0;
    let minute = 0;
    let minuteApp = document.getElementById("chrono_g");
    let secondeApp = document.getElementById("chrono_d");
    let buttonStart = document.getElementById("star");
    let buttonStop = document.getElementById("block");
    let buttonReset = document.getElementById("boot");
    let boucle;

    buttonStart.onclick = function(){
        clearInterval(boucle);
        boucle = setInterval(commencerTimer, 1000);
    }

    buttonStop.onclick = function(boucle){
        clearInterval(boucle);
    }

    buttonReset.onclick = function(){
        clearInterval(boucle);
        minute = "00";
        seconde = "00";
        minuteApp.innerHTML = minute;
        secondeApp.innerHTML = seconde;
    }
    function commencerTimer(){
        minute++;
        if (minute <=9){
            minuteApp.innerHTML = "0" + minute;
        }
        if (minute > 9){
            minuteApp.innerHTML = minute;
        }
        if (minute < 99){
            console.log(seconde + " Secondes");
            seconde++;
            secondeApp.innerHTML = "0" + seconde;
            minute = 0;
            minuteApp.innerHTML = "0" + 0;
/*             console.log(minute + " Minute");
 */        }
        if (seconde > 9){
            secondeApp.innerHTML = seconde;
        }
         if(seconde===60 ){
            boucle=-1;
            seconde=boucle;
            ++minute;
        }
        console.log(minute);
    }
}
/* 
function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    } */
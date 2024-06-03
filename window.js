window.onload=function(){
    let second=document.getElementById("chrono_d");
    let minute=document.getElementById("chrono_g");
    let commencer=document.getElementById("star");
    let arrete=document.getElementById("block");
    let boot =document.getElementById("boot");
    let sec=0;
    let min=0;
    let boucle;

    commencer.onclick=function (){
        clearInterval(boucle);
    boucle=setInterval(function(){
        sec++;
        second.innerHTML=sec;
        if(sec===60 ){
            // boucle=0;

            sec=boucle;
            sec=-1
            min++;
            minute.innerHTML=min;
        }
        console.log(boucle)
    },1000)
    
    }
    arrete.onclick = function(){
        clearInterval(boucle);
        clearInterval(boucle);
        console.log(boucle)
    }
    boot.onclick = function(){
        clearInterval(boucle);
        min = "00";
        sec = "00";
        minute.innerHTML = min;
        second.innerHTML = sec;
        console.log(boucle)
    }
 }

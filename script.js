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

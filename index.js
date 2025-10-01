let score=0;
function cl(){
    document.getElementById("click").innerText="click";
    score++;
    document.getElementById("Score").innerText=score;
}

let timeleft=5;

let timer=setInterval(function(){
    document.getElementById("time").innerText="time"+timeleft;
    timeleft--;

    if(timeleft==0){
        clearInterval(timer);
        document.getElementById("time").innerText="game over";
    }
},1000);
 var colors=["red","yellow","blue","green"];
var randompattern=[];
var userentered=[];
function choosecolor(){
    userentered=[];
    level++;
    document.querySelector("h1").innerHTML="level "+level;
    var n=Math.floor(Math.random()*4);
    randompattern.push(colors[n]); 
    var audio=new Audio("sounds/"+colors[n]+".mp3")
    audio.play();
    document.querySelector("."+colors[n]).classList.add("pr");
    setTimeout(function(){document.querySelector("."+colors[n]).classList.remove("pr");},150);
    
}
for(var i=0;i<4;i++){
    
    document.querySelectorAll(".btn")[i].addEventListener(("click"),function(){
        
        var classes=this.classList;
        userentered.push(classes[0]);
       
        
     var audio=new Audio("sounds/"+classes[0]+".mp3")
        audio.play();
    document.querySelector("."+classes[0]).classList.add("pr");
    setTimeout(function(){
        document.querySelector("."+classes[0]).classList.remove("pr");
    },120);
    checkAnswer(userentered.length-1);

   
        
    })
};
function checkAnswer(currentLevel){
    if(randompattern[currentLevel]===userentered[currentLevel]){
        console.log("succes");
        if(randompattern.length===userentered.length){
            setTimeout(function(){choosecolor()},1000);
        }
    }
    else{
        console.log("wrong");
        var audio=new Audio("sounds/wrong.mp3")
        audio.play();
        document.querySelector("body").classList.add("wrongans");
        setTimeout(function(){
            document.querySelector("body").classList.remove("wrongans");
        },200);
        document.querySelector("h1").innerHTML="Game Over Press any key to continue";
        startover();

    }
};

var started=false;
var level=0;
document.addEventListener("keydown",function(){
    if(started===false ){
        document.querySelector("h1").innerHTML="level 0";
        choosecolor();
        started=true;

    }
})
function startover(){
    level=0;
    randompattern=[];
    started=false;
}



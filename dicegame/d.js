var a=Math.floor(Math.random()*6)+1;
console.log(a);
var img1new=a+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",img1new);

var b=Math.floor(Math.random()*6)+1;
console.log(b);
var img2new=b+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",img2new);


if(a>b){
    document.querySelector("h1").innerHTML="player 1wins";

}
else if(a<b){
    document.querySelector("h1").innerHTML="player 2wins";
}
else{
    document.querySelector("h1").innerHTML="It'a a tie";
}


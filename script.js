//canvas declaration
let canvas = document.getElementById("canvas");
//canvas style properties
canvas.style.background = "#af8";
canvas.style.height = window.innerHeight;
canvas.style.width = window.innerWidth;

let context = canvas.getContext("2d");

//canvas elements
context.fillStyle = "red";
context.beginPath();
context.strokeStyle = "red";
contsxt.arc(10,10,50,0,Math.PI*2,false);
context.stroke();
context.colosePath();
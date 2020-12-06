song= "";

function preload(){
    song= loadSound("music.mp3");
}

function setup(){
 canvas= createCanvas(500, 500);
 canvas.position(450, 200);
 video= createCapture(VIDEO);
 video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
}

function draw(){
image(video, 0, 0, 500, 500);
}
function play(){
    console.log("Its working");
    song.play();

}

function modelLoaded(){
    console.log("model is loaded");
}


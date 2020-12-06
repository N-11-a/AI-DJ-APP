song= "";
leftwristx= 0;
leftwristy= 0;
rightwristx= 0;
rightwristy= 0;

function preload(){
    song= loadSound("music.mp3");
}

function setup(){
 canvas= createCanvas(600, 500);
 canvas.center();
 video= createCapture(VIDEO);
 video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function gotPoses(result){
    if(result.length>0){
rightwristx= result[0].pose.rightWrist.x;
rightwristy= result[0].pose.rightWrist.y;
leftwristx= result[0].pose.leftWrist.x;
leftwristy= result[0].pose.leftWrist.y;
    }
}

function draw(){
image(video, 0, 0, 600, 500);
fill("blue");
stroke("lime");
circle(leftwristx, leftwristy, 40);
}
function play(){
    console.log("Its working");
    song.play();
    song.setVolume(1);
    song.rate(1);


}

function modelLoaded(){
    console.log("model is loaded");
}


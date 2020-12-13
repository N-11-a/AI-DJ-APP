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
    console.log("result");
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
fill("blue");
stroke("lime");
circle(rightwristx, rightwristy, 40);
if(rightwristy>0 && rightwristy<=100){
song.rate(0.5);
document.getElementById("speed").innerHTML= "0.5x";
}
if(rightwristy>100 && rightwristy<=200){
    song.rate(1.0);
    document.getElementById("speed").innerHTML= "1.0x";
    }
    if(rightwristy>200 && rightwristy<=300){
        song.rate(1.5);
        document.getElementById("speed").innerHTML= "1.5x";
        }
        if(rightwristy>300 && rightwristy<=400){
            song.rate(2.0);
            document.getElementById("speed").innerHTML= "2.0x";}




            if(rightwristy>400 && rightwristy<=500){
                song.rate(2.5);
                document.getElementById("speed").innerHTML= "2.5x";
                }
                if(leftwristy>0 && leftwristy<=100){
                    song.setVolume(0.2);
                    document.getElementById("volume").innerHTML= "0.2x";
                    }
                    if(leftwristy>100 && leftwristy<=200){
                        song.setVolume(0.4);
                        document.getElementById("volume").innerHTML= "0.4x";
                        }
                    
                        if(leftwristy>200 && leftwristy<=300){
                            song.setVolume(0.6);
                            document.getElementById("volume").innerHTML= "0.6x";
                            }
                            
                            if(leftwristy>300 && leftwristy<=400){
                                song.setVolume(0.8);
                                document.getElementById("volume").innerHTML= "0.8x";
                                }
                                if(leftwristy>400 && leftwristy<=500){
                                    song.setVolume(1.0);
                                    document.getElementById("volume").innerHTML= "1.0x";
                                    }
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


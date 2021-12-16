var noseX="";
var noseY="";

var wristLX=0;
var wristRX=0;
var difference=0;

function setup(){
    canvas=createCanvas(2000, 1000);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(600, 400);
    posenet=ml5.poseNet(video, modalloaded);
    posenet.on('pose', gotposes);
}
function draw(){
    background('#C99200');
    document.getElementById("square_sides").innerHTML="Width and height of the wquare will be "+difference+"px";
    fill('#f90093');
    stroke('#FFD700');
    square(noseX, noseY, difference);

}
function modalloaded(){
console.log('posenet has initialized');
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X and Y coordinates are "+ noseX +" , "+ noseY );

        wristLX=results[0].pose.leftWrist.x;
        wristRX=results[0].pose.rightWrist.x;
        difference=floor(wristLX-wristRX);
        console.log("Left wrist X is "+ wristLX+" and Right rist X is "+wristRX);
        console.log("difference is = "+difference);
        

    }
}
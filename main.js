noseX = 0 ; 
noseY = 0 ;
leftWristX= 0;
rightWristX = 0;
differance =0;

function setup(){
canvas=createCanvas(550, 500);
canvas.position(600,100);
video=createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);


}

function modelLoaded(){
 console.log("posenet is initialized")

}

function draw(){
background("#969A97");
document.getElementById("square_sides").innerHTML = "Side of the font will be = " + differance + "px";
fill('red');
stroke('blue');
textSize(differance);
text("Omkar " ,noseX , noseY);



}

function gotPoses(results){

if(results.length>0){

    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "  noseY  = " + noseY);
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     differance =  floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + "  rightWristX = " + rightWristX + '  differance = ' + differance);

}




}
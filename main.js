noseX = 0;
noseY = 0;  
  
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){

        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
}
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function draw(){
    background('#969A97');
    fill('#C5DA14');
    stroke('#73FFFB');
    square(noseX, noseY, 100);
}

mustachX=0;
mustachY=0;

function preload() {
    mustach = loadImage('https://i.postimg.cc/PJQv7VP6/m.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console,log(results);
        mustachX = results[0].pose.nose.x-20;
        mustachY = results[0].pose.nose.y-0.2;
        console.log("mustach x = " + mustachX);
        console.log("mustach y = " + mustachY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustach, mustachX, mustachY, 35, 35);
}

function take_snapshot(){
    save('jaduu_laduu.png')
}
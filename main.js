noseX =0;
noseY=0;
function preload() {
clown_nose = loadImage("https://i.postimg.cc/j2ZGnFV8/clownnose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
   video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResult);

}

function modelLoaded(){
    console.log("Posenet Is Initialized");

}

function gotResult(results){
    if(results.length>0){
    console.log(results);
    noseY=results[0].pose.nose.y-15;
    noseX=results[0].pose.nose.x-15;

    console.log("nosex = "+noseX);
    console.log("nosey ="+ noseY);
    }
}

function draw() {
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30)
}

function take_snapshot() {
    save("clownnose.png");
}
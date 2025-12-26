noseX = 0;
noseY = 0;
myDownload = "";

function preload() {
  lollipop = loadImage("https://i.postimg.cc/wxbs1CPN/swirl.png");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.id("myCanvas"); 
    snappedImg = document.getElementById("myCanvas"); 
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
  
function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(lollipop, noseX - 15, noseY - 10, 30, 30);
}

function snap() {
  document.getElementById("canvasImg").src = snappedImg.toDataURL();
  document.getElementById("downloadLink").href = snappedImg.toDataURL();
}
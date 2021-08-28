lipsX = 0;
lipsY = 0;

function preload()
{
  clown_lips = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_lips , lipsX , lipsY , 50 , 30);
}

function take_snapshot()
{
    save('myfilterimage.png')
}

  function modelLoaded()
  {
    console.log('Pose Net is inshiated');
  }

function gotPoses(results)
{
  if (results.lenghth > 0)

{
  lipsX = results[0].pose.nose.x - 25;
  lipsY = results[0].pose.nose.y + 15
}
}
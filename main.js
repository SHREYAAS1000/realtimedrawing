function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    video = createCapture(VIDEO);
    video.size(550,500);

poseNet = ml5.poseNet(video, modeLoaded);

poseNet.on("pose",gotposes)

}

function draw()
{
    background("#0000FF")
}

function modeLoaded()
{
    console.log("poseNet is Loaded")
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}
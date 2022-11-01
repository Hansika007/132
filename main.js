img = "";
status1 = "";
 
function preload()
{
    img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640 , 440);
    canvas.center();
    objectDetector =ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML= "Status : Object Detecting";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    fill("#0000FF");
    text("Cat", 320, 120);
    noFill();
    stroke("#0000FF");
    rect(300, 90, 270, 320 );
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error , result)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(result);
    }
}
  
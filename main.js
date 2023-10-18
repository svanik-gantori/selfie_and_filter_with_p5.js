function preload()
{

}

function setup()
{
    canvas=createCanvas(400,300);
    canvas.position(50,200)
    video=createCapture(VIDEO);
    video.hide();

    tint_color="";

}

function draw()
{
    image(video,0,0,400,300);
    tint(tint_color);
}

function take_snapshot()
{
    save('mypicture.png');
}

function filter_picture()
{
    tint_color=document.getElementById('color_name').value;
}

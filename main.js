function preload(){
}
function setup(){
    canvas=createCanvas(640,480)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()

    tint_color=""

}
function draw(){
  image(video,0,0,648,480)  
  tint(tint_color)
  ellipse(10, 15, 55, 55);
  ellipse(311, 15, 55, 55);
  ellipse(630, 15, 55, 55);
  ellipse(311, 422, 55, 55);
  ellipse(10, 422, 55, 55);
  ellipse(630, 422, 55, 55);
  stroke(0,0,0)
  fill(255,255,0)
}
function take_snapshot(){
    save("MyfilterSelfie.png")
}
function filter_color(){
  tint_color=document.getElementById("colour_name").value
}
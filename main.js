img ="";
status ="";
function setup(){
    canvas = createCanvas(640 , 420);
    canvas.center();
    object_detecter =ml5.object_detecter('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML='Status :Detecting objects';
}
function preload(){
    img= loadImage('dog_cat.jpg');
}
function modelLoaded(){
    console.log('ModelLoaded');
    status = true;
    object_detecter.detect(img , gotResults);
}
function draw(){
image(img, 0 ,0 ,640 ,420);
fill('#FF0000');
text('dog' ,45 ,75)
noFill();
stroke('#FF0000');
rect(30 ,60 ,450 ,350);

fill('#FF0000');
text('cat' ,320 ,120);
noFill();
stroke('#FF0000');
rect(300 ,90 ,270 ,320);
}
function gotResults(error ,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
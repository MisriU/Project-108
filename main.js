Webcam.set({
    width:350, height:300, image_format:'png', png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Gkowu_bQh/', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
 }

 function identify_image(){
    img = document.getElementById('image');
    classifier.classify(img, gotResult);
 }

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        document.getElementById("object_name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
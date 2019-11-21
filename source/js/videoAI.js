var video;
var label = 'loading model';
var currentPrediction;
var classifier;

function setup(){
    var width  = 640;
    var height = 480;
    var x = ((windowWidth - width) / 2);
    var y = (windowHeight - height) / 2;
    var cnv = createCanvas(width, height);

    background(51);
    video = createCapture(VIDEO);
    //classifier = ml5.imageClassifier('MobileNet', video, modelReady);
    video.hide();
    cnv.position(x, 0);
}

function draw(){
    image(video, 0, 0);
}

function modelReady() {
  console.log('Model is ready!!!');
  classifier.load('model.json', customModelReady);
  classifier.predict(gotResults);
}

function customModelReady(){
  console.log('Custom Model is ready!!!');
  label = 'model ready';
  classifier.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {
      console.error(error);
    } else {
      //console.log(results);
      label = results[0].label;
      classifier.predict(gotResults);
    }

}

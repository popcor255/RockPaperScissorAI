/** Init the model for image recognition
 * @param  {object} classifier This object loads mobilenet
 * @param  {String} imageModelURL url to retrained tensorflow.js model
 * @param  {object} video HTML video player
 * @param {object} flippedvideo practical way to deal with same images with different direction
 * @param {string} label The label with highest percent confidence from the model
 */
// Classifier Variable
var classifier;
// Model URL
var imageModelURL = 'https://teachablemachine.withgoogle.com/models/3R3d1DBn/';
//var imageModelURL = 'https://teachablemachine.withgoogle.com/models/H5UH_cjV/';

// Video
var video;
var flippedVideo;
// To store the classification
var label = "";

// fetch the tensorflow.js model
/** preload the tensorflow model
 * @param  {function} preload fetches and loades the model in the ml5.js library
 */
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

/** setup the webcam and show camera to the user
 * @param  {number} width The width of HTML DOM canvas 
 * @param  {number} height The height of HTML DOM canvas
 * @param  {number} x The x position of the canvas
 * @param  {number} y the y position of the canvas
 * @param  {object} video the object that fetches media from webcam
 * @param  {function} classifyVideo function that does image recognition
 */

function setup() {
  var width  = 640 / 2;
  var height = 480 / 2;
  var x = ((windowWidth - width) / 2);
  var y = (windowHeight - height) / 2;
  var cnv = createCanvas(width, height);
  cnv.position(x, 0);

  // Create the video
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

/** draws to the canvas 60FPS a second
 * @param  {function} background fill the canvas with the color black on the first few frames
 * @param  {function} image draw the image in the correct orientation
 * @param  {function} fill pick the color of the next thing that will be drawn. (Text, Lines, Shapes ... etc.)
 * @param  {function} textSize centers the text to the center
 * @param  {function} text draws the label onto the canvas
 */

 function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

/** Get a prediction for the current video frame
 * @param  {object} flippedVideo flip video again for library (redundant should remove)
 * @param  {function} classifier.classify classify image
 * @param  {function} gotResult callback function that renders result onto DOM element player_move
 */
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}
/** renders result onto DOM element player_move
 * @param  {object} error check for any errors from p5.js library
 * @param  {function} classifyVideo calls this function as an infinite loop to keep classifying. I Know lazy, but it gets the job done.
 */
// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  document.getElementById("player_move").innerText = label;
  classifyVideo();
}

/** Getter for Image Classifier Label for Player Move
 */
function getPlayerMove(){
  return label;
}

//pseudo code"

//you have 60 seconds to lead the herds and
//you have to avoid obtacles on the way.
//2D game.
//jump over poachers, train lines, uncovered wells, road building.
//something to display the score. every jump is recorded.
//if you fall is gameover.
//alert box: play again? + show total score.

//coding logic:
//create the image: canvas, img etc.
//create event: press space or click to jump?
//module pattern to create game objects?
//audio file for game music.
//click to start game?
//when there is a jump, add 1 to the score.
//display score.

//problems:
//how to create the animation character..google
//how to make it jump..interactive with collision.
//how to define the gravity.
//how to create object obtacles.
//how to make it move. event...
//make the background move. gif
//.position()  .offset()

//click events,


//pesudo code:
//1)one click or type event,
//2)time interval to start the loop
//3)loop through the boxes, reverse?
//4)each loop show a different colour and hide it.
//5)and loop back.?

//challenge will be the timing of my functions being called? callbacks? setup scope.

//make a click event for box6. //that click must be able to access the loop

//click change color to black.
//read about time interval and show/hide
let $div;

$(() => {

  const $box = $('body');
  const $box6 = $('.box');
  // const $obtacle = $('.obtacles');

  // const $obtacle = $('.obtacle');
  $box.on('click', jump);


  // setInterval(function () {

  function jump() {
    $box6.animate({ 'bottom': '300'  }, 'slow', drop);
  }
  function drop() {
    $box6.animate({ 'bottom': '0' });
  }

  // $obtacle.on('click', sideway);

  // setInterval(sideway, 1000);

// setInterval(sideway,speed);


  setInterval(createobtacles, 3000);

  function createobtacles() {
    const $box = $('<div class="obtacles2"></div>');
    $('body').append($box);
    animateBox($box);
  }

  function animateBox($box) {
    $box.animate({ 'right': '2500' }, 5000);
  }






});

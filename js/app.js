
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

$(() => {


  // const $box = $('#box6');
  //
  //
  // $box.on('click', function() {
  //  console.log('clicked');
  // });

const $box = $('.box6');
$box.on('click', jump);

function jump() {
    $box.animate({'left': '+=100px' },'fast' );
}


// function jump() {
//     // const $wrapper = $('div');
//     console.log(jQuery.isPlainObject($box));
//     //  $wrapper.show();
//
// }

  // const $wrapper = $('li');
  // for (var i = 5; i >= 0; i--)


// if ($wrapper[i] === 3) {




  // const $wrapper = $('.wrapper');
  // $wrapper.hide( 'slow', 'swing');





});

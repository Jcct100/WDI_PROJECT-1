

$(() => {

  let counter = 0;
  let lives = 3;
  let jumping;
  let time= 30;

  const $click = $('body');
  const $PlayerBox = $('.box');
  const $reset = $('.restart');
  const $time =  $('.timer');
  const $congrat = $('.congrat');
  const $level2 = $('.level2');
  let currentobtacle = $('<div class="obstacle">&#128293;</div>');

  $congrat.hide();
  $level2.hide();

  //play music
  // $window.onload();
  //
  // function audio() {
  //
  // }

  //reset the game
  $reset.on('click', reset);

  function reset() {
    lives = 3;
    time = 30;
    $time.html(time);
    $PlayerBox.show();
    $reset.hide();
    // setInterval(timer);
    boxInterval = setInterval(createobtacles, 5000);
  }

  //set timer
  // let time = 30;
  const timer = setInterval(() => {
    time--;
    $time.html(time);
    checkValue();
  }, 1000);


  function checkValue() {
    if (time === 15 ) {
      // clearInterval(boxInterval);
      currentobtacle = $('<div class="obstacle2">&#128293;</div>');
      // $level2.show();
      boxInterval = setInterval(createobtacles, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      setInterval(timer);
      clearInterval(boxInterval);
      setInterval(finishline,3000);
      currentobtacle.hide();
    }
  }

  function finishline() {
    $congrat.show();
  }

  //make PlayerBox jump
  $click.on('keydown', jump);

  function jump(e) {
    if (e.keyCode !== 32 || jumping) return false;
    jumping = true;

    $PlayerBox.animate({
      'bottom': '200'
    }, 'slow', 'swing', drop);
  }

  function drop() {
    $PlayerBox.animate({
      'bottom': '0'
    }, 1000, () => {
      jumping = false;
    });
  }

  // alert message after jump
  function PoPupMessage() {
    const Messages = [ 'message 1', 'message 2','message 3','message 4' ];
    const i = Math.floor(Math.random()*Messages.length);
    const $message = $('.message').show();
    $message.text(Messages[i]);
    setTimeout(() => {
      $('.message').hide();
    }, 3000);
  }

  //create new obtacles
  let boxInterval = setInterval(createobtacles, Math.floor(Math.random() * 3000) + 1000);

  function createobtacles() {
    const $newObtacle = currentobtacle;
    console.log($newObtacle);
    $newObtacle.css('right', '-300px');
    $('.game').append($newObtacle);
    animateBox($newObtacle);
  }

  function animateBox($newObtacle) {
    $newObtacle.animate({
      'right': `${$('body').width()*1.5}`
    }, {
      duration: 3000,
      step: function() {
        if (collisions($PlayerBox, $newObtacle)) {
          console.log('game over');
          // alert('game over')
          $newObtacle.remove();
          lives -=1;
          if (lives === 0) {
            $PlayerBox.hide();
            $reset.show();
            clearInterval(boxInterval);
            clearInterval(timer);
          }
        }
      },
      complete: function() {
        $newObtacle.remove();
        counter +=1;
        if (counter % 3 === 0 && lives > 0) {
          PoPupMessage();
        }
      }

    });

    function collisions($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
    }
  }
});

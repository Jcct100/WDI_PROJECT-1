

$(() => {

  let counter = 0;
  let lives = 3;
  let jumping;
  let time= 60;
  let stop;
  let timer;

  const $click = $('body');
  const $PlayerBox = $('.box');
  const $reset = $('.restart');
  const $time =  $('.timer');
  // let currentobtacle = $('<div class="obstacle">&#128293;</div>');
  const $heart1 = $('.heart1');
  const $heart2 = $('.heart2');
  const $heart3 = $('.heart3');
  timer = setInterval(countdown, 1000);

  // background music
  const audio = new Audio('Audio/Brother_Jack.mp3');
  const crash = new Audio('Audio/Crash_Metal_Sweetener_Distant.mp3');
  audio.play();

  //reset the game
  $reset.on('click', reset);

  function reset() {
    currentobtacle = $('<div class="obstacle">&#128293;</div>');
    stop = false;
    lives = 3;
    time = 60;
    $time.html(time);
    $heart1.show();
    $heart2.show();
    $heart3.show();
    $PlayerBox.show();
    $reset.hide();
    timer = setInterval(countdown, 1000);
    if (boxInterval) clearInterval(boxInterval);
    boxInterval = setInterval(createobtacles, 5000);
  }

  function countdown() {
    time--;
    $time.html(time);
    checkValue();
  }

  function checkValue() {
    if
    // (time === 30 ) {
    //   currentobtacle = $('<div class="obstacle2">&#128293;</div>');
    //   if (boxInterval) clearInterval(boxInterval);
    //   boxInterval = setInterval(createobtacles, 1000);
    // } else if
    (time === 0) {
      clearInterval(timer);
      setInterval(timer);
      clearInterval(boxInterval);
      // currentobtacle.hide();
      $reset.show();
    }
  }

  //make PlayerBox jump
  $click.on('keydown', jump);

  function jump(e) {
    if (e.keyCode !== 32 || jumping) return false;
    jumping = true;

    $PlayerBox.animate({
      'bottom': '300'
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
    const Messages = [
      'UK’s legal ivory market has been used as a cover for trade in illegal ivory and some shipments are destined for Asia ',
      'Around 20,000 African elephants are killed by poachers each year for their ivory tusks.',
      'Every day, an elephant is poached in Africa every 26 minutes.'
    ];
    const i = Math.floor(Math.random()*Messages.length);
    const $message = $('.message').show();
    $message.text(Messages[i]);
    setTimeout(() => {
      $('.message').hide();
    }, 10000);
  }

  //create new obtacles
  let boxInterval = setInterval(createobtacles, 4000);
  // Math.floor(Math.random() * 3000) + 1000

  function createobtacles() {
    // stop = false;
    // const $newObtacle = currentobtacle;
    const $newObtacle = $('<div class="obstacle">&#128293;</div>')
    $newObtacle.css('right', '0px');
    $('.game').append($newObtacle);
    animateBox($newObtacle);
  }

  function animateBox($newObtacle) {
    $newObtacle.animate({
      'right': `${$('body').width()}`
    }, {
      duration: 3000,
      step: function() {
        if (collisions($PlayerBox, $newObtacle) && !stop) {
          // stop = true;
          console.log('collision');
          $(this).stop().remove();
          lives -=1;
          crash.play();
          if (lives===2) {
            $heart2.hide();
          } else if (lives === 1) {
            $heart3.hide();
          } else if (lives === 0) {
            stop = false;
            console.log('HI');
            $PlayerBox.hide();
            $reset.show();
            $heart1.hide();
            clearInterval(boxInterval);
            clearInterval(timer);
          }
        }
      },
      complete: function() {
        console.log('animation completed');
        $(this).stop().remove();
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

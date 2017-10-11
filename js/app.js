
//add different size divs at different speed //different level
//landing page, audio, images, emoji adn style tomorrow or today if finished.

//different levels.
//1)add a timer. reset timer is not working.
//2)when timer is under 20 then add flying objects.
//3)and when timer is over 30 seconds then add bigger divs.

$(() => {

  let counter = 0;
  let lives = 3;
  let jumping;

  // let activeJump = false;
  const $click = $('body');
  const $PlayerBox = $('.box');
  const $reset = $('button');
  const $time =  $('.timer');


  //reset the game
  $reset.on('click', reset);

  function reset() {
    lives = 3;
    time = 30;
    $time.html(time);
    $PlayerBox.show();
    $reset.hide();
    boxInterval = setInterval(createobtacles, 5000);
    setInterval(timer);
  }

  // when time is 20 add level 2
  // if (time === 20) {
  //   setInterval(createobtacles2, 5000);
  // }

  //set timer
  let time = 30;
  const timer = setInterval(() => {
    time --;
    $time.html(time);
    checkValue();
  }, 1000);

  function checkValue() {
    if (time < 30 ) {
      console.log('hi');
    }  else if (time === 0) {
      console.log('ok');
      clearInterval(timer);
    }
  }

  //make PlayerBox jump

  $click.on('keydown', jump);

  function jump(e) {
    if (e.keyCode !== 32 || jumping) return false;
    jumping = true;

    // activeJump = true
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
    // activeJump = false
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
  // createobtacles();

  function createobtacles() {
    const $newObtacle = $('<div class="obtacle"></div>');
    $newObtacle.css('right', '-300px');
    $('body').append($newObtacle);
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
        if (counter % 3 === 0 ) {
          PoPupMessage();
        }
      }

    });


  //   let boxInterval2 = setInterval(createobtacles2, 5000);
  //   // createobtacles();
  //
  //   function createobtacles2() {
  //     const $newObtacle2 = $('<div class="obtacle2"></div>');
  //     $('body').append($newObtacle2);
  //     animateBox($newObtacle2);
  //   }
  //
  //   function animateBox($newObtacle2) {
  //     $newObtacle2.animate({
  //       'right': `${$('body').width()}`
  //     }, {
  //       duration: 6000,
  //       step: function() {
  //         if (collisions($PlayerBox, $newObtacle2)) {
  //           console.log('game over');
  //           // alert('game over')
  //           $newObtacle2.remove();
  //           lives -=1;
  //           if (lives === 0) {
  //             $PlayerBox.hide();
  //             $reset.show();
  //             clearInterval(boxInterval);
  //             clearInterval(timer);
  //           }
  //         }
  //       },
  //       complete: function() {
  //         $newObtacle2.remove();
  //         counter +=1;
  //         if (counter % 3 === 0 ) {
  //           PoPupMessage();
  //         }
  //       }
  //
  //     });
  //
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
  //
  }

//when click to reset game

});

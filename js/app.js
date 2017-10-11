
//add different size divs at different speed //different level
//landing page, audio, images, emoji adn style tomorrow or today if finished.


$(() => {

  // let activeJump = false;
  const $click = $('body');
  const $PlayerBox = $('.box');
  let counter = 0;
  let lives = 3;
  const $reset = $('button');


  // let startgame = true;
  //
  // while (startgame) {
  //   jump();
  //   drop();
  //   PoPupMessage();
  //   createobtacles();
  //   animateBox();
  //   collision();
  // }
  //
  $reset.on('click', reset);
  function reset() {
    let lives = 3;
    $PlayerBox.show();
    $reset.hide();
    // startgame = false;
  }

  $click.on('click', jump);

  //make PlayerBox jump

  function jump() {
    // activeJump = true
    $PlayerBox.animate({ 'bottom': '300'  }, 'slow', drop);
    counter +=1;
    console.log(counter);
    if (counter % 3 === 0) {
      console.log('show message now');
      PoPupMessage();
    }
  }
  function drop() {
    $PlayerBox.animate({ 'bottom': '0' });
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

  setInterval(createobtacles, 3000);
  createobtacles();

  function createobtacles() {
    const $newObtacle = $('<div class="obtacle"></div>');
    $('body').append($newObtacle);
    animateBox($newObtacle);
  }

  function animateBox($newObtacle) {
    $newObtacle.animate({
      'right': `${$('body').width()}`
    }, {
      duration: 5000,
      step: function() {
        if (collisions($PlayerBox, $newObtacle)) {
          console.log('game over');
          // alert('game over')
          $newObtacle.remove();
          lives -=1;
          if (lives === 0) {
            $PlayerBox.hide();
            $reset.show();
          }
        } else {
          // PoPupMessage();
        }
      },
      complete: function() {
        $newObtacle.remove();
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





//when click to reset game


});

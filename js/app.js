// let $newObtacles;
// let obtaclePos;

$(() => {

  let activeJump = false;

  const $click = $('body');
  const $PlayerBox = $('.box');
  
  $click.on('click', jump);

  //make PlayerBox jump

  function jump() {
    // activeJump = true
    $PlayerBox.animate({ 'bottom': '300'  }, 'slow', drop);
  }
  function drop() {
    $PlayerBox.animate({ 'bottom': '0' });
    // activeJump = false
  }

  //Create New Obtacles every 3 seconds

  setInterval(createobtacles, 3000);

  function createobtacles() {
    const $newObtacle = $('<div class="obtacle"></div>');
    $('body').append($newObtacle);
    // console.log(newobtaclepos + 'im the box position');
    animateBox($newObtacle);
  }

  function animateBox($newObtacle) {
    $newObtacle.animate({
      'left': '-800'
    }, {
      duration: 5000,
      step: function() {
        if (collisions($PlayerBox, $newObtacle)) {
          console.log('game over');
          $newObtacle.remove();
        }
      }

    });

  }

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

});


$(document).ready(function () {
  //pic wich player goes first
  var id;
  var player = parseInt(getRandomNumber(1,3));
  console.log('player ' + player);

  //if else statement for player turns
$('.square').click(function () {
  if (player === 1) {
      id = this.id;
      $('#'+id+'').text('X');
      player = 2;
  }else if (player === 2) {
      id = this.id;
      $('#'+id+'').text('X');
      player = 1;
    });
  }//end of function


  // random number genarator function
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
}); //end of jquery function

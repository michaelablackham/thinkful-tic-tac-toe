$(function() {
  'use strict';

  var state = {
    turnX: true
  }

  var x = '<i class="fa fa-times" aria-hidden="true"></i>';
  var o = '<i class="fa fa-circle-o" aria-hidden="true"></i>';

  console.log("tic tac toe")

  function squareClick(state) {
    $('.game-container .js-open-square').click(function(){
      if (state.turnX === true) {
        state.turnX = false;
        $(this).append(x)
      }
      else {
        state.turnX = true;
        $(this).append(o)
      }
      console.log(state);
    });
  }


  squareClick(state);

});

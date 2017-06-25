$(function() {
  'use strict';

  var state = {
    turnX: true,
    currentClick: 0,
    maxClick: 6
  }

  var x ='<i class="fa fa-times" aria-hidden="true"></i>';
  var o ='<i class="fa fa-circle-o" aria-hidden="true"></i>';

  // var WINNERS = {
  //   rowTop: '.row1',
  //   rowMiddle: '.row2',
  //   rowBottom: '.row3',
  //   col1: '.row .square(0)',
  //   col2: ,
  //   col3: ,
  //   diagNeg: ,
  //   diagPos:
  // }


  function squareClick(state) {
    $('.game-container .square').click(function(){
      if ($(this).hasClass('js-open-square')) {
        updateState(state);
        renderClick(state);
        $(this).removeClass('js-open-square');
        console.log(state)
      }
    });
  }

  function renderClick(state) {
    if (state.turnX === true) {
      $(event.target).html(x).addClass('x-filled');
    }
    else {
      $(event.target).html(o).addClass('o-filled');
    }
  }

  function updateState(state) {
    if (state.currentClick < state.maxClick) {
      state.currentClick++;
      if (state.turnX === true) {
        state.turnX = false;
      }
      else {
        state.turnX = true;
      }
    }
    else if (state.currentClick === state.maxClick){
      alert("you're out of moves!")
    }
  }

  squareClick(state);

});

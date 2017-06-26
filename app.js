$(function() {
  'use strict';

  var state = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    turnO: false,
    currentClick: 0,
    maxClick: 8
  }

  function isWinner(state){
    var firstColumn = true;
    results = []
    var results = [
      [
        state.board[0][0] && state.board[0][1] && state.board[0][2]
        ||
        !state.board[0][0] && !state.board[0][1] && !state.board[0][2],

        state.board[0][0] && state.board[0][1] && state.board[0][2]
        ||
        !state.board[0][0] && !state.board[0][1] && !state.board[0][2],

        state.board[0][0] && state.board[0][1] && state.board[0][2]
        ||
        !state.board[0][0] && !state.board[0][1] && !state.board[0][2]
      ],
      [
        state.board[1][0] && state.board[1][1] && state.board[1][2]
        ||
        !state.board[1][0] && !state.board[1][1] && !state.board[1][2],

        state.board[1][0] && state.board[1][1] && state.board[1][2]
        ||
        !state.board[1][0] && !state.board[1][1] && !state.board[1][2],

        state.board[1][0] && state.board[1][1] && state.board[1][2]
        ||
        !state.board[1][0] && !state.board[1][1] && !state.board[1][2]
      ],
      [
        state.board[2][0] && state.board[2][1] && state.board[2][2]
        ||
        !state.board[2][0] && !state.board[2][1] && !state.board[2][2],

        state.board[2][0] && state.board[2][1] && state.board[2][2]
        ||
        !state.board[2][0] && !state.board[2][1] && !state.board[2][2],

        state.board[2][0] && state.board[2][1] && state.board[2][2]
        ||
        !state.board[2][0] && !state.board[2][1] && !state.board[2][2]
      ],
    ]
  }

  var x ='<i class="fa fa-times" aria-hidden="true"></i>';
  var o ='<i class="fa fa-circle-o" aria-hidden="true"></i>';

  function squareClick(state) {
    $('.game-container .square').click(function(){
      if (!$(this).hasClass('js-open-square')) return;

      updateState(state);
      renderClick(state);
      $(this).removeClass('js-open-square');
      console.log(state);
    });
  }

  function renderClick(state) {
    if (state.turnO === true) {
      $(event.target).html(x).addClass('x-filled');
    }
    else {
      $(event.target).html(o).addClass('o-filled');
    }
  }

  function updateState(state) {
    if (state.currentClick < state.maxClick) {
      state.currentClick++;
      state.turnO = !state.turnO;

      // if (state.turnO === true) {
      //   state.turnO = false;
      // }
      // else {
      //   state.turnO = true;
      // }
    }
    if (state.currentClick === state.maxClick){
      alert("you're out of moves!")
    }
  }

  squareClick(state);

});

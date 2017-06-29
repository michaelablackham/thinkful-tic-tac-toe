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
    maxClick: 9
  }

  // function isWinner(state){
  //   var firstColumn = true;
  //   results = []
  //   var results = [
  //     [
  //       state.board[0][0] && state.board[0][1] && state.board[0][2]
  //       ||
  //       !state.board[0][0] && !state.board[0][1] && !state.board[0][2],
  //
  //       state.board[0][0] && state.board[0][1] && state.board[0][2]
  //       ||
  //       !state.board[0][0] && !state.board[0][1] && !state.board[0][2],
  //
  //       state.board[0][0] && state.board[0][1] && state.board[0][2]
  //       ||
  //       !state.board[0][0] && !state.board[0][1] && !state.board[0][2]
  //     ],
  //     [
  //       state.board[1][0] && state.board[1][1] && state.board[1][2]
  //       ||
  //       !state.board[1][0] && !state.board[1][1] && !state.board[1][2],
  //
  //       state.board[1][0] && state.board[1][1] && state.board[1][2]
  //       ||
  //       !state.board[1][0] && !state.board[1][1] && !state.board[1][2],
  //
  //       state.board[1][0] && state.board[1][1] && state.board[1][2]
  //       ||
  //       !state.board[1][0] && !state.board[1][1] && !state.board[1][2]
  //     ],
  //     [
  //       state.board[2][0] && state.board[2][1] && state.board[2][2]
  //       ||
  //       !state.board[2][0] && !state.board[2][1] && !state.board[2][2],
  //
  //       state.board[2][0] && state.board[2][1] && state.board[2][2]
  //       ||
  //       !state.board[2][0] && !state.board[2][1] && !state.board[2][2],
  //
  //       state.board[2][0] && state.board[2][1] && state.board[2][2]
  //       ||
  //       !state.board[2][0] && !state.board[2][1] && !state.board[2][2]
  //     ],
  //   ]
  //
  //   var hasAWinner = results.reduce(function (acc, val) {
  //     return acc || val[0] || val[1] || val[2]
  //   }, false);
  // }

  var x ='<i class="fa fa-times" aria-hidden="true"></i>';
  var o ='<i class="fa fa-circle-o" aria-hidden="true"></i>';


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
    }
  }

  function updateBoard(state) {
    var rowIndex = $(event.target).parent().index();
    var squareIndex = $(event.target).index();
    state.board[rowIndex][squareIndex] = state.turnO;
    console.log(state)

    // if ( state.board[rowIndex][0] && state.board[rowIndex][1] && state.board[rowIndex][2] ) {
    //   console.log("0 wins!")
    //   $(event.target).parent().addClass("winner")
    // }
  // if ( state.board[rowIndex][0] && state.board[rowIndex][1] && state.board[rowIndex][2]) {
  //     console.log(!state.board[rowIndex][0])
  //     $(event.target).parent().addClass("winner")
  //   }
  }

  function boardCheck(state) {
    // if (state.currentClick === state.maxClick){
    //   alert("you're out of moves!")
    // }
  }

  function isWinner(state) {
    var rowIndex = $(event.target).parent().index();
    var squareIndex = $(event.target).index();
    var boardLength = state.board.length;

    if ( state.board[rowIndex][0] && state.board[rowIndex][1] && state.board[rowIndex][2]) {
      console.log("0 wins!")
      $(event.target).parent().addClass("winner")
    }
    // else if ( !state.board[rowIndex][0] && !state.board[rowIndex][1] && !state.board[rowIndex][2]) {
    //   console.log("x wins!")
    //   $(event.target).parent().addClass("winner")
    // }
    else if ( state.board[0][squareIndex] && state.board[1][squareIndex] && state.board[2][squareIndex] ) {
      console.log("0 wins!", squareIndex)
      for(var i=0; i < boardLength; i++){
        $('.row').eq(i).find('.square').eq(squareIndex).addClass("winner");
      };
    }
  }

  $('.game-container .square').click(function(){
    if (!$(this).hasClass('js-open-square')) return;
    updateBoard(state);
    updateState(state);
    renderClick(state);
    isWinner(state);
    $(this).removeClass('js-open-square');
  });

});

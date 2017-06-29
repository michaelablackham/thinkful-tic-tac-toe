$(function() {
  'use strict';

  var state = {
    board: [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ],
    turnO: false,
    currentClick: 0,
    maxClick: 9,
    gameOver: false
  }

  var x ='<i class="fa fa-times" aria-hidden="true"></i>';
  var o ='<i class="fa fa-circle-o" aria-hidden="true"></i>';

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

  function updateState(state) {
    if (state.currentClick < state.maxClick) {
      state.currentClick++;
      state.turnO = !state.turnO;
    }
  }

  function updateBoard(state, rowIndex, squareIndex) {
    state.board[rowIndex][squareIndex] = state.turnO;
  }

  function boardCheck(state) {
    // if (state.currentClick === state.maxClick){
    //   alert("you're out of moves!")
    // }
  }

  function isWinner(state, rowIndex, squareIndex, boardLength) {
    console.log(
      state.board[rowIndex][0] + ',' + state.board[rowIndex][1] + ',' + state.board[rowIndex][2]
    )

    if ( state.board[rowIndex][0] && state.board[rowIndex][1] && state.board[rowIndex][2]) {
      $(event.target).parent().addClass("winner");
      state.gameOver = true;
      gameOver(state);
    }
    // else if ( state.board[rowIndex][0] && state.board[rowIndex][1] && state.board[rowIndex][2] == false) {
    //   $(event.target).parent().addClass("winner");
    //   state.gameOver = true;
    //   gameOver(state);
    // }
    else if ( state.board[0][squareIndex] && state.board[1][squareIndex] && state.board[2][squareIndex] ) {
      for(var i=0; i < boardLength; i++){
        $('.row').eq(i).find('.square').eq(squareIndex).addClass("winner");
      };
    }
    else if ( state.board[rowIndex][squareIndex] && state.board[(rowIndex+1)][(squareIndex+1)] && state.board[(rowIndex-1)][(squareIndex-1)] && (state.board[(rowIndex+2)][(squareIndex+2)] || state.board[(rowIndex-2)][(squareIndex-2)]) ) {
      console.log("diagonal")
    }

  }

  function gameOver(state) {
    if (state.gameOver) {
      console.log("game over")
    }
  }

  //RENDER
  function renderClick(state) {
    state.turnO === true ? $(event.target).html(x) : $(event.target).html(o);
  }

  //EVENT LISTENERS
  $('.game-container .square').click(function(){
    if (!$(this).hasClass('js-open-square')) return;
    var rowIndex = $(event.target).parent().index();
    var squareIndex = $(event.target).index();
    var boardLength = state.board.length;
    updateBoard(state, rowIndex, squareIndex);
    updateState(state);
    renderClick(state);
    isWinner(state, rowIndex, squareIndex, boardLength);
    $(this).removeClass('js-open-square');
  });

});

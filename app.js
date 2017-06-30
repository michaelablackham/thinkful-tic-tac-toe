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

  // function hasWinnerOnRow(state, row) {
  //   return hasWinner(state.board[row])
  // }

  function rowWinner(state, rowIndex, squareIndex, boardLength) {
    var stateRow = state.board[rowIndex];
    if (
      (stateRow[0] && stateRow[1] && stateRow[2]) ||
      (stateRow[0] === false && stateRow[1] === false && stateRow[2] === false)
    ) {
      $(event.target).parent().addClass("winner");
      state.gameOver = true;
      gameOver(state);
    }
    else { null }
  }

  function columnWinner(state, rowIndex, squareIndex, boardLength) {
    if (
      (state.board[0][squareIndex] && state.board[1][squareIndex] && state.board[2][squareIndex]) ||
      (state.board[0][squareIndex] === false && state.board[1][squareIndex] === false && state.board[2][squareIndex] === false)
    ) {
      for(var i=0; i < boardLength; i++){
        $('.row').eq(i).find('.square').eq(squareIndex).addClass("winner");
      };
      state.gameOver = true;
      gameOver(state);
    }
    else { null }
  }

  function diagonalWinner(state, rowIndex, squareIndex, boardLength) {
    if (
      (state.board[0][0] && state.board[1][1] && state.board[2][2]) ||
      (state.board[0][0] === false && state.board[1][1] === false && state.board[2][2] === false) ||
      (state.board[0][2] && state.board[1][1] && state.board[2][0]) ||
      (state.board[0][2] === false && state.board[1][1] === false && state.board[2][0] === false)
    ) {
      console.log("diagonal");
      state.gameOver = true;
      gameOver(state);
    }
    else { null }

  }



  function hasWinner(values) {
    return (
      (values[0] && values[1] && values[2])
      ||
      (values[0] === false && values[1] === false && values[2] === false)
    )
      ? values[0]
      : null
  }

  function isWinner(state, rowIndex, squareIndex, boardLength) {
    rowWinner(state, rowIndex, squareIndex, boardLength);
    columnWinner(state, rowIndex, squareIndex, boardLength);
    diagonalWinner(state, rowIndex, squareIndex, boardLength);

  }

  function gameOver(state) {
    if (state.gameOver) {
      $('.square').removeClass('js-open-square');
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

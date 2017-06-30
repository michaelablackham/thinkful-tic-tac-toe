$(function() {
  'use strict';

//STATE MANAGEMENT
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

  //update the STATE variable on click
  function updateState(state, rowIndex, squareIndex) {
    if (state.currentClick < state.maxClick) {
      state.currentClick++;
      state.turnO = !state.turnO;
    }
    state.board[rowIndex][squareIndex] = state.turnO;
  }

  function winner(state) {
    state.gameOver = !state.gameOver;
    gameOver(state);
  }

//RENDER
  // Check for row winners
  function rowWinner(state, rowIndex, squareIndex, boardLength) {
    var stateRow = state.board[rowIndex];
    if (
      (stateRow[0] && stateRow[1] && stateRow[2]) ||
      (stateRow[0] === false && stateRow[1] === false && stateRow[2] === false)
    ) {
      $(event.target).parent().addClass("winner");
      winner(state);
    }
    else { null }
  }

  // Check for column winners
  function columnWinner(state, rowIndex, squareIndex, boardLength) {
    if (
      (state.board[0][squareIndex] && state.board[1][squareIndex] && state.board[2][squareIndex]) ||
      (state.board[0][squareIndex] === false && state.board[1][squareIndex] === false && state.board[2][squareIndex] === false)
    ) {
      for(var i=0; i < boardLength; i++){
        $('.row').eq(i).find('.square').eq(squareIndex).addClass("winner");
      };
      winner(state);
    }
    else { null }
  }

  // Check for diagonal winners
  function diagonalWinner(state, rowIndex, squareIndex, boardLength) {
    if (
      (state.board[0][0] && state.board[1][1] && state.board[2][2]) ||
      (state.board[0][0] === false && state.board[1][1] === false && state.board[2][2] === false)
    ) {
      for(var i=0; i < boardLength; i++){
        $('.row').eq(i).find('.square').eq(i).addClass("winner");
      };
      winner(state);
    }
    else if (
      (state.board[0][2] && state.board[1][1] && state.board[2][0]) ||
      (state.board[0][2] === false && state.board[1][1] === false && state.board[2][0] === false)
    ) {
      var s=2;
      for(var r=0; r < boardLength; r++){
        $('.row').eq(r).find('.square').eq(s).addClass("winner");
        s=s-1;
      };
      winner(state);
    }
    else { null }
  }

  function winnerCheck(state, rowIndex, squareIndex, boardLength) {
    rowWinner(state, rowIndex, squareIndex, boardLength);
    columnWinner(state, rowIndex, squareIndex, boardLength);
    diagonalWinner(state, rowIndex, squareIndex, boardLength);
  }

  function renderClick(state) {
    state.turnO === true ? $(event.target).html(x) : $(event.target).html(o);
  }

  function gameOver(state) {
    if (state.gameOver) {
      $('.square').removeClass('js-open-square');
    }
  }

  //EVENT LISTENERS
  $('button.restart').click(function(){
    state.board= [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ],
    state.turnO= false;
    state.currentClick= 0;
    state.gameOver = !state.gameOver;
    $('.game-container .square').removeClass('winner').addClass('js-open-square').html("");
  });

  $('.game-container .square').click(function(){
    if (!$(this).hasClass('js-open-square')) return;
    var rowIndex = $(event.target).parent().index();
    var squareIndex = $(event.target).index();
    var boardLength = state.board.length;
    // updateBoard(state, rowIndex, squareIndex);
    updateState(state, rowIndex, squareIndex);
    renderClick(state);
    winnerCheck(state, rowIndex, squareIndex, boardLength);
    $(this).removeClass('js-open-square');
  });

});

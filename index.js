'use strict';

$(function() {
  let rpsArray = ['rock', 'paper', 'scissors'];

  function selectRandNum() {
    return Math.floor(Math.random() * 3);
  };

  $('#reset').on('click', function(e) {
    $('#choice').html('');
    $('#user_score').html(0);
    $('#comp_score').html(0);
    $('#result').html('');
  });

  $('#user_select').on('click', function(e) {
    if (e.target !== e.currentTarget) {
      let clickedItem = e.target;
      let compInput = selectRandNum();
      console.log('user input:',clickedItem.id);
      console.log('computer input:', compInput);
      switch (clickedItem.id) {
        case 'rock':
          if (compInput === 0) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('TIE');
            break;
          } else if (compInput === 1) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU LOSE!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#comp_score').html(score);
            break;
          } else {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU WIN!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#user_score').html(score);
            break;
          };
          case 'paper':
          if (compInput === 1) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('TIE');
            break;
          } else if (compInput === 2) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU LOSE!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#comp_score').html(score);
            break;
          } else {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU WIN!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#user_score').html(score);
            break;
          };
          case 'scissors':
          if (compInput === 2) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('TIE');
            break;
          } else if (compInput === 0) {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU LOSE!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#comp_score').html(score);
            break;
          } else {
            $('#choice').html(`You chose ${clickedItem.id}. I chose ${rpsArray[compInput]}.`);
            $('#result').html('YOU WIN!');
            let score = parseInt($('#comp_score').html());
            score += 1;
            $('#user_score').html(score);
            break;
          };
      }
    }
  });

});

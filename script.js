//+++++++damn global variable++++++++

var ranNum

//+++++++++functions++++++++++

function randomNumber(min, max) {
  ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log('Random Number: ' + ranNum);
};

function enableBtns() {
  $('#guessbtn').prop('disabled', $('#inptbx').val() === '');
  $('#clrbtn').prop('disabled', $('#inptbx').val() === '');
};

function userGuess() {
  $('#num-output').text($('#inptbx').val());
};

function resetFields() {
  $('#your-guess').text("Feelin' lucky punk?");
  $('#num-output').text($('#min-range').val() + ' - ' + $('#max-range').val());
  $('#fdbck').text('Make your best guess...');
};

function errorMsg() {
  var min = parseInt($('#min-range').val());
  var max = parseInt($('#max-range').val());
  $('#num-output').text('ERROR');
  $('#your-guess').text('stay above ' + min);
  $('#fdbck').text('stay under ' + max);
};

function newPhase() {
  var min = parseInt($('#min-range').val()) - 10;
  var max = parseInt($('#max-range').val()) + 10;
  $('#min-range').val(min);
  $('#max-range').val(max);
  resetFields();
  randomNumber(min, max);
};

function compareNumbers() {
  var parsedNum = parseInt($('#inptbx').val(), 10);
  console.log(parsedNum);
  if (parsedNum > ranNum) {
    $('#your-guess').text('Your last guess was:')
    $('#fdbck').text("that's too high")
  } else if (parsedNum < ranNum) {
    $('#your-guess').text('Your last guess was:')
    $('#fdbck').text("that's too low")
  } else if (parsedNum === ranNum) {
    $('#your-guess').text('')
    $('#num-output').text('BOOM!')
    $('#fdbck').text('')
    setTimeout(newPhase, 3000);
  }
};

function restrictInput() {
  var min = parseInt($('#min-range').val());
  var max = parseInt($('#max-range').val());
  var parsedNum = parseInt($('#inptbx').val(), 10);
  if (parsedNum > max || parsedNum < min || isNaN(parsedNum)) {
    $('#guessbtn').prop('disabled', true);
    $('#clrbtn').prop('disabled', true);
    errorMsg();
  } else {
    resetFields();
  }
};

// function minRange() {
//   if ($('#min-range').val() === ''){
//     $('#min-range').val('1')
//   } else {
//     $('#min-range').val()
//   }
// };

// function maxRange() {
//   if ($('#max-range').val() === ''){
//     $('#max-range').val('100')
//   } else {
//     $('#max-range').val()
//   }
// };

function paramSet() {
  if ($('#min-range').val() === ''){
    $('#min-range').val('1')
  } else {
    $('#min-range').val()
  }
  var min = parseInt($('#min-range').val());
  if ($('#max-range').val() === ''){
    $('#max-range').val('100')
  } else {
    $('#max-range').val()
  }
  var max = parseInt($('#max-range').val());
  console.log(max);
  $('#num-output').text(min + ' - ' + max);
  randomNumber(min, max);
};

function resetAll() {
  $('#inptbx').val('');
  $('#your-guess').text("Feelin' lucky punk?");
  $('#num-output').text('1 - 100');
  $('#fdbck').text('Make your best guess...');
  $('#min-range').val('1');
  $('#max-range').val('100');
  randomNumber(1, 100);
}

function clearClick() {
  $('#inptbx').val('');
  enableBtns();
};

function zeroState() {
  resetFields();
  paramSet();
  enableBtns();
};

function keyUp() {
  enableBtns();
  restrictInput();
};

function enterClick() {
  userGuess();
  compareNumbers();
  clearClick();
  enableBtns();
};

//++++++++Event Listeners++++++++

$(document).ready(paramSet());

$('#guessbtn').on('click', enterClick);

$('#clrbtn').on('click', clearClick);

$('#inptbx').on('keyup', keyUp);

$('#resetbtn').on('click', resetAll);

$('#param-btn').on('click', paramSet);


// //===========store things in variables===========
//
// //input from user
// var inputBox = document.getElementById('inptbx');
// //guess button
// var guessBtn = document.getElementById('guessbtn');
// //clear button
// var clearBtn = document.getElementById('clrbtn');
// //intro sentence
// var intro = document.getElementById('your-guess')
// //output number
// var outputNum = document.getElementById('num-output');
// //feedback sentence
// var feedBack = document.getElementById('fdbck');
// //reset button
// var resetBtn = document.getElementById('resetbtn');
// //user input min range
// var minRange = document.getElementById('min-range');
// //set min
// var min = 1;
// //user input max range
// var maxRange = document.getElementById('max-range');
// //set max
// var max = 100;
// //paramter button
// var paramBtn = document.getElementById('param-btn');
// //is assigned in random number function
// var ranNumber;
//
//
//
//
// //=============Event Listeners===============
//
//
// //on page load do these things
// window.addEventListener('load', function() {
//   zeroState();
// });
//
// //parameter button
// paramBtn.addEventListener('click', function() {
//  minMaxSet();
//  getRanNum(min, max);
//  outputNum.innerText = minRange.value + " - " + maxRange.value;
// });
//
// //on keyup check to see if number entered is within min/max range
// inputBox.addEventListener('keyup', function() {
//   minMaxEval();
//   toggleClear();
// });
//
// //on guessBtn click run function that compares
// guessBtn.addEventListener('click', function() {
//   // evalInput();
//   compare()
//   inputBox.value = '';
//   toggleClear();
//   minMaxEval();
// });
//
// //make clear button clear input field
// clearBtn.addEventListener('click', function() {
//   inputBox.value = '';
//   toggleClear();
//   minMaxEval();
// });
//
// //make reset button reset all inputs and generate new random number
// resetBtn.addEventListener('click', function() {
//   minRange.value = 1;
//   maxRange.value = 100;
//   zeroState();
//   minMaxSet();
// });
//
//
//
//
// //=============Functions=============
//
//
// //what page should be on load
// function zeroState() {
//   inputBox.value = '';
//   intro.innerText = "Feelin' lucky punk?";
//   outputNum.innerText = '1-100';
//   feedBack.innerText = 'Make your best guess...';
//   minRange.defaultValue = 1;
//   maxRange.defaultValue = 100;
//   getRanNum(1, 100);
// };
//
// //get random number function
// function getRanNum(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   ranNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log("Random Number: " + ranNumber);
// }
//
// //function that compares user input to random number and then output display feedback sentence based on comparison
// function compare() {
//   var parsdInpt = parseInt(inputBox.value);
//   outputNum.innerText = inputBox.value;
//   console.log('user input: ', parsdInpt)
//   if(parsdInpt === ranNumber) {
//     outputNum.innerText = 'BOOM!';
//     feedBack.innerText = '';
//     intro.innerText = '';
//     setTimeout(newPhase, 3000);
//   } else if(parsdInpt > ranNumber) {
//     intro.innerText = 'Your last guess was';
//     feedBack.innerText = 'That is too high';
//   } else if(parsdInpt < ranNumber) {
//     intro.innerText = 'Your last guess was';
//     feedBack.innerText = 'That is too low';
//   }
// }
//
// //on game when newPhase runs, sets new params
// function newPhase() {
//   intro.innerText = "Feelin' lucky again punk?";
//   feedBack.innerText = "Go ahead, make my day...";
//   var minPlus = parseInt(min) - 10;
//   var maxPlus = parseInt(max) + 10;
//   minRange.value = minPlus;
//   maxRange.value = maxPlus;
//   outputNum.innerText = minPlus + ' - ' + maxPlus;
//   getRanNum(minPlus, maxPlus);
//   console.log(minPlus + ' - ' + maxPlus)
//   min = minPlus;
//   max = maxPlus;
// }
//
// //input only accepts numbers within min/max
// function minMaxEval() {
//   var parsdInpt = parseInt(inputBox.value);
//   if ((parsdInpt < min) || (parsdInpt > max) || isNaN(parsdInpt)) {
//     guessBtn.disabled = true;
//   } else {
//     guessBtn.disabled = false;
//   }
// }
//
// //toggles clear button when input box is empty
// function toggleClear() {
//   if (inputBox.value !== '') {
//     clearBtn.disabled = false;
//   } else {
//     clearBtn.disabled = true;
//   }
// }
//
// //sets the min/max value to user input
// function minMaxSet() {
//   min = parseInt(minRange.value);
//   max = parseInt(maxRange.value);
// }

console.log(
  "If you're reading this check me out on Linkedin(click the word 'Randomizer')"
);

function randomize(array) {
  var randomNum = Math.floor(Math.random() * array.length);
  var result = array[randomNum];
  let pTag = document.getElementById('result');
  return (pTag.innerHTML = result);
}

function submitRandomizer(e) {
  e.preventDefault();
  let arrayWithTheOptions = [];

  let optionOne = document.getElementById('option-one').value;
  let optionTwo = document.getElementById('option-two').value;

  arrayWithTheOptions.push(optionOne, optionTwo);
  randomize(arrayWithTheOptions);
}

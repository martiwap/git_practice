var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

	var values= [];
	for(i=1; i<9; i++) {
		values.push(i);
		values.push(i);
	}
	return values;

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

	$game.find('*').remove();
	$.each(cardValues, function(key, value) {
		var item = $('<div class="card" data-value="' + value + '" data-color="test">' + value + '<div>');
		$game.append(item);
	 });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

	$card.css('background-color', '#ffffff');

	window.setTimeout( function(){ }, 2000);
	$card.data('value', $card.text());
	console.log($card.data('value'));
	$card.text('');
	//$card.text('1');

	
	   	
};
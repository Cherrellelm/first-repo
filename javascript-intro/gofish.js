// Go fish rules
//2-3 players, each player gets 7 cards (no jokers)
// 4+ players. each player gets 5 cards
//goal - to get 4 of a kind of any card
//card rank ace (high) to 2 (low)
//player playing can only ask for a card if they already have at least 1 of that rank
//if player asked doesn't have it they say "Go Fish!" and player who asked draws from what's left of the deck
/*If a player gets one or more cards of the named rank that was asked for, they are entitled to ask the same or another 
player for a card. The player can ask for the same card or a different one. So long as the player succeeds in getting cards 
(makes a catch), their turn continues. When a player makes a catch, they must reveal the card so that the catch is verified. 
If a player gets the fourth card of a book, the player shows all four cards, places them on the table face up in front of everyone, and plays again.
If the player goes fishing without "making a catch" (does not receive a card he asked for), the turn passes to the left.
The game ends when all thirteen books have been won. The winner is the player with the most books. During the game, if a 
player is left without cards, they may (when it's their turn to play), draw from the stock and then ask for cards of that rank. 
If there are no cards left in the stock, they are out of the game.

Ace - 14
King - 13
Queen - 12
Jack - 11
*/

let deltCards;
let playerDraw;

playerdraw = getRandomNumber (2,14);

console.log(`You picked up a ${playerDraw}`);



// ======= FUNCTIONS ARE BELOW ======== //

function getRandomNumber(min, max) {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}
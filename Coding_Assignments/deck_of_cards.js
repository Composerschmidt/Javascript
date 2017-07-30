// Object contructor for the cards.
    function Card(suit, value){
        this.suit = suit;
        this.value = value;
    };

// Object contructor for the deck.
    function Deck(){
      this.cards = [];
      var suits = ['diamonds', 'spades', 'hearts', 'clubs'];
      var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      this.builddeck = function(){
      // These set of loops (includig the nested foor loop) creats our desk by first creating cards in each suit with all the values declared in the values variable.
        for(suit in suits){
          for(value in values){
            // These cards are pushed into an array we have above as this.cards
            this.cards.push(new Card(suits[suit], values[value]))
          }
        }
      }
      // Now, everytime we run the Deck() function, we will a card of cards available to us.
        this.builddeck();
    };

// Every card game usually needs to reset at some point, here is a fucntion that does that, using prototype.
Deck.prototype.reset = function() {
  this.cards = [];
  this.builddeck();
};

// Another prototype fucntion that is used to deal the cards in random order.
Deck.prototype.deal = function () {
  // Reminder: we are using Math.floor because Math.random returns numbers with a decimal value, we want whole values to be more clear.
  var num = Math.floor(Math.random()*this.cards.length);
  var card = this.cards[num];
  // Using .splice() to get the index of card, and returning one card.
  this.cards.splice(num, 1);
  return card;
  // Note: every time you deal a new card, that card will be taken out of the Deck array => Deck.cards())
};

// Object contructor for a player:
  function Player(name){
    this.name = name;
    this.hand = [];
  };
  // Prototype method that can draw a card from the deck.
  Player.prototype.draw = function(card){
    this.hand.push(card);
  };
  // Prototype method that will discard a card form the player's hand.
  Player.prototype.discard = function(idx){
    if(idx > this.hand.length - 1){
      console.log("You don't have that many cards.")
      return;
    }
    this.hand.splice(idx, 1);
  };

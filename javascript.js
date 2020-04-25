var quotes = [
'you are amazing',
'i adore you',
'you are beautiful',
'im so happy youre mine',
'to the ends of the universe',
'youre adorable',
'youre cute',
'i cant wait to spend forever with you',
'you are my whole world',
'i love doing nothing with you',
'your laugh makes my heart warm',
'your smile makes me smile',
'im so lucky to be yours',
'i want to hold you and never let go',
'our love is stronger than any distance',
'you and i are meant to be'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
var quotes = [
'you are amazing',
'i adore you',
'you are beautiful',
'im so happy you\'re mine',
'to the ends of the universe',
'you\'re adorable',
'you\'re cute',
'i cant wait to spend forever with you',
'you are my whole world',
'i love doing nothing with you',
'your laugh makes my heart warm',
'your smile makes me smile',
'im so lucky to be yours',
'i want to hold you and never let go',
'our love is stronger than any distance',
'you and i are meant to be',
'i love loving you',
'i want to wake up next to you every day',
'you are perfect']

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
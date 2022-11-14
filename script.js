const quotes = [
    'Ever tried. Ever failed. No matter. Try Again.',
    'Start where you are. Use what you have. Do What you can.', 
    'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    'It does not matter hoe slowly you go as long as you do not stop.',
    'Our greatest weakness is in giving up. The most certain way to succeed is always to try just one more time.'
];

function newQuote() {
    //generate a random number that will always match the length of the items that are in an array
    var randomNumber = Math.floor(Math.random() * quotes.length);
    console.log(randomNumber);
    //Change the innerHtml of quoteDisplay by setting quotes index = to randomNumber 
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    };
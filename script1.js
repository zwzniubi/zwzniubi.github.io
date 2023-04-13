const quotes = [
    {
        quote: "We shape our tools and thereafter our tools shape us.",
        author: "Marshall McLuhan"
    },
    {
        quote: "The medium is the message.",
        author: "Marshall McLuhan"
    },
    {
        quote: "The medium is the massage.",
        author: "Marshall McLuhan"
    },
];

document.addEventListener('DOMContentLoaded', () => {

    const generateQuoteButton = document.getElementById('generate-quote');
    const quoteDisplay = document.getElementById('quote-display');
    const quoteText = quoteDisplay.querySelector('p');
    const quoteAuthor = quoteDisplay.querySelector('footer');

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote(quoteObj) {
        quoteText.textContent = quoteObj.quote;
        quoteAuthor.textContent = quoteObj.author;
    }

    generateQuoteButton.addEventListener('click', () => {
        const randomQuote = generateRandomQuote();
        displayQuote(randomQuote);
    });
});

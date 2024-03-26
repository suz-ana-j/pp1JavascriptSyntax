// An array of funny cat quotes
const catQuotes = [
    "Cats are connoisseurs of comfort.",
    "Cats are intended to teach us that not everything in nature has a purpose.",
    "In ancient times cats were worshipped as gods; they haven't forgotten this.",
    "Cats are smarter than dogs. You can't get eight cats to pull a sled through snow.",
    "As every cat owner knows, nobody owns a cat."

];

// Function to generate a random quote from the array
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * catQuotes.length);
    return catQuotes[randomIndex];
} 

// Call the function to generate and output a random quote 
const randomQuote = generateRandomQuote();
console.log(randomQuote);
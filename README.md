# Portfolio Project # 1: JavaScript Syntax
This is my 1st Portfolio Project in my Full-Stack Engineer career path with CodeCademy! ╰(*°▽°*)╯ Portfolio Projects are different than the projects I am used to doing on CodeCademy because I am only given a prompt, no step-by-step guidance.

## Mixed Messages
I built a message generator program that outputs a new random message every time a user runs the program. My program showcases basic JavaScript Syntax and programming concepts! The message generator outputs 5 random funny cat quotes.

## Code Break-down
* const catQuotes = this is an array with 5 funny fat quotes! It is a const so it cannot be changed later on. However, if I was working on this project with a team, I would make this array a "let" so that my team can .push() more quotes to the array later on. Or, the team could add the quotes to the const array since it is a short project!
* The function getRandomQuote has a const randomIndex that uses Math.floor() to generate only even numbers and Math.random() to generate random index numbers of the cat quotes array using catQuotes.length
* The function then returns catQuotes with a randomIndex of 0 - 4 because there are 5 quotes
* To call the function, I logged randomQuotes with the const function of generateRandomQuote as it's value

![Cat GIF](giphy.gif)


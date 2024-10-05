import { input, select} from '@inquirer/prompts';
import { say } from 'cowsay';

import { favoriteCostume } from './questions/favorite-costume.js';
import { favoriteCandy } from './questions/favorite-candy.js';
import { favoriteHorrorMovie } from './questions/favorite-horror-movie.js';

const name = await input({message: 'What is your name?'});
console.log(say({text: `Hello ${name}`, e: "o-"}));

const costume = await select(favoriteCostume);
const candy = await select(favoriteCandy);
const movie = await select(favoriteHorrorMovie);

console.log("🎃 Welcome to the Spooktacular Halloween Survey! 🎃");
console.log(`/nThanks ${name}, for sharing your spooky favorites! Here's you Halloween profile:`);
console.log(`- Favorite Costume: ${costume}`);
console.log(`- Favorite Candy: ${candy}`);
console.log(`- Favorite Horror Movie: ${movie}`);
console.log(`Remember, the best way to celebrate Halloween is with candy, costumes, and a good scare! 👻`);

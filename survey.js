//Module imports
import { input, select} from '@inquirer/prompts';
import { say } from 'cowsay';
import chalk  from 'chalk';
// import * as emoji from 'node-emoji'
import boxen from 'boxen';

//Survey questions from questions folder(directory)
import { favoriteCostume } from './questions/favorite-costume.js';
import { favoriteCandy } from './questions/favorite-candy.js';
import { favoriteHorrorMovie } from './questions/favorite-horror-movie.js';

//Setting up chalk colors for usage
const halloween = chalk.hex('#FFA500'); //Orange color
const profileMessage = chalk.bold.greenBright;
const favorites = chalk.bold.bgBlue;
const titles = chalk.bold.hex('#FFA500');



//Greeting and name display with cowsay
console.log(halloween(`🎃 Welcome to the Spooktacular Halloween Survey! 🎃`));
const name = await input({message: 'What is your name?'});
console.log(say({text: `${name}, I'v vant to suck vour blood!!`, e: ". .", T: "vv"}));

//Get the user selections
const costume = await select(favoriteCostume);
const candy = await select(favoriteCandy);
const movie = await select(favoriteHorrorMovie);

//After Survey is complete display Halloween profile
console.log(profileMessage(`\n${name}, Thank You for sharing your spooky Halloween favorites! Here's your profile:`));
console.log(boxen(favorites(`${costume}`), {title: titles('Favorite Costume'), titleAlignment: 'center'}));
console.log(boxen(favorites(`${candy}`), {title: titles('Favorite Candy'), titleAlignment: 'center'}));
console.log(boxen(favorites(`${movie}`), {title: titles('Favorite Horror Movie'), titleAlignment: 'center'}));
console.log(halloween(`\nRemember, the best way to celebrate Halloween is with candy, costumes, and a good scare! 👻`));


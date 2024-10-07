# Node-Assignment-2

🎃 Welcome to the Spooktacular Halloween Survey! 🎃

A command-line survey with questions about your Spooky  Halloween favorites.
After completing the survey you will be given your Halloween Profile. 👻

## Setup

- Create a repository.
- Add .gitignore for Node.js.
- Run

        npm init -y

* That creates a package.json file. May need to add ("type": "module") to allow imports. 

- Run

        npm install inquirer
        npm install cowsay
        npm install chalk
        npm install boxen

* inquirer is for our prompts <https://www.npmjs.com/package/@inquirer/prompts>
* cowsay is to add some fun! <https://www.npmjs.com/>
* chalk is to bring some colors and more! <https://www.npmjs.com/package/chalk>
* boxen adds boxes with labels. <https://www.npmjs.com/package/boxen>

## Structure

    questions:

        * favorite-costume 
        * favorite-candy
        * favorite-horror-movie

    Survey Application:

        * survey.js

    Run(in terminal): 
            npm install
            node survey.js

    * To start the survey

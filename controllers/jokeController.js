const Joke = require("../model/jokeModel");

async function getJokes() {
  try {
    const jokes = await Joke.getAll();
    return jokes;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getJoke(id) {
  try {
    const joke = await Joke.getById(id);
    return joke;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getRandom() {
  try {
    const jokes = await getJokes();
    if (jokes) {
      //console.log(jokes[Math.floor(Math.random() * jokes.length)].text);
      return jokes[Math.floor(Math.random() * jokes.length)];
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getJokes,
  getJoke,
  getRandom,
};

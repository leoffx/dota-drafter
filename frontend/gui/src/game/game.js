const tf = require('@tensorflow/tfjs');

async function loadModels() {
  const MODEL_URL = './model/model.json';
  model = await tf.loadGraphModel(MODEL_URL);
  console.log('Loaded!');
}

async function predict() {
  let teamOneHot = new Array(n);
  for (let i = 0; i < n; ++i) teamOneHot[i] = 0; //initialize one hot
  while (!model) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  for (let idx of heroList) {
    //fill one hot, 1 for radiant, -1 for dire
    teamOneHot[idx] += 1;
  }
  prediction = await model.predict(teamOneHot);
  return prediction;
}

/** Class representing the game board. */
class Game {
  start() {
    loadModels();
    // Return empty team arrays, and all heroes choice possibility
    return state;
  }

  legalPlays(state) {
    // Return arrays of possible heroes to play
    return plays;
  }

  nextState(state, move) {
    // Choose randomly a hero to the current team
    return newState;
  }

  winner(state) {
    // If there are 10 heroes chosen
    // run the NN to elect the winner here
    return winner;
  }
}
module.exports = Game;

import { Component } from 'react';
import * as tf from '@tensorflow/tfjs';

export default class Mctslogic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return null;
  }

  async loadModels() {
    const MODEL_URL = './model/model.json';
    this.state.model = await tf.loadGraphModel(MODEL_URL);
    console.log('Loaded!');
  }

  async predict() {
    let len = this.props.heroesList.length;
    let teamOneHot = new Array(len);
    for (let i = 0; i < len; ++i) teamOneHot[i] = 0; //initialize one hot
    while (!this.state.model) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    for (let idx of this.props.heroesList) {
      //fill one hot, 1 for radiant, -1 for dire
      teamOneHot[idx] += 1;
    }
    let prediction = await this.state.model.predict(teamOneHot);
    return prediction;
  }
}

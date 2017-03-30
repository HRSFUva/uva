var synaptic = require("synaptic");

module.exports.newUserNN = () => {
  return new synaptic.Architect.Perceptron(6, 3, 1);
}

const trainingSet = [
  {
    input: [0, 0, 0, 0, 0, .2],
    output: [1]
  },
  {
    input: [0, 0, 0, 0, 0, .9],
    output: [0]
  },
  {
    input: [0, 0, 0, 0, 0, .4],
    output: [1]
  },
  {
    input: [0, 0, 0, 0, 0, .1],
    output: [1]
  },
  {
    input: [0, 0, 0, 0, 0, .8],
    output: [0]
  },
  {
    input: [0, 0, 0, 0, 0, .6],
    output: [0]
  },
]

module.exports.train = (NN, trainingSet) => {
  const newUserTrainer = new synaptic.Trainer(NN);
  newUserTrainer.train(trainingSet);
  return NN;
}

let NN = module.exports.newUserNN();
NN = module.exports.train(NN, trainingSet);

let recs = NN.activate([1, 1, 1, 1, 1, .2]);
console.log('.2: ', recs);
recs = NN.activate([1, 0, 1, 0, 1, .4]);
console.log('.4: ', recs);
recs = NN.activate([1, 1, 1, 0, 1, .8]);
console.log('.8: ', recs);



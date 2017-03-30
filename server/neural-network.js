var synaptic = require("synaptic");

module.exports.newUserNN = () => {
  return new synaptic.Architect.Perceptron(6, 3, 1);
}

module.exports.train = (NN, trainingSet) => {
  const newUserTrainer = new synaptic.Trainer(NN);
  newUserTrainer.train(trainingSet);
  return NN;
}



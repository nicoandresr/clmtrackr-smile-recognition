const smileModel = {
  bias: -1.4786712822,
  coefficients: [0.014837209675880276, 0.31092627456808286, -0.1214238695400552, 0.45265837869400843, 0.36700140259900887, 1.7113646510738279e-15, -0.4786251427206033, -0.15377369505521801, -0.16948121903942992, 6.0300272629176253e-15, -0.021184992727875669, -6.9318606881292957e-15, -0.81611603551588852, -3.7883560238442657e-15, 0.1486320646217055, 0.94973410351769527, 3.6260400713070416e-15, -0.31361179943007411]
};

const predict = (parameters) => {
  let { bias: score } = smileModel;
  const { coefficients } = smileModel;
  for (let i = 0; i < coefficients.length; i += 1) {
    score += coefficients[i] * parameters[i + 6];
  }
  return 1.0 / (1.0 + Math.exp(-score));
};

class SmileClassifier {
  constructor() {
    this.previousParameters = [];
  }

  meanPredict(parameters) {
    this.previousParameters.splice(0, this.previousParameters.length === 10 ? 1 : 0);
    this.previousParameters.push(parameters.slice(0));

    if (this.previousParameters.length <= 9) { return false; }

    const meanParameters = [];
    for (let i = 0; i < parameters.length; i += 1) {
      meanParameters[i] = 0;
    }
    for (let i = 0; i < this.previousParameters.length; i += 1) {
      for (let j = 0; j < parameters.length; j += 1) {
        meanParameters[j] += this.previousParameters[i][j];
      }
    }
    for (let i = 0; i < parameters.length; i += 1) {
      meanParameters[i] /= 10;
    }

    const value = predict(meanParameters);

    return value > 0.4;
  }
}

export default SmileClassifier;

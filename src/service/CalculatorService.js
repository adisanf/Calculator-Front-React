class CalculatorService {
  static saveCurrentOperations() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Current data have been saved !');
      }, 500);
    });
  }

  static getHistory() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var fakeData = ['1+1*4 = 5', '2*8/2 = 8'];
        resolve(fakeData);
      }, 500);
    });
  }
}

export { CalculatorService };

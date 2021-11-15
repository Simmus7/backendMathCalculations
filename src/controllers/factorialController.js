const factorialController = {};

factorialController.factorial = (req, res) => {
    let { n } = req.body;
    if (isNaN(n) || n < 0 || n> 20000 || n%1 != 0){
    res.json("Unvalid numbers")
    }
    else {
        var toReturn = {
            n : factorial(n).toString()
        }
        res.json(toReturn)
    }
}
const lut = [1n, 1n];
function factorial (n) {
    for (let i = lut.length; i <= n; i++) {
      lut.push(BigInt(i) * lut[i - 1]);
    }
    return lut[n];
  };

module.exports = factorialController;
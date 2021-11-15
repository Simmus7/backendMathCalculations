const factorialController = {};

factorialController.factorial = (req, res) => {
    let { n } = req.body;
    if (isNaN(n) || n < 0 || n> 10000 || n%1 != 0){
    res.json("Unvalid numbers")
    }
    else {
        var toReturn = {
            n : trim(factorial(n).toString())
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

  function trim (cadena){
      let newString = ""
      let cont = 0;
    for (let i=0; i<cadena.length; i++){
        if(cont === 90){
            cont = 0
            newString = newString + cadena.charAt(i)+ " "
        }
        else {
            newString = newString + cadena.charAt(i)
            cont++

        }
    }
    return newString
  }

module.exports = factorialController;
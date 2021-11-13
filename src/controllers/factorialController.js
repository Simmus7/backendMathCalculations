const factorialController = {};

factorialController.factorial = (req, res) => {
    let { n } = req.body;
    if (isNaN(n) || n <= 0){
        res.json("Por favor ingrese un número válido")
    }
    else {
        var toReturn = {
            n : factorial(n)
        }
        res.json(toReturn)
    }
}
function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

module.exports = factorialController;
const factorialController = {};

factorialController.factorial = (req, res) => {
    let { n } = req.body;
if (isNaN(n) || n <= 0 || n> 170 || n%1 != 0){
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
    console.log(total)
	return total; 
}

module.exports = factorialController;
const fibonacciController = {};

fibonacciController.fibonacci = (req, res) => {
    let { n } = req.body;
    if (isNaN(n) || n <= 0){
        res.json("Por favor ingrese un número válido")
    }
    else {
        var toReturn = {
            n : fibonacciSequence(n)
        }
        res.json(toReturn)
    }
    
}
function fibonacciSequence (number) {
    let n1 = 0, n2 = 1, nextTerm;
    let sequence = ""
    for (let i = 1; i <= number; i++) {
        sequence = sequence + n1 + " "
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return sequence;
}


module.exports = fibonacciController;
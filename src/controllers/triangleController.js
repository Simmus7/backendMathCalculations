const triangleController = {};

triangleController.triangleAreaAndPerimeter = (req, res) => {
    let { l1, l2, l3 } = req.body;
    if (isNaN(l1) || l1 <= 0 || isNaN(l2) || l2 <= 0 || isNaN(l3) || l3 <= 0){
        res.json("Por favor ingrese numeros válidos")
    }
    else {
        var toReturn = {
            n : getArea(l1,l2,l3)
        }
        res.json(toReturn)
    }
}


function getArea( a, b, c ) {
    // Devuelve el área de un triángulo usando la fórmula de Herón.
    var semiperimetro =   (a + b + c) / 2;
    var valor         =   semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
    return Math.sqrt( valor );
  }
module.exports = triangleController;
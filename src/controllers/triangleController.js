const triangleController = {};

triangleController.triangleAreaAndPerimeter = (req, res) => {
    let { l1, l2, l3 } = req.body;
    if (isNaN(l1) || l1 < 0 || isNaN(l2) || l2 < 0 || isNaN(l3) || l3 < 0 || l1 > 2300000000000000 || l2>2300000000000000 || l3>2300000000000000){
        res.json("Unvalid numbers")
    }
    else {
        var toReturn = {
            area: getArea(l1,l2,l3),
            perimeter :  getPerimeter(l1,l2,l3)
        }
        res.json(toReturn)
    }
}
    

function getArea( a, b, c ) {
    // Devuelve el área de un triángulo usando la fórmula de Herón.
    a = a*1
    b = b*1
    c = c*1
    var semiperimetro =   (a + b + c) / 2;
    var valor         =   semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c);
    return Math.sqrt( valor );
  }

  function getPerimeter( a, b, c ) {
    return a*1+b*1+c*1 ;
  }

module.exports = triangleController;
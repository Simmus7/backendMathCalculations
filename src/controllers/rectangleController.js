const rectangleController = {};

rectangleController.rectangleAreaAndPerimeter = (req, res) => {
    let { altura, largo } = req.body;
    if (isNaN(altura) || altura <= 0 || isNaN(largo) || largo <= 0){
        res.json("Por favor ingrese numeros válidos")
    }
    else {
        var toReturn = {
            n : altura*largo
        }
        res.json(toReturn)
    }
}



module.exports = rectangleController;